'use strict'

$(document).ready(init)

var $addTenant
var $addApt
var $maxRooms

var $showApts
var $showTenants

function init() {


  initApts();





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

function initApts() {

  //LOGIC TO CALC ROOMS
  // cur.rooms.length how many filled rooms
  // maxRooms - cur.rooms.length vacant rooms

// // data[]
// imgURL: {type: String},
// name: {type: String},
// maxRooms: {type: Number},
// rooms: [{ type: mongoose.Schema.Types.ObjectId, ref: "Room"}]
  $.get('/apartments', function(err, data) {
    if (err){
      console.log('Get Apt Error', err);
    } else{

      data.foreach(function(cur, index, arr) {
        debugger
        var $newRow = $('#aptTemplate').clone();
        $newRow.removeClass('aptTemplate')



        $newRow.find('.name').text(cur.name)
        $newRow.find('.imgURL').text(cur.imgURL)
        $newRow.find('.maxRooms').text(cur.maxRooms)

      })

    /* td class="name"></td>
      <td class="usedRooms"></td>
      <td class="vacRooms"></td>
      <td class="numTenants"></td>
      <td></td>
      <td class="viewButton"></td */

    }
  })


}

function addTenant() {}
function addApt() {}
function maxRooms() {}
function showApts() {}
function showTenants() {}
