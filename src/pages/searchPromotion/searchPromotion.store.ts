import { observable, runInAction, makeObservable } from 'mobx'
import searchPromotionApi from 'Api/search'

class SearchPromotionStore {
  constructor() {
    makeObservable(this)
  }

  @observable modalShow: boolean = false
  @observable expiredPlanData = []
  @observable dataTrendData = []

  async getExpiredPlanList() {
    try {
      await searchPromotionApi.featchExpiredPlan().then((res: any) => {
        runInAction(() => {
          this.expiredPlanData = res.data.data
          this.modalShow = this.expiredPlanData.length > 0
        })
      })
    } catch (error) {
      console.log('error', error)
    }
  }

  async getChartData() {
    try {
      await searchPromotionApi.featchChartData().then((res: any) => {
        runInAction(() => {
          this.dataTrendData = res.data.data
        })
      })
    } catch (error) {
      console.log('error', error)
    }
  }
}

export default new SearchPromotionStore()
