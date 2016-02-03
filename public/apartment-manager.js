'use strict'

$(document).ready(init)

var $addTenant
var $addApt
var $maxRooms

var $showApt
var $showTenants

function init() {
  initApts();
  $addTenant = $('#addTenant')
  $addApt = $('#addApt')
  $maxRooms = $('#maxRooms')
  $showApt = $('.view_but')

  $showTenants = $('#showTenants')

  $addTenant.on('click', addTenant)
  $addApt.on('click',  addApt)
  $maxRooms.on('click', maxRooms)
  $('#mainHost').on('click', '.view_but', showApt)
  // $showApt.on('click', showApt)
  $showTenants.on('click', showTenants)
  $(".tenants")
  //wire up button for post route
  $(".addNew").on("click", addNewApt )
}



//post to appartments/addNew
function addNewApt(){
  var newApt = {};
  newApt.name = $(".aptName").val();
  newApt.vacantRooms = $(".usedRooms").val();
  newApt.fullRooms = $(".vacantRooms").val();
  //grab the mongo id that was stored in the data of the drop down
  newApt.tentant = $(".tenants").data('id');

  $.post("/apartments/new", newApt)  
    .success(function(res){
    console.log(res);
  })
    .fail(function(err){
    console.error(err);
  });
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
  $.get('/apartments', function(data) {

    data.forEach(function(cur, index, arr) {
      var $newRow = $('.aptTemplate').clone();
      $newRow.removeClass('aptTemplate')

      $newRow.find('.name').text(cur.name)
      $newRow.find('.imgURL').text(cur.imgURL)
      $newRow.find('.view_but').attr('data-id', cur._id)
      $newRow.find('.maxRooms').text(cur.maxRooms)

      $('#mainHost').append($newRow);
     })
  })

  //populate drop down with mongo ids of tenants
    $.get("/tenants")  
    .success(function(tenants){
      tenants.forEach(function(item, index, all){
//I don't rememeber if this is the right syntax for adding data 
// and appending to the DOM,but it looks like from what you have above
// you are probably already familiar with that.
        var $selectItem = $('<select>').val(item.name).data("id", item._id);
        $('.tenantsDropDown').append($selectItem);
      })
    })    
    .fail(function(err){
    console.error(err);
  });

}

function addTenant() {}
function addApt() {}
function maxRooms() {}
function showApt() {
  console.log(this)
}
function showTenants() {}
