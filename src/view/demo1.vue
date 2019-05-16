<template>
<div>
    <h1>{{msg}}</h1>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'demo1'
})
export default class Demo1 extends Vue {
  private msg: string = 'fanttb';
}
</script>
