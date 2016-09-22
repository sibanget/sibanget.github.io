
const state = {
  list: [],
  categories: [],
  current: {},
}


const mutations = {

  POST_LIST_UPDATE_ALL (state,arg) {

    function parseTanggal(str) {
      let day = str.substr(0,2)
      let month = str.substr(3,2)
      let year = str.substr(6,4)
      return [day,month,year]
    }

    function toDate(str) {
      let parsedDate = parseTanggal(str)
      return new Date(parsedDate[2], parsedDate[1] - 1, parsedDate[0])
    }

    function toBulanIndo(index) {
      let bulans = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
      return bulans[index]
    }

    function toTanggalIndo(date) {

    }

    arg.forEach((post) => {
      let { date, deadline } = post
      let dateNow = new Date()
      let dateDeadline = toDate(deadline)
      let selisihMiliSecond = dateDeadline - dateNow
      let sisaHari = Math.ceil(selisihMiliSecond / 1000 / 60 / 60 / 24)
      post.sisaHari = sisaHari
      post.status = sisaHari === 1 ? 'danger' : sisaHari <= 2 ? 'warning' : 'aman'
    })
    state.list = arg
  },

  POST_GROUPING_CATEGORIES (state,arg) {
    let categories = []
    state.list.forEach((item) => {
      let duplicated = categories.indexOf(item.category)
      if(duplicated === -1) categories.push(item.category)
    })
    state.categories = categories
  },

}

export default { state, mutations };
