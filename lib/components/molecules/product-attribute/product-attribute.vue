<template>
  <section class="vf-m-product-attribute">
    <vf-m-row tag="dl">
      <template v-for="(value, key) in attributes">
        <vf-m-col :key="`name-${key}`" sm="4" tag="dt">
          <vf-a-heading level="6" class="vf-m-product-attribute__name text-sm mb-0">{{value.name}}</vf-a-heading>
        </vf-m-col>
        <vf-m-col :key="`value-${key}`" sm="8" tag="dd">
          <div
            v-for="(option, optionKey) in value.options"
            :key="optionKey"
            class="vf-m-product-attribute__value text-sm"
          >{{option}}</div>
        </vf-m-col>
      </template>
    </vf-m-row>
  </section>
</template>
<script>
export default {
  props: ["attributes"]
};
</script>
