/*=============================================================================
Author: Michael Erb
Contact: michael@erbwebdev.com
Created: 9-1-2016
=============================================================================*/

var chatsApp = angular.module('ewdApp', ['ngclipboard','headroom','checklist-model']);

chatsApp.controller('mainCtrl', ['$scope', '$http', function($scope, $http){

  // Free items --------------------------------------------------------------
  $scope.freeItems = [
    'Basic Contacts Fields (Deleted)',
    'Restore Owner Id/Person Notes',
    'Update merchant account on orders/subscriptions to Infusionsoft Payments',
    'Deleted Campaigns'
  ]

  $scope.checkedFree = {
    item: []
  }

  $scope.isOneCheckedFree = function() {
    $scope.free = 'free';
    if($scope.checkedFree.item.length > 0){
      $scope.free = 'free'
    }else {
      $scope.free = ''
    }
    return $scope.free;
  };


  // basic items-----------------------------------------------------------
  $scope.basicItems = [
    'Custom Contact Fields',
    'Tasks',
    'Notes',
    'Appointments'
  ]

  $scope.checkedBasic = {
    item: []
  }

  $scope.quoteBasic = 0;
  $scope.isOneCheckedBasic = function() {
    if($scope.checkedBasic.item.length > 0){
      $scope.quoteBasic = 200
    }else {
      $scope.quoteBasic = 0
    }
    return $scope.quoteBasic;
  };

  // Order items-----------------------------------------------------------
  $scope.orderItems = [
    'Order records',
    'Credit Cards',
  ]

  $scope.checkedOrder = {
    item: []
  }

  $scope.quoteOrder = 0;
  $scope.isOneCheckedOrder = function() {
    if($scope.checkedOrder.item.length > 0){
      $scope.quoteOrder = 200
    }else {
      $scope.quoteOrder = 0
    }
    return $scope.quoteOrder;
  };

  // Large section items-----------------------------------------------------------
   $scope.largeSectionItems = [
   'Basic Contact Fields (Updated)',
   'Referral Partner Records',
   'Opportunity Record',
   'Tags (Deleted from System)',
   'Tags (Removed from Contact)',
   'Products',
  ]

  $scope.checkedLargeSection = {
   item: []
  }

  $scope.quoteLargeSection = 0;
  $scope.isOneCheckedLargeSection = function() {
    switch ($scope.checkedLargeSection.item.length) {
      case 1:
        $scope.quoteLargeSection = 200;
        break;
      case 2:
        $scope.quoteLargeSection = 400;
        break;
      case 3:
        $scope.quoteLargeSection = 600;
        break;
      case 4:
        $scope.quoteLargeSection = 800;
        break;
      case 5:
        $scope.quoteLargeSection = 1000;
        break;
      case 5:
        $scope.quoteLargeSection = 1000;
        break;
      case 6:
        $scope.quoteLargeSection = 1200;
        break;
      default:
        $scope.quoteLargeSection = 0;
    }
  };

  // Merged Contacts item-----------------------------------------------------------
  $scope.mergedContactsItems = [
    'Merged Contacts'
  ]

  $scope.checkedMergedContacts = {
    item: []
  }

  $scope.quoteMergedContacts = 0;
  $scope.isOneCheckedMergedContacts = function() {
    if($scope.checkedMergedContacts.item.length > 0){
      $scope.quoteMergedContacts = 600
    }else {
      $scope.quoteMergedContacts = 0
    }
    return $scope.quoteMergedContacts;
  };


  // button controls
  $scope.uncheckAll = function() {
    $scope.checkedFree.item = [];
    $scope.checkedBasic.item = [];
    $scope.checkedOrder.item = [];
    $scope.checkedLargeSection.item = [];
    $scope.checkedMergedContacts.item = [];

    $scope.isOneCheckedFree();
    $scope.isOneCheckedBasic();
    $scope.isOneCheckedOrder();
    $scope.isOneCheckedLargeSection();
    $scope.isOneCheckedMergedContacts();
  };


}]);
