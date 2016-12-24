var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
    it('treba postojati', () => {
        expect(Countdown).toExist();
    });


    describe('handleSetCountdown', () => {
      //(done) javlja Mochi da radi asinkronizirano testiranje i treba ćekati kada se pozove done da zaustavi test
        it('treba postaviti state i pokrenuti odbrojavanje', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(10);

            //testira dali prima broj i dali je stavila state na started
            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe('started');

            //provjereava dali se state promijeni za -1 (unutar jedne sekunde)
            setTimeout(() => {
                expect(countdown.state.count).toBe(9);
                //done
                done();
            },1001);
        });

        it('ne smije odbrojavati ispod nule', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(1);

            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
                done();
            }, 3001);
        });
      it('should pause countdown on paused status', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(3);
            countdown.handleStatusChange('paused');

            setTimeout(() => {
               expect(countdown.state.count).toBe(3);
               expect(countdown.state.countdownStatus).toBe('paused');
               done();
            }, 1001);
        });

        it('should reset count on stopped', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(3);
            countdown.handleStatusChange('stopped');

            setTimeout(() => {
               expect(countdown.state.count).toBe(0);
               expect(countdown.state.countdownStatus).toBe('stopped');
               done();
             }, 1001);
        });

    });

});
