
import {Injectable} from 'angular2/core';
import {LoggerService} from './logger.service'

@Injectable()
export class AppDataService {
	private contents;
	public language: string;
	private init: boolean

	constructor(private logger: LoggerService) {
		this.language = this.getLanguage()
		this.contents = {}
		this.contents.en = {
			masthead: {
				enabled: true,
				image: "./public/images/refer-landing-masthead-1.jpg",
				imageForeground: "./public/images/refer-landing-masthead-2.jpg",
				alt: "test",
				title: "Cooking"
			},
			banner: {
				enabled: true,
				link: '/en_CA/2_3_1121/jump-page_may-is-maytag-promo.content.html',
				image: './public/images/banner.jpg',
				ctaText: 'Learn More',
				ctaBackground: './public/images/button-background.png',
				analytics: {
					category: "@category",
					action: "Clicked Footer Banner",
					label: "May-Is-Maytag-Learn-More"
				}
			},
			features: {
				enabled: true,
				features: [
					{
						image: "./public/images/refer-landing-shopping-cart.png",
						title: "Buying Guide",
						alt: "test",
						desc: "What to look for when buying",
						ctaText: "Click Here",
						ctaBackground: "./public/images/button-background.png",
						link: "https://www.google.ca/#q=placeholder",
						type: "cart",
						analytics: {
							category: "@category",
							action: "Clicked Refer Resources",
							label: "Buying Guide"
						}
					},
					{
						image: "./public/images/refer-landing-star.png",
						title: "Ratings and Reviews",
						alt: "test",
						desc: "See what others are saying",
						ctaText: "Click Here",
						ctaBackground: "./public/images/button-background.png",
						link: "http://www.maytag.ca/en_CA/2_3_90/jump-page_best-products.content.html",
						type: "star",
						analytics: {
							category: "@category",
							action: "Clicked Refer Resources",
							label: "Ratings and Reviews"
						}
					},
					{
						image: "./public/images/refer-landing-mag-glass.png",
						title: "Find Your Maytag",
						alt: "test",
						desc: "Need help finding your appliance?",
						ctaText: "Click Here",
						ctaBackground: "./public/images/button-background.png",
						link: "http://findmy.maytag.ca",
						type: "magnifier",
						analytics: {
							category: "@category",
							action: "Clicked Refer Resources",
							label: "Find Your MT"
						}
					}
				]
			},
			morefeatures: {
				enabled: true,
				title: "Additional Features",
				features: [
					{
						title: "Power<sup>&trade;</sup> Burner",
						image: "./public/images/more-features-1.jpg",
						link: "",
						alt: "test",
						text: "",
						cta: ""
					},
					{
						title: "10-Year Warranty",
						image: "./public/images/more-features-2.jpg",
						link: "http://www.maytag.ca/en_CA/2_3_147/jump-page_ten-year-warranty.content.html",
						alt: "test",
						text: "",
						cta: ""
					},
					{
						title: "FIT System Guarantee",
						image: "./public/images/more-features-3.jpg",
						link: "http://www.maytag.ca/other-assets/en_CA/pdf/FIT_Wall%20Oven_Guarantee_MTG_CANADA_2016_FINAL.pdf",
						alt: "test",
						text: "",
						cta: ""
					}
				]
			},
			videoplayer: {
				enabled: true,
				title: "Built Better",
				videos: [
					{
						id: '14R7RmMFzf8',
						thumb: './public/images/video-select-1.jpg',
						title: 'Maytag&reg; Ovens – Get Cookin’ / Maytag Man',
						alt: "test",
						ctaTitle: 'Maytag&reg; Man',
						ctaText: 'Watch Video',
						ctaBackground: "./public/images/button-background.png",
						desc: "Maytag® ovens take dependable cooking to another level, with another level.",
						analytics: {
							category: "@category",
							action: "Clicked Built Better",
							label: "Get-cooking"
						}
					},
					{
						id: 'igvVlpAIJzc',
						thumb: './public/images/video-select-2.jpg',
						title: 'Maytag&reg; Ranges - Power Pre-Heat Function',
						alt: "test",
						ctaTitle: 'Power Pre-Heat',
						ctaText: 'Watch Video',
						ctaBackground: "./public/images/button-background.png",
						desc: "Alternating bake and broil elements, an air circulated convection fan - there's quite a bit going on when our Power Pre-Heat Function kicks into action to heat your oven in 8 quick minutes. But all you need to know is that it gets you one step closer to dinner being done, faster than ever before.",
						analytics: {
							category: "@category",
							action: "Clicked Built Better",
							label: "Power-Pre-Heat"
						}
					},
					{
						id: 'b5npNHPD3T4',
						thumb: './public/images/video-select-3.jpg',
						title: 'Maytag&reg; Ranges - EvenAir True Convection',
						alt: "test",
						ctaTitle: 'EvenAir True Convection',
						ctaText: 'Watch Video',
						ctaBackground: "./public/images/button-background.png",
						desc: "What is Maytag® EvenAir True Convection? It's a quick heating coil. It's a fan. It's both, actually. Working in tandem to move hot air more efficiently and roast up to 30% faster than a traditional oven. Giving your perfectly consistent results, no matter what you're putting inside.",
						analytics: {
							category: "@category",
							action: "Clicked Built Better",
							label: "EvenAir-True-Convection"
						}
					}
				]
			},
			productselector: {
				enabled: true,
				title: 'Choose Your Configuration',
				nav: {
					text: 'See<br/>All',
					link: 'http://www.maytag.ca/en_CA/Kitchen-1/Kitchen_Refrigeration_Refrigerators_French_Door-3/102290031/',
					analytics: {
						category: "@category",
						action: "Clicked Choose Your Cooking Configuration",
						label: "See all Cooking"
					}
				},
				products: [
					{
						image: "./public/images/products/front_control.png",
						thumb: "./public/images/products/front_control-sml.png",
                        title: "Front Control Ranges",
                        alt: "Front Control Ranges",
                        desc: "The up front controls are designed for easy access, providing a sturdy, built-in look that fits effortlessly into any countertop. Looking to install at the end of the countertop run? No problem, the sides are finished too, so you can depend on your new range looking great.",
                        link: "http://www.maytag.ca/en_CA/kitchen-1/cooking-2/ranges-3/-[YMES8880DS]-5511597/YMES8880DS/",
                        id: "fcr",
                        ctaText: "Learn More",
                        ctaBackground: "./public/images/button-background.png",
                        analytics: {
							category: "@category",
							action: "Clicked Choose Your Cooking Configuration",
							label: "Front Control Ranges",
							learnMore: 'Learn More'
						}
                    },
					{
						image: "./public/images/products/rear_control.png",
						thumb: "./public/images/products/rear_control-sml.png",
                        title: "Rear Control Ranges",
                        alt: "Rear Control Ranges",
                        desc: "Rear Control Ranges can be found across all price points and offer ample flexibility in terms of style. With a back panel and standard rear controls, it is sure to fit between cabinets/countertops, or sit steadfast at the end of a run.",
                        link: "http://www.maytag.ca/en_CA/Kitchen-1/Kitchen_Cooking_Ranges-3/102290012/",
                        id: "rcr",
                        ctaText: "Learn More",
                        ctaBackground: "./public/images/button-background.png",
                        analytics: {
							category: "@category",
							action: "Clicked Choose Your Cooking Configuration",
							label: "Rear-Control",
							learnMore: 'Learn More'
						}
                    },
					{
						image: "./public/images/products/double_oven.png",
						thumb: "./public/images/products/double_oven-sml.png",
                        title: "Double Oven Ranges",
                        alt: "Double Oven Ranges",
                        desc: "Double Ovens come in several sizes and configurations; the smaller oven is tried and true when it comes to every day cooking and the larger oven is always willing to lend a helping hand for a holiday feast. No matter which configuration you choose, you’re guaranteed to be able to take care of meals of any size.",
                        link: "http://www.maytag.ca/en_CA/Kitchen-1/Kitchen_Cooking_Ranges-3/102290012/",
                        id: "dbl-oven",
                        ctaText: "Learn More",
                        ctaBackground: "./public/images/button-background.png",
                        analytics: {
							category: "@category",
							action: "Clicked Choose Your Cooking Configuration",
							label: "double-oven",
							learnMore: 'Learn More'
						}
                    },
					{
						image: "./public/images/products/wall_oven.png",
						thumb: "./public/images/products/wall_oven-sml.png",
                        title: "Wall Ovens",
                        alt: "Wall Ovens",
                        desc: "With simplicity in mind, Wall Ovens are built-in, offering more flexibility in terms of kitchen layout. Typically installed at chest height, heavier dishes are easy-to-reach and transfer to the countertop. With Maytag, you can choose from Single Wall Oven, Double, Microwave Combination and Built-In Microwave options.",
                        link: "http://www.maytag.ca/en_CA/Kitchen-1/Kitchen_Cooking_Wall_Ovens-3/102290015/",
                        id: "wall-ovens",
                        ctaText: "Learn More",
                        ctaBackground: "./public/images/button-background.png",
                        analytics: {
							category: "@category",
							action: "Clicked Choose Your Cooking Configuration",
							label: "wall-ovens",
							learnMore: 'Learn More'
						}
                    },
                    {
						image: "./public/images/products/cooktop.png",
						thumb: "./public/images/products/cooktop-sml.png",
                        title: "Cooktops",
                        alt: "Cooktops",
                        desc: "Quality, meet value. With a top-freezer refrigerator, there’s always a place to store fresh and frozen foods. Plus, they’re available in smaller sizes, so you can use a second one when you need the extra space. You’re right, that is a good idea.",
                        link: "http://www.maytag.ca/en_CA/Kitchen-1/Kitchen_Cooking_Cooktops-3/102290019/",
                        id: "cooktops",
                        ctaText: "Learn More",
                        ctaBackground: "./public/images/button-background.png",
                        analytics: {
							category: "@category",
							action: "Clicked Choose Your Cooking Configuration",
							label: "cooktops",
							learnMore: 'Learn More'
						}
                    },
                    {
						image: "./public/images/products/microwave.png",
						thumb: "./public/images/products/microwave-sml.png",
                        title: "Microwaves",
                        alt: "Microwaves",
                        desc: "Cooktops offer a flat and sleek surface for all of your cooking needs; boiling, simmering and frying. The technology choices are the same whether you’re looking at a range cooktop or a built-in, designed to keep your kitchen looking great while delivering powerful results.",
                        link: "http://www.maytag.ca/en_CA/Kitchen-1/Kitchen_Cooking_Microwaves-3/102290026/",
                        id: "microwaves",
                        ctaText: "Learn More",
                        ctaBackground: "./public/images/button-background.png",
                        analytics: {
							category: "@category",
							action: "Clicked Choose Your Cooking Configuration",
							label: "microwaves",
							learnMore: 'Learn More'
						}
                    }
				]
			}
		}

		this.contents.fr = {
			masthead: {
				enabled: true,
				image: "./public/images/refer-landing-masthead-1-fr.jpg",
				imageForeground: "./public/images/refer-landing-masthead-2-fr.jpg",
				alt: "test",
				title: "Réfrigérateurs"
			},
			banner: {
				enabled: true,
				link: '/en_CA/2_3_1121/jump-page_may-is-maytag-promo.content.html',
				image: './public/images/banner_fr.jpg',
				ctaText: 'En savoir plus',
				ctaBackground: './public/images/button-background.png',
				analytics: {
					category: "@category",
					action: "@language-Clicked Footer Banner",
					label: "May-Is-Maytag-Learn-More"
				}
			},
			features: {
				enabled: true,
				features: [
					{
						image: "./public/images/refer-landing-shopping-cart.png",
						title: "Guide D'achat",
						alt: "test",
						desc: "Éléments à considérer lorsque vous magasinez",
						ctaText: "Cliquez ici",
						ctaBackground: "./public/images/button-background.png",
						link: "https://www.google.ca/#q=placeholder",
						type: "cart",
						analytics: {
							category: "@category",
							action: "@language-Clicked Refer Resources",
							label: "Buying Guide"
						}
					},
					{
						image: "./public/images/refer-landing-star.png",
						title: "Classements et Évaluations",
						alt: "test",
						desc: "Voyez ce que les autres clients en disent",
						ctaText: "Cliquez ici",
						ctaBackground: "./public/images/button-background.png",
						link: "http://www.maytag.ca/fr_CA/2_3_90/jump-page_best-products.content.html",
						type: "star",
						analytics: {
							category: "@category",
							action: "@language-Clicked Refer Resources",
							label: "Ratings and Reviews"
						}
					},
					{
						image: "./public/images/refer-landing-mag-glass.png",
						title: "Trouvez Votre Électroménager Maytag",
						alt: "test",
						desc: "Vous avez besoin d'aide pour trouver un réfrigérateur?",
						ctaText: "Cliquez ici",
						ctaBackground: "./public/images/button-background.png",
						link: "http://trouvermon.maytag.ca",
						type: "magnifier",
						analytics: {
							category: "@category",
							action: "@language-Clicked Refer Resources",
							label: "Find Your MT"
						}
					}
				]
			},
			morefeatures: {
				enabled: true,
				title: "Tirez Le Meilleur Parti de Votre Réfrigérateur",
				features: [
					{
						title: "Accessoires",
						image: "./public/images/more-features-1.jpg",
						link: "http://www.maytag.ca/fr_CA/Accessories-1/Accessories_Kitchen_Refrigerator-3/102290104/",
						alt: "test",
						text: "",
						cta: ""
					},
					{
						title: "Filtration D'eau",
						image: "./public/images/more-features-2.jpg",
						link: "http://www.maytag.ca/fr_CA/2_3_80/jump-page_water-filters.content.html",
						alt: "test",
						text: "",
						cta: ""
					},
					{
						title: "Entretien autorisé",
						image: "./public/images/more-features-3.jpg",
						link: "http://www.maytag.ca/fr_CA/2_3_1/jump-page_extended-service-plans.content.html",
						alt: "test",
						text: "",
						cta: ""
					}
				]
			},
			videoplayer: {
				enabled: true,
				title: "Mieux Construit",
				videos: [
					{
						image: './public/images/video-image-1.jpg',
						thumb: './public/images/video-select-2.jpg',
						title: 'Quatre Portes',
						alt: "test",
						ctaTitle: 'Quatre Portes',
						ctaText: 'Voir',
						ctaBackground: "./public/images/button-background.png",
						desc: "Offrir à votre famille des aliments frais et sains est l'un de vos points forts et celui de Maytag également. C'est pourquoi, le réfrigérateur à 4 portes de Maytag établit une nouvelle norme encore plus élevée pour la réfrigération. Des caractéristiques perfectionnées et une durabilité sans égal conserveront vos aliments à la bonne température, du premier au dernier raisin; et vous pourrez compter sur ce puissant modèle Maytag® pour assurer le maintien du froid.",
						analytics: {
							category: "@category",
							action: "@language-Clicked Built Better",
							label: "Four-door"
						}
					},
					{
						image: './public/images/video-image-2.jpg',
						thumb: './public/images/video-select-1.jpg',
						title: 'Tiroir Réfrigéré à Température Réglable',
						alt: "test",
						ctaTitle: 'Tiroir Réfrigéré à Température Réglable',
						ctaText: 'Voir',
						ctaBackground: "./public/images/button-background.png",
						desc: "Le tiroir réfrigéré à température réglable Maytag vous permet de choisir un réglage précis et procure amplement d'espace lorsque vous souhaitez faire des provisions. Sa conception à pleine extension permet un accès facile à tous les articles qui y sont rangés. C'est une nouvelle option de rangement qui vous offre un endroit supplémentaire pour les viandes, fromages, fruits, légumes et tout ce que vous voulez! Vous décidez, puis vous choisissez le réglage correspondant. Enfin un réfrigérateur qui s'adapte à vos besoins!",
						analytics: {
							category: "@category",
							action: "@language-Clicked Built Better",
							label: "Temperature Drawer"
						}
					},
					{
						image: './public/images/video-image-3.jpg',
						thumb: './public/images/video-select-3-fr.jpg',
						title: 'Garantie limitée de 10 ans',
						alt: "test",
						ctaTitle: 'Garantie limitée de 10 ans',
						ctaText: 'Voir',
						ctaBackground: "./public/images/button-background.png",
						desc: "Chez Maytag, nous ne nous contentons pas de vous dire que nos réfrigérateurs durent longtemps, nous sommes en effet tellement confiants en nos produits que nous avons ajouté une garantie limitée de 10 ans sur certaines pièces. Notre garantie sur les pièces du compresseur couvre la pièce maîtresse du réfrigérateur. Vous pouvez donc compter sur votre modèle pour maintenir le froid pendant des années.",
						analytics: {
							category: "@category",
							action: "@language-Clicked Built Better",
							label: "10-Year Warranty"
						}
					}
				]
			},
			productselector: {
				enabled: true,
				title: 'Choisissez Votre Configuration',
				nav: {
					text: 'Voir<br/>Tout',
					link: 'http://www.maytag.ca/fr_CA/Kitchen-1/Kitchen_Refrigeration_Refrigerators_French_Door-3/102290031/',
					analytics: {
						category: "@category",
						action: "@language-Clicked Choose Your Refer Configuration",
						label: "See all Refer"
					}
				},
				products: [
					{
						image: "./public/images/products/four-door.png",
                        title: "Quatre Portes",
                        alt: "test",
                        desc: "Ce réfrigérateur vous permettra non seulement de ranger vos articles, mais de le faire à votre façon. Grâce au tiroir-réfrigérateur à température réglable et au bac coulissant EasySlide, vous pouvez maintenant ranger et conserver tout ce que vous voulez, exactement comme vous le voulez. Par ailleurs, la conception épurée de ce modèle à 4 portes lui confère une grande élégance extérieure.",
                        link: "http://www.maytag.ca/fr_CA/Kitchen-1/Kitchen_Refrigeration_Refrigerators_Top_Freezer-3/102290031+112290217/",
                        id: "four-door",
                        ctaText: "En savoir plus",
                        ctaBackground: "./public/images/button-background.png",
                        analytics: {
							category: "@category",
							action: "@language-Clicked Choose Your Refer Configuration",
							label: "Four-door",
							learnMore: 'Learn More'
						}
                    },
					{
						image: "./public/images/products/french-door.png",
                        title: "Portes Françaises",
                        alt: "test",
                        desc: "Plus grande capacité. Plus d'options de rangement. Les réfrigérateurs à portes françaises sont conçus pour être pratiques. Cela signifie que vos aliments se trouvent au niveau des yeux et que vos articles congelés préférés sont faciles à ranger. Par ailleurs, ce modèle est conçu pour s'agencer harmonieusement à toute cuisine.",
                        link: "http://www.maytag.ca/fr_CA/Kitchen-1/Kitchen_Refrigeration_Refrigerators_French_Door-3/102290031+4294966906/",
                        id: "french-door",
                        ctaText: "En savoir plus",
                        ctaBackground: "./public/images/button-background.png",
                        analytics: {
							category: "@category",
							action: "@language-Clicked Choose Your Refer Configuration",
							label: "French Door",
							learnMore: 'Learn More'
						}
                    },
					{
						image: "./public/images/products/side-by-side.png",
                        title: "Côte à Côte",
                        alt: "test",
                        desc: "Style classique? Oui. Convient à votre espace? Absolument. Davantage d'espace dans les portes signifie que vous pouvez ranger et accéder facilement à vos aliments. Par ailleurs, le réfrigérateur est conçu pour ranger une plus grande quantité de vos articles congelés ou frais. Bien sûr, nous offrons un choix de différentes tailles.",
                        link: "http://www.maytag.ca/fr_CA/Kitchen-1/Kitchen_Refrigeration_Refrigerators_SidebySide-3/102290031+4294967038/",
                        id: "side-by-side",
                        ctaText: "En savoir plus",
                        ctaBackground: "./public/images/button-background.png",
                        analytics: {
							category: "@category",
							action: "@language-Clicked Choose Your Refer Configuration",
							label: "Side-by-side",
							learnMore: 'Learn More'
						}
                    },
					{
						image: "./public/images/products/bottom-freezer.png",
                        title: "Congélateur Inférieur",
                        alt: "test",
                        desc: "Vous ne trouverez pas une façon plus facile d’accéder à vos aliments frais. Vous pouvez compter sur les réfrigérateurs à congélateur inférieur pour garder vos aliments à la hauteur des yeux, vous n'avez donc pas besoin de perdre du temps à chercher lorsque vous êtes pressé. N’est ce pas pratique?",
                        link: "http://www.maytag.ca/fr_CA/Kitchen-1/Kitchen_Refrigeration_Refrigerators_Bottom_Freezer-3/102290031+4294967048/",
                        id: "bottom-freezer",
                        ctaText: "En savoir plus",
                        ctaBackground: "./public/images/button-background.png",
                        analytics: {
							category: "@category",
							action: "@language-Clicked Choose Your Refer Configuration",
							label: "Bottom-Freezer",
							learnMore: 'Learn More'
						}
                    },
                    {
						image: "./public/images/products/top-freezer.png",
                        title: "Congélateur Supérieur",
                        alt: "test",
                        desc: "Excellent rapport qualité-prix. Dans un réfrigérateur à congélateur supérieur, il y a toujours de la place pour ranger les articles frais et surgelés. Par ailleurs, ces modèles à congélateur supérieur sont aussi offerts en tailles plus compactes, vous pouvez alors en utiliser un deuxième lorsque vous avez besoin de plus d'espace de rangement. Vous avez raison, c'est une excellente idée.",
                        link: "http://www.maytag.ca/fr_CA/Kitchen-1/Kitchen_Refrigeration_Refrigerators_Top_Freezer-3/102290031+4294967059/",
                        id: "top-freezer",
                        ctaText: "En savoir plus",
                        ctaBackground: "./public/images/button-background.png",
                        analytics: {
							category: "@category",
							action: "@language-Clicked Choose Your Refer Configuration",
							label: "Top-Freezer",
							learnMore: 'Learn More'
						}
                    }
				]
			}
		}
	}

	get() {
		if (!(this.language in this.contents)) {
			this.logger.error('Language does not exist')
		}

		return this.contents[this.language];
	}

	applyText(obj) {
		if (!(this.language in this.contents)) {
			this.logger.error('Language does not exist')
		}

		if (obj.name in this.contents[this.language]) {
			for (var i in this.contents[this.language][obj.name]) {
				obj[i] = this.contents[this.language][i]
			}
		}
	}

	getLanguage() {
		var url = window.location.href
		if (url.indexOf('/fr_CA') > -1) return 'fr'
		return 'en'
	}
}