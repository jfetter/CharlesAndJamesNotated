'use strict'

$(document).ready(init)

var $addTenant
var $addApt
var $maxRooms

var $showApts
var $showTenants

function init() {
  $addTenant = $('#addTenant')
  $addApt = $('#addApt')
  $maxRooms = $('#maxRooms')
  $showApts = $('#showApts')
  $showTenants = $('#showTenants')

  $addTenant.on('click', addTenant)
  $addApt.on('click',  addApt)
  $maxRooms.on('click', maxRooms)
  $showApts.on('click', showApts)
  $showTenants.on('click', showTenants)
}

function addTenant() {}
function addApt() {}
function maxRooms() {}
function showApts() {}
function showTenants() {}
