import Ember from 'ember';

export default Ember.Controller.extend({
	firstCount: 50,
	secondCount: 50,
	actions: {
		firstFakeDataHandler() {
			let count = this.get('firstCount');
			this.set('firstCount', count += 10 );
		},
		secondFakeDataHandler() {
			let count = this.get('secondCount');
			this.set('secondCount', count += 10 );
		}
	}
});
