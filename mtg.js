angular.module('MTG', ['ngTouch']).

directive('disableScrolling', function ($document) {
	return function (scope, element, attrs) {
		$document.bind('touchmove', function (e) {
			e.preventDefault();
		});
	};
}).

controller('CardCtrl', function ($scope) {
	var rand = function (max) {
		return Math.floor(Math.random() * (max + 1));
	},
	shuffle = function (deck) {
		var index = -1,
			shuffled = [];

		deck.forEach(function (card) {
			var r = rand(++index);

			shuffled[index] = shuffled[r];
			shuffled[r] = card;
		});

		return shuffled;
	};

	$scope.decks = {
		Planechase: [
			'academy-at-tolaria-west.jpg',
			'agyrem.jpg',
			'akoum.jpg',
			'aretopolis.jpg',
			'astral-arena.jpg',
			'bant.jpg',
			'bloodhill-bastion.jpg',
			'celestine-reef-pre-release-promo.jpg',
			'cliffside-market.jpg',
			'edge-of-malacol.jpg',
			'eloren-wilds.jpg',
			'feeding-grounds.jpg',
			'fields-of-summer.jpg',
			'furnace-layer.jpg',
			'gavony.jpg',
			'glen-elendra.jpg',
			'glimmervoid-basin.jpg',
			'goldmeadow.jpg',
			'grand-ossuary.jpg',
			'grixis.jpg',
			'grove-of-the-dreampods.jpg',
			'hedron-fields-of-agadeem.jpg',
			'horizon-boughs-gateway-promo.jpg',
			'immersturm.jpg',
			'isle-of-vesuva.jpg',
			'izzet-steam-maze.jpg',
			'jund.jpg',
			'kessig.jpg',
			'kharasha-foothills.jpg',
			'kilnspire-district.jpg',
			'krosa.jpg',
			'lair-of-the-ashen-idol.jpg',
			'lethe-lake.jpg',
			'llanowar.jpg',
			'minamo.jpg',
			'mirrored-depths.jpg',
			'mount-keralia.jpg',
			'murasa.jpg',
			'naar-isle.jpg',
			'naya.jpg',
			'nephalia.jpg',
			'norns-dominion.jpg',
			'onakke-catacomb.jpg',
			'orochi-colony.jpg',
			'orzhova.jpg',
			'otaria.jpg',
			'panopticon.jpg',
			'pools-of-becoming.jpg',
			'prahv.jpg',
			'quicksilver-sea.jpg',
			'ravens-run.jpg',
			'sanctum-of-serra.jpg',
			'sea-of-sand.jpg',
			'selesnya-loft-gardens.jpg',
			'shiv.jpg',
			'skybreen.jpg',
			'sokenzan.jpg',
			'stairs-to-infinity.jpg',
			'stensia.jpg',
			'stronghold-furnace.jpg',
			'takenuma.jpg',
			'talon-gates.jpg',
			'tazeem-release-promo.jpg',
			'tember-city.jpg',
			'the-aether-flues.jpg',
			'the-dark-barony.jpg',
			'the-eon-fog.jpg',
			'the-fourth-sphere.jpg',
			'the-great-forest.jpg',
			'the-hippodrome.jpg',
			'the-maelstrom.jpg',
			'the-zephyr-maze.jpg',
			'trail-of-the-mage-rings.jpg',
			'truga-jungle.jpg',
			'turri-island.jpg',
			'undercity-reaches.jpg',
			'velis-vel.jpg',
			'windriddle-palaces.jpg'
		],
		Archenemy: [
			'a-display-of-my-dark-power.jpg',
			'all-in-good-time.jpg',
			'all-shall-smolder-in-my-wake.jpg',
			'approach-my-molten-realm.jpg',
			'behold-the-power-of-destruction.jpg',
			'choose-your-champion.jpg',
			'dance-pathetic-marionette.jpg',
			'drench-the-soil-in-their-blood.jpg',
			'embrace-my-diabolical-vision.jpg',
			'every-hope-shall-vanish.jpg',
			'every-last-vestige-shall-rot.jpg',
			'evil-comes-to-fruition.jpg',
			'feed-the-machine.jpg',
			'i-bask-in-your-silent-awe.jpg',
			'i-call-on-the-ancient-magics.jpg',
			'i-delight-in-your-convulsions.jpg',
			'i-know-all-i-see-all.jpg',
			'ignite-the-cloneforge.jpg',
			'imprison-this-insolent-wretch.jpg',
			'into-the-earthen-maw.jpg',
			'introductions-are-in-order.jpg',
			'know-naught-but-fire.jpg',
			'look-skyward-and-despair.jpg',
			'may-civilization-collapse.jpg',
			'mortal-flesh-is-weak.jpg',
			'my-crushing-masterstroke.jpg',
			'my-genius-knows-no-bounds.jpg',
			'my-undead-horde-awakens.jpg',
			'my-wish-is-your-command.jpg',
			'nature-demands-an-offering.jpg',
			'nature-shields-its-own.jpg',
			'nothing-can-stop-me-now.jpg',
			'only-blood-ends-your-nightmares.jpg',
			'perhaps-youve-met-my-cohort.jpg',
			'plots-that-span-centuries.jpg',
			'realms-befitting-my-majesty.jpg',
			'roots-of-all-evil.jpg',
			'rotted-ones-lay-siege.jpg',
			'surrender-your-thoughts.jpg',
			'the-dead-shall-serve.jpg',
			'the-fate-of-the-flammable.jpg',
			'the-iron-guardian-stirs.jpg',
			'the-pieces-are-coming-together.jpg',
			'the-very-soil-shall-shake.jpg',
			'tooth-claw-and-tail.jpg',
			'which-of-you-burns-brightest.jpg',
			'your-fate-is-thrice-sealed.jpg',
			'your-inescapable-doom.jpg',
			'your-puny-minds-cannot-fathom.jpg',
			'your-will-is-not-your-own.jpg'
		]
	};

	$scope.deal = function () {
		if ($scope.deck) {
			$scope.card = $scope.deck.shift();
			$scope.cardStyle = {
				backgroundImage: 'url(images/' + $scope.type + '/' + $scope.card + ')'
			};
			$scope.deck.push($scope.card);

			// Preload next card
			angular.element('<img>').attr('src', 'images/' + $scope.type + '/' + $scope.deck[0]);
		}
	};

	$scope.startGame = function (type) {
		$scope.type = type;
		$scope.deck = shuffle($scope.decks[type]);
		$scope.deal();
	};

});
