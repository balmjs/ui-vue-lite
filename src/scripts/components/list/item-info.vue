<template>
  <span class="mdl-list__item-secondary-info">
    <slot></slot>
  </span>
</template>

<script>
import itemSecondaryMixin from '../../mixins/item-secondary';

export default {
  name: 'ui-item-info',
  mixins: [itemSecondaryMixin]
};
</script>
