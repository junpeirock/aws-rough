<template>
<div class="detail-price">
  <ul class="detail-price-list">
    <li v-for="(service, index) in services" :key="service.name" class="detail-price-item">
      <nuxt-link :to="`/${service.key}/`" class="detail-price-link text-link-hover">
        <span class="detail-price-color" :style="{backgroundColor: colors[index]}" />
        <p class="detail-price-name">{{ service.name }}</p>
      </nuxt-link>
      <ServicePartsPrice :price="service.total" mod="large" />
    </li>
  </ul>
</div>
</template>

<script>
import ServicePartsPrice from '@/components/service/parts/ServicePartsPrice'

export default {
  name: 'DetailPrice',
  components: { ServicePartsPrice },
  props: {
    services: {
      type: Array,
      required: true
    },
    colors: {
      type: Array,
      required: true
    }
  },
  computed: {}
}
</script>
