<template>
  <div class="actions">
    <div class="action" v-for="view in views">
      <p>{{ view.name }}</p>
      <p>{{ view.title }}</p>
      <p>{{ view.description }}</p>
    </div>
    <div v-if="!views">Não há ações disponíveis</div>
    <p>Lindo</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Eita',
      views: null
    }
  },
  created() {
    chrome.tabs.query({ active: true }, ([{ id }]) => {
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
  }
}
</script>