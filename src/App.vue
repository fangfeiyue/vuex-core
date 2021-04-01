<template>
  <div id="app">
    <div>
      count:{{$store.state.count}}
    </div>

    <div>
      gettter:{{$store.getters.getCount}}
    </div>

    <button @click="$store.commit('changeCount', 10)">同步加{{$store.state.count}}</button>

    <button @click="$store.dispatch('changeCount', 100)">异步加{{$store.state.count}}</button>
  </div>
</template>
