describe('okhover', function() {
    var list, background, imageUri = 'http://okfoc.us/assets/images/logo.gif'

    beforeEach(function(){
        jasmine.getFixtures().set('<ul><li data-image="' + imageUri + '"><a href="#">okhover</a></li>');                
        this.addMatchers({
            toHaveBackgroundImage: function() {
                return /^url/.test(this.actual.css('backgroundImage'));
            }
        });
    });

    describe('with default options', function () {        
        beforeEach(function(){
            list = $('li').okhover();
            background = $('#ok-bg');
            expect(background).toExist();
        });
        
        it('mouseover event reveals tiled image', function () {
            $('li').trigger('mouseover');
            expect(background).toHaveBackgroundImage();
        });
        
        it('mouse out hides background', function() {
            $('li').trigger('mouseout');
            expect(background.css('backgroundImage')).toBe('none');
        });

    });

    describe('with zindex set', function () {        
        beforeEach(function(){
            list = $('li').okhover({ zIndex: 666 });
            background = $('#ok-bg');
            expect(background).toExist();
        });

        it('mouseover event reveals tiled image', function () {
            $('li').trigger('mouseover');
            expect(background).toHaveBackgroundImage();
        });
        
        it('background zindex is specified by user', function(){
            expect(background.css('zIndex')).toBe('666');
        });

        it('mouse out hides background', function() {
            $('li').trigger('mouseout');
            expect(background.css('backgroundImage')).toBe('none');
        });

    });
});