<template>
  <div class="actions">
    <div v-if="!views">No actions available.</div>
    <div v-else>
      <h2 class="title">Store name</h2>
      <div class="actions-container">
        <button class="action" v-for="view in views" @click="dispatch(view.name)" :title="view.description">
          {{ view.title }}
        </button>
      </div>
    </div>
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

<style>
.action {
  flex: 1 1;
  flex-basis: calc(50% - 10px);
  border-radius: 10px;
  border: 0;
  width: 100%;
  text-align: center;
  background: #F51963;
  color: #fff;
  font-weight: bold;
  font-size: 12px;
  margin: 3px;
  padding: 10px;
  outline: none;
  cursor: pointer;
}

.title {
  text-align: center;
  font-size: 14px;
}

.actions-container {
  display: flex;
  flex-flow: row wrap;
  align-items: stretch;
}
</style>