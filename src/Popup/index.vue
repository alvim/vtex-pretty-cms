<template>
  <div class="actions">
    <button class="action" v-for="view in views" @click="dispatch(view.name)">
      <p>{{ view.title }}</p>
      <p>{{ view.description }}</p>
    </button>
    <div v-if="!views">Não há ações disponíveis</div>
    <p>Lindo</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Eita',
      views: null,
      tabId: null
    }
  },
  created() {
    const self = this
    chrome.tabs.query({ active: true }, ([{ id }]) => {
      self.tabId = id
      return chrome.tabs.sendMessage(id, { type: 'REQUEST_AVAILABLE_ACTIONS' })
    })

    chrome.runtime.onMessage.addListener(({ type, views }, sender, sendResponse) => {
      switch(type) {
        case 'UPDATE_VIEW':
          this.views = views
          break
        default:
          null
      }
    })
  },
  methods: {
    dispatch(name) {
      chrome.tabs.sendMessage(this.tabId, { type: 'RUN_ACTION', name })
    }
  }
}
</script>