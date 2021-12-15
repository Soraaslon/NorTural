const bahia__c = document.querySelector('#bahia__container')
const bahia = document.querySelector('#point__bahia')
const all__c = document.getElementsByClassName('states__container')

function clearContents() {
  ;[].forEach.call(all__c, function (c) {
    c.classList.remove('active')
  })
}

bahia.addEventListener('click', () => {
  clearContents()
  bahia__c.classList.add('active')
})

document.getElementsByClassName('close')[0].addEventListener('click', () => {
  bahia__c.classList.remove('active')
})

/*********************************************************/

const piaui__c = document.querySelector('#piaui__container')
const piaui = document.querySelector('#point__piaui')

piaui.addEventListener('click', () => {
  clearContents()
  piaui__c.classList.add('active')
})

document.getElementsByClassName('close')[1].addEventListener('click', () => {
  piaui__c.classList.remove('active')
})

/*********************************************************/

const maranhao__c = document.querySelector('#maranhao__container')
const maranhao = document.querySelector('#point__maranhao')

maranhao.addEventListener('click', () => {
  clearContents()
  maranhao__c.classList.add('active')
})

document.getElementsByClassName('close')[2].addEventListener('click', () => {
  maranhao__c.classList.remove('active')
})

/*********************************************************/

const ceara__c = document.querySelector('#ceara__container')
const ceara = document.querySelector('#point__ceara')

ceara.addEventListener('click', () => {
  clearContents()
  ceara__c.classList.add('active')
})

document.getElementsByClassName('close')[3].addEventListener('click', () => {
  ceara__c.classList.remove('active')
})

/*********************************************************/

const rgn__c = document.querySelector('#rgn__container')
const rgn = document.querySelector('#point__rgn')

rgn.addEventListener('click', () => {
  clearContents()
  rgn__c.classList.add('active')
})

document.getElementsByClassName('close')[4].addEventListener('click', () => {
  rgn__c.classList.remove('active')
})

/*********************************************************/

const paraiba__c = document.querySelector('#paraiba__container')
const paraiba = document.querySelector('#point__paraiba')

paraiba.addEventListener('click', () => {
  clearContents()
  paraiba__c.classList.add('active')
})

document.getElementsByClassName('close')[5].addEventListener('click', () => {
  paraiba__c.classList.remove('active')
})

/*********************************************************/

const pernambuco__c = document.querySelector('#pernambuco__container')
const pernambuco = document.querySelector('#point__pernambuco')

pernambuco.addEventListener('click', () => {
  clearContents()
  pernambuco__c.classList.add('active')
})

document.getElementsByClassName('close')[6].addEventListener('click', () => {
  pernambuco__c.classList.remove('active')
})

/*********************************************************/

const alagoas__c = document.querySelector('#alagoas__container')
const alagoas = document.querySelector('#point__alagoas')

alagoas.addEventListener('click', () => {
  clearContents()
  alagoas__c.classList.add('active')
})

document.getElementsByClassName('close')[7].addEventListener('click', () => {
  alagoas__c.classList.remove('active')
})

/*********************************************************/

const sergipe__c = document.querySelector('#sergipe__container')
const sergipe = document.querySelector('#point__sergipe')

sergipe.addEventListener('click', () => {
  clearContents()
  sergipe__c.classList.add('active')
})

document.getElementsByClassName('close')[8].addEventListener('click', () => {
  sergipe__c.classList.remove('active')
})
