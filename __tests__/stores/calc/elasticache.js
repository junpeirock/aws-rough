import elasticache from '../../../stores/calc/elasticache'
import { MONTHLY_HOURS } from '../../../stores/constants'

describe('elasticache', () => {
  test('ElastiCacheの料金を計算できる', () => {
    const priceList = {
      elasticache: {
        instance: [
          {
            price: 0.026,
            attributes: {
              instanceType: 'cache.t2.micro'
            }
          }
        ]
      }
    }

    const emptyRow = {
      instance: '',
      unit: 0
    }

    expect(elasticache(emptyRow, priceList)).toBe(0)

    const row = {
      instance: 'cache.t2.micro',
      unit: 2
    }

    const expected = 0.026 * MONTHLY_HOURS * 2

    expect(elasticache(row, priceList)).toBe(expected)
  })
})
