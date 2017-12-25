(function(){
    var app = angular.module('store-products',[]);
    
    app.directive('productTitle', function(){
        return {
             restrict: 'E',
             templateUrl: 'product-title.html' 
        };
    });
    
    app.directive('productGallery', function(){
        return {
            restrict: 'E', 
            templateUrl: 'product-gallery.html'
        }
    });
    
    app.directive('productPanels', function(){
        return {
            restrict: 'E',
            templateUrl: 'product-panels.html',
            controller: function(){
             this.tab = 1;
             this.selectTab = function(setTab){
                 this.tab = setTab;
             };
             this.isSelectTab = function(checkTab){
                 return this.tab === checkTab;
             };
            },
            controllerAs: 'panel'
        };
    });
})();