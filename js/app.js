(function(){
   var app = angular.module('store', []);
   
   app.controller('StoreController', function(){
    this.products = gems;
   });

   app.controller('PanelController', function(){
    this.tab = 1;
    this.selectTab = function(setTab){
        this.tab = setTab;
    };
    this.isSelectTab = function(checkTab){
        return this.tab === checkTab;
    };
   });

   var gems = [
        {
            name : 'Dodecahedron',
            price : 2.95,
            description : 'abc xzy 0',
            images: [
                {
                    full : 'gem-01-full.jpg',
                    thumb : 'gem-01-thumb.gif'
                },
                {
                    full : 'gem-02-full.jpg',
                    thumb : 'gem-02-thumb.png'
                }
            ],
            canPurchase : true,
            soldOut : false
        },
        {
            name : 'Pentagonal Gem',
            price : 5.95,
            description : 'abc xzy 0',
            images: [
                {
                    full : 'gem-01-full.jpg',
                    thumb : 'gem-01-thumb.gif'
                },
                {
                    full : 'gem-02-full.jpg',
                    thumb : 'gem-02-thumb.png'
                }
            ],
            canPurchase : true,
            soldOut : false
        }
    ];
})();