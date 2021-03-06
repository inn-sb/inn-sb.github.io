// register the grid component
Vue.component('demo-grid', {
  template: '#grid-template',
  props: {
    data: Array,
    columns: Array,
    filterKey: String
  },
  data: function () {
    var sortOrders = {}
    this.columns.forEach(function (key) {
      sortOrders[key] = 1
    })
    return {
      sortKey: '',
      sortOrders: sortOrders
    }
  },
  computed: {
    filteredData: function () {
      var sortKey = this.sortKey
      var filterKey = this.filterKey && this.filterKey.toLowerCase()
      var order = this.sortOrders[sortKey] || 1
      var data = this.data
      if (filterKey) {
        data = data.filter(function (row) {
          return Object.keys(row).some(function (key) {
            return String(row[key]).toLowerCase().indexOf(filterKey) > -1
          })
        })
      }
      if (sortKey) {
        data = data.slice().sort(function (a, b) {
          a = a[sortKey]
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }
      return data
    }
  },
  filters: {
    capitalize: function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  },
  methods: {
    sortBy: function (key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    }
  }
})



// bootstrap the demo
var demo = new Vue({
  el: '#demo',
  data: {
    showTbl: true,
    searchQuery: '',
    gridColumns: ['ИНН', 'банк', 'область'],
    gridData: [
{ИНН:'01',  банк:'Юго-Западный',  область:'Республика Адыгея (Адыгея)'},
{ИНН:'02',  банк:'Уральский',  область:'Республика Башкортостан'},
{ИНН:'03',  банк:'Байкальский',  область:'Республика Бурятия'},
{ИНН:'04',  банк:'Сибирский',  область:'Республика Алтай'},
{ИНН:'05',  банк:'Юго-Западный',  область:'Республика Дагестан'},
{ИНН:'06',  банк:'Юго-Западный',  область:'Республика Ингушетия'},
{ИНН:'07',  банк:'Юго-Западный',  область:'Кабардино-Балкарская Республика'},
{ИНН:'08',  банк:'Юго-Западный',  область:'Республика Калмыкия'},
{ИНН:'09',  банк:'Юго-Западный',  область:'Карачаево-Черкесская Республика'},
{ИНН:'10',  банк:'Северо-Западный',  область:'Республика Карелия'},
{ИНН:'11',  банк:'Западно-Уральский',  область:'Республика Коми'},
{ИНН:'12',  банк:'Волго-Вятский',  область:'Республика Марий Эл'},
{ИНН:'13',  банк:'Волго-Вятский',  область:'Республика Мордовия'},
{ИНН:'14',  банк:'Байкальский',  область:'Республика Саха (Якутия)'},
{ИНН:'15',  банк:'Юго-Западный',  область:'Республика Северная Осетия - Алания'},
{ИНН:'16',  банк:'Волго-Вятский',  область:'Республика Татарстан (Татарстан)'},
{ИНН:'17',  банк:'Сибирский',  область:'Республика Тыва'},
{ИНН:'18',  банк:'Западно-Уральский',  область:'Удмуртская Республика'},
{ИНН:'19',  банк:'Сибирский',  область:'Республика Хакасия'},
{ИНН:'20',  банк:'Юго-Западный',  область:'Чеченская Республика'},
{ИНН:'21',  банк:'Волго-Вятский',  область:'Чувашская Республика – Чувашия'},
{ИНН:'22',  банк:'Сибирский',  область:'Алтайский край'},
{ИНН:'23',  банк:'Юго-Западный',  область:'Краснодарский край'},
{ИНН:'24',  банк:'Сибирский',  область:'Красноярский край'},
{ИНН:'25',  банк:'Дальневосточный',  область:'Приморский край'},
{ИНН:'26',  банк:'Юго-Западный',  область:'Ставропольский край'},
{ИНН:'27',  банк:'Дальневосточный',  область:'Хабаровский край'},
{ИНН:'28',  банк:'Дальневосточный',  область:'Амурская область'},
{ИНН:'29',  банк:'Северный',  область:'Архангельская область'},
{ИНН:'30',  банк:'Поволжский',  область:'Астраханская область'},
{ИНН:'31',  банк:'Центрально-Черноземный',  область:'Белгородская область'},
{ИНН:'32',  банк:'Среднерусский',  область:'Брянская область'},
{ИНН:'33',  банк:'Волго-Вятский',  область:'Владимирская область'},
{ИНН:'34',  банк:'Поволжский',  область:'Волгоградская область'},
{ИНН:'35',  банк:'Северный',  область:'Вологодская область'},
{ИНН:'36',  банк:'Центрально-Черноземный',  область:'Воронежская область'},
{ИНН:'37',  банк:'Северный',  область:'Ивановская область'},
{ИНН:'38',  банк:'Байкальский',  область:'Иркутская область'},
{ИНН:'39',  банк:'Северо-Западный',  область:'Калининградская область'},
{ИНН:'40',  банк:'Среднерусский',  область:'Калужская область'},
{ИНН:'41',  банк:'Дальневосточный',  область:'Камчатская область'},
{ИНН:'42',  банк:'Сибирский',  область:'Кемеровская область'},
{ИНН:'43',  банк:'Волго-Вятский',  область:'Кировская область'},
{ИНН:'44',  банк:'Северный',  область:'Костромская область'},
{ИНН:'45',  банк:'Уральский',  область:'Курганская область'},
{ИНН:'46',  банк:'Центрально-Черноземный',  область:'Курская область'},
{ИНН:'47',  банк:'Северо-Западный',  область:'Ленинградская область'},
{ИНН:'48',  банк:'Центрально-Черноземный',  область:'Липецкая область'},
{ИНН:'49',  банк:'Дальневосточный',  область:'Магаданская область'},
{ИНН:'50',  банк:'Среднерусский',  область:'Московская область'},
{ИНН:'51',  банк:'Северо-Западный',  область:'Мурманская область'},
{ИНН:'52',  банк:'Волго-Вятский',  область:'Нижегородская область'},
{ИНН:'53',  банк:'Северо-Западный',  область:'Новгородская область'},
{ИНН:'54',  банк:'Сибирский',  область:'Новосибирская область'},
{ИНН:'55',  банк:'Западно-Сибирский',  область:'Омская область'},
{ИНН:'56',  банк:'Поволжский',  область:'Оренбургская область'},
{ИНН:'57',  банк:'Центрально-Черноземный',  область:'Орловская область'},
{ИНН:'58',  банк:'Поволжский',  область:'Пензенская область'},
{ИНН:'59',  банк:'Западно-Уральский',  область:'Пермский край'},
{ИНН:'60',  банк:'Северо-Западный',  область:'Псковская область'},
{ИНН:'61',  банк:'Юго-Западный',  область:'Ростовская область'},
{ИНН:'62',  банк:'Среднерусский',  область:'Рязанская область'},
{ИНН:'63',  банк:'Поволжский',  область:'Самарская область'},
{ИНН:'64',  банк:'Поволжский',  область:'Саратовская область'},
{ИНН:'65',  банк:'Дальневосточный',  область:'Сахалинская область'},
{ИНН:'66',  банк:'Уральский',  область:'Свердловская область'},
{ИНН:'67',  банк:'Среднерусский',  область:'Смоленская область'},
{ИНН:'68',  банк:'Центрально-Черноземный',  область:'Тамбовская область'},
{ИНН:'69',  банк:'Среднерусский',  область:'Тверская область'},
{ИНН:'70',  банк:'Сибирский',  область:'Томская область'},
{ИНН:'71',  банк:'Среднерусский',  область:'Тульская область'},
{ИНН:'72',  банк:'Западно-Сибирский',  область:'Тюменская область'},
{ИНН:'73',  банк:'Поволжский',  область:'Ульяновская область'},
{ИНН:'74',  банк:'Уральский',  область:'Челябинская область'},
{ИНН:'75',  банк:'Байкальский',  область:'Читинская область'},
{ИНН:'76',  банк:'Северный',  область:'Ярославская область'},
{ИНН:'77',  банк:'Московский',  область:'г. Москва'},
{ИНН:'78',  банк:'Северо-Западный',  область:'г. Санкт-Петербург'},
{ИНН:'79',  банк:'Дальневосточный',  область:'Еврейская авт. область'},
{ИНН:'80',  банк:'Байкальский',  область:'Агинский Бурятский авт. округ'},
{ИНН:'81',  банк:'Северо-Западный?',  область:'Коми-Пермяцкий автономный округ'},
{ИНН:'82',  банк:'',  область:'Корякский автономный округ'},
{ИНН:'83',  банк:'Северный',  область:'Ненецкий автономный округ'},
{ИНН:'84',  банк:'',  область:'Таймырский (Долгано-Ненецкий) авт. округ'},
{ИНН:'85',  банк:'Байкальский?',  область:'Усть-Ордынский Бурятский авт. округ'},
{ИНН:'86',  банк:'Западно-Сибирский',  область:'Ханты-Мансийский авт. округ - Югра'},
{ИНН:'87',  банк:'Дальневосточный',  область:'Чукотский автономный округ'},
{ИНН:'88',  банк:'',  область:'Эвенкийский автономный округ'},
{ИНН:'89',  банк:'Западно-Сибирский',  область:'Ямало-Ненецкий авт. округ'},
{ИНН:'90',  банк:'Среднерусский',  область:'Московская область'},
{ИНН:'91',  банк:'Северо-Западный',  область:''},
{ИНН:'93',  банк:'Юго-Западный',  область:'Краснодарский край'},
{ИНН:'97',  банк:'Московский',  область:'г. Москва'}



]
  },
  methods: {
    append(value) {
        this.searchQuery += value.toString()
    },
    clear() {
        this.searchQuery = ''
    }
},
computed: {
  isSearchQuery() {
      return this.searchQuery !== '';
  }
  }
})


// var body = new Vue({
//   el: '#body',
//   data: {
//     showTbl: true,
//   }
// })