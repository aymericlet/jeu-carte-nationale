/* =========================================================
   CARTE NATIONALE — BASE OFFICIELLE DES VILLES
   Généré à partir de la configuration validée dans l'éditeur.
   Coordonnées exprimées en pourcentage de la carte.
   ========================================================= */

const villes = [
    {
        "nom": "Brest",
        "x": 2.2081,
        "y": 28.5688
    },
    {
        "nom": "Morlaix",
        "x": 7.4,
        "y": 26.8769
    },
    {
        "nom": "St Brieuc",
        "x": 10.962,
        "y": 29.8975
    },
    {
        "nom": "St Malo",
        "x": 16.7412,
        "y": 28.0605
    },
    {
        "nom": "Quimper",
        "x": 4.1279,
        "y": 32.9436
    },
    {
        "nom": "Lorient",
        "x": 7.6421,
        "y": 36.5199
    },
    {
        "nom": "Rennes",
        "x": 13.9173,
        "y": 33.4938
    },
    {
        "nom": "Dol de Bretagne",
        "x": 15.7999,
        "y": 30.4677
    },
    {
        "nom": "Granville",
        "x": 20.1926,
        "y": 25.2407
    },
    {
        "nom": "Cherbourg",
        "x": 20.3732,
        "y": 17.4197
    },
    {
        "nom": "St Nazaire",
        "x": 16.2392,
        "y": 40.5777
    },
    {
        "nom": "Nantes",
        "x": 19.8788,
        "y": 42.641
    },
    {
        "nom": "Le Croisic",
        "x": 13.9801,
        "y": 41.2655
    },
    {
        "nom": "La Roche sur Yon",
        "x": 21.0967,
        "y": 48.6384
    },
    {
        "nom": "Caen",
        "x": 30.3884,
        "y": 21.8437
    },
    {
        "nom": "Lisieux",
        "x": 34.2727,
        "y": 22.0106
    },
    {
        "nom": "Rouen",
        "x": 39.7563,
        "y": 19.423
    },
    {
        "nom": "Dieppe",
        "x": 40.5179,
        "y": 15.2494
    },
    {
        "nom": "Trouville Deauville",
        "x": 32.6733,
        "y": 20.5081
    },
    {
        "nom": "Le Havre",
        "x": 34.0442,
        "y": 18.004
    },
    {
        "nom": "Laval",
        "x": 25.4379,
        "y": 33.2794
    },
    {
        "nom": "Le Mans",
        "x": 33.2064,
        "y": 35.6167
    },
    {
        "nom": "Angers",
        "x": 26.9612,
        "y": 38.6217
    },
    {
        "nom": "Tours",
        "x": 36.6337,
        "y": 41.6267
    },
    {
        "nom": "St Pierre des Corps",
        "x": 36.9383,
        "y": 43.2961
    },
    {
        "nom": "Alençon",
        "x": 32.9018,
        "y": 30.3579
    },
    {
        "nom": "Surdon",
        "x": 33.2826,
        "y": 28.6884
    },
    {
        "nom": "Argentan",
        "x": 32.5971,
        "y": 27.6033
    },
    {
        "nom": "Chartres",
        "x": 40.7464,
        "y": 30.1075
    },
    {
        "nom": "La Rochelle",
        "x": 23.8385,
        "y": 54.4814
    },
    {
        "nom": "Niort",
        "x": 27.5704,
        "y": 52.645
    },
    {
        "nom": "Futuroscope (TGV)",
        "x": 33.3587,
        "y": 48.8053
    },
    {
        "nom": "Poitiers",
        "x": 33.968,
        "y": 50.7252
    },
    {
        "nom": "Châteauroux",
        "x": 42.9551,
        "y": 49.0557
    },
    {
        "nom": "Saintes",
        "x": 28.0274,
        "y": 60.8253
    },
    {
        "nom": "Angoulême",
        "x": 34.0442,
        "y": 60.0741
    },
    {
        "nom": "Bordeaux",
        "x": 26.5042,
        "y": 67.0023
    },
    {
        "nom": "Arcachon",
        "x": 23.6101,
        "y": 69.423
    },
    {
        "nom": "Facture",
        "x": 25.8949,
        "y": 69.3395
    },
    {
        "nom": "Périgueux",
        "x": 37.4714,
        "y": 64.2477
    },
    {
        "nom": "Brive la Gaillarde",
        "x": 42.7266,
        "y": 65.4998
    },
    {
        "nom": "Limoges",
        "x": 40.8225,
        "y": 56.7352
    },
    {
        "nom": "Dax",
        "x": 23.4577,
        "y": 76.852
    },
    {
        "nom": "Bayonne",
        "x": 19.9543,
        "y": 80.4414
    },
    {
        "nom": "Hendaye",
        "x": 17.7456,
        "y": 82.2778
    },
    {
        "nom": "Pau",
        "x": 26.8088,
        "y": 82.1108
    },
    {
        "nom": "Lourdes",
        "x": 29.703,
        "y": 85.0323
    },
    {
        "nom": "Tarbes",
        "x": 31.5308,
        "y": 83.4464
    },
    {
        "nom": "Agen",
        "x": 35.3389,
        "y": 73.4297
    },
    {
        "nom": "Montauban",
        "x": 42.8027,
        "y": 76.4347
    },
    {
        "nom": "Toulouse",
        "x": 42.7266,
        "y": 80.6918
    },
    {
        "nom": "Cahors",
        "x": 42.7266,
        "y": 72.7619
    },
    {
        "nom": "Figeac",
        "x": 47.0678,
        "y": 69.1726
    },
    {
        "nom": "Aurillac",
        "x": 52.7799,
        "y": 66.9188
    },
    {
        "nom": "Carcassonne",
        "x": 47.6771,
        "y": 85.1993
    },
    {
        "nom": "Narbonne",
        "x": 52.8561,
        "y": 85.3662
    },
    {
        "nom": "Béziers",
        "x": 55.7502,
        "y": 83.029
    },
    {
        "nom": "Sète",
        "x": 61.0053,
        "y": 83.1125
    },
    {
        "nom": "Montpellier",
        "x": 63.9756,
        "y": 80.6918
    },
    {
        "nom": "Perpignan",
        "x": 52.9322,
        "y": 91.5432
    },
    {
        "nom": "Cerbère",
        "x": 55.2932,
        "y": 93.63
    },
    {
        "nom": "Rodez",
        "x": 52.0944,
        "y": 72.5115
    },
    {
        "nom": "Millau",
        "x": 56.2072,
        "y": 75.5165
    },
    {
        "nom": "Alès",
        "x": 63.671,
        "y": 73.5966
    },
    {
        "nom": "Nîmes",
        "x": 66.2605,
        "y": 77.1859
    },
    {
        "nom": "Tulle",
        "x": 44.8591,
        "y": 62.9956
    },
    {
        "nom": "Ussel",
        "x": 50.495,
        "y": 60.241
    },
    {
        "nom": "Guéret",
        "x": 47.1439,
        "y": 54.4814
    },
    {
        "nom": "Vierzon",
        "x": 45.9254,
        "y": 42.4614
    },
    {
        "nom": "Blois",
        "x": 42.9551,
        "y": 39.7903
    },
    {
        "nom": "Les Aubrais Orléans",
        "x": 46.0015,
        "y": 36.6183
    },
    {
        "nom": "Bourges",
        "x": 50.1142,
        "y": 43.2126
    },
    {
        "nom": "Saincaize",
        "x": 52.7799,
        "y": 45.8838
    },
    {
        "nom": "Nevers",
        "x": 54.4554,
        "y": 44.3813
    },
    {
        "nom": "Montluçon",
        "x": 51.2567,
        "y": 50.8086
    },
    {
        "nom": "Clermont Ferrand",
        "x": 55.7502,
        "y": 58.822
    },
    {
        "nom": "Vichy",
        "x": 58.4158,
        "y": 54.8153
    },
    {
        "nom": "Gannat",
        "x": 55.4455,
        "y": 54.8988
    },
    {
        "nom": "St Germains des Fossés",
        "x": 58.949,
        "y": 52.3946
    },
    {
        "nom": "Moulins sur Allier",
        "x": 57.1211,
        "y": 49.8904
    },
    {
        "nom": "Paray le Monial",
        "x": 63.3663,
        "y": 49.8904
    },
    {
        "nom": "Roanne",
        "x": 63.8233,
        "y": 55.817
    },
    {
        "nom": "Le Puy-en-Velay",
        "x": 60.5484,
        "y": 64.0808
    },
    {
        "nom": "St Etienne",
        "x": 65.8797,
        "y": 61.3262
    },
    {
        "nom": "St Chamond",
        "x": 68.1645,
        "y": 60.1576
    },
    {
        "nom": "Lyon",
        "x": 70.1447,
        "y": 58.9055
    },
    {
        "nom": "Mâcon TGV",
        "x": 67.936,
        "y": 51.3095
    },
    {
        "nom": "Paris",
        "x": 49.8858,
        "y": 25.433
    },
    {
        "nom": "Versailles Chantier",
        "x": 45.0114,
        "y": 26.3512
    },
    {
        "nom": "Massy TGV",
        "x": 46.9916,
        "y": 28.438
    },
    {
        "nom": "Lille",
        "x": 53.8462,
        "y": 5.9839
    },
    {
        "nom": "Lens",
        "x": 48.8195,
        "y": 9.0724
    },
    {
        "nom": "Béthune",
        "x": 48.8195,
        "y": 7.5699
    },
    {
        "nom": "Arras",
        "x": 51.5613,
        "y": 12.6617
    },
    {
        "nom": "Douai",
        "x": 53.5415,
        "y": 10.408
    },
    {
        "nom": "Amiens",
        "x": 49.5811,
        "y": 16.418
    },
    {
        "nom": "Creil",
        "x": 49.5811,
        "y": 22.0106
    },
    {
        "nom": "Compiègne",
        "x": 52.8561,
        "y": 19.0891
    },
    {
        "nom": "St Quentin",
        "x": 55.2932,
        "y": 16.5015
    },
    {
        "nom": "Aulnoye Aymeries",
        "x": 60.2437,
        "y": 11.827
    },
    {
        "nom": "TGV Haute Picardie",
        "x": 51.6375,
        "y": 16.418
    },
    {
        "nom": "Dunkerque",
        "x": 46.687,
        "y": 2.1442
    },
    {
        "nom": "Calais",
        "x": 45.4684,
        "y": 4.0641
    },
    {
        "nom": "Boulogne",
        "x": 44.1736,
        "y": 5.9005
    },
    {
        "nom": "Tourcoing",
        "x": 54.0746,
        "y": 3.3128
    },
    {
        "nom": "Roubaix",
        "x": 54.0746,
        "y": 4.7318
    },
    {
        "nom": "Valenciennes",
        "x": 58.4158,
        "y": 9.8237
    },
    {
        "nom": "Quévy Frontière",
        "x": 61.2338,
        "y": 7.9038
    },
    {
        "nom": "Jeumont Frontière",
        "x": 63.1379,
        "y": 8.822
    },
    {
        "nom": "Maubeuge",
        "x": 61.8431,
        "y": 9.9906
    },
    {
        "nom": "Troyes",
        "x": 62.1478,
        "y": 31.7769
    },
    {
        "nom": "Chaumont",
        "x": 71.0586,
        "y": 35.1158
    },
    {
        "nom": "Epernay",
        "x": 61.1577,
        "y": 25.5165
    },
    {
        "nom": "Châlons en Champagne",
        "x": 65.2704,
        "y": 25.433
    },
    {
        "nom": "Vitry le François",
        "x": 67.3267,
        "y": 25.9338
    },
    {
        "nom": "Charleville Mézières",
        "x": 66.5651,
        "y": 16.5015
    },
    {
        "nom": "Champagne Ardenne TGV",
        "x": 61.0053,
        "y": 22.9288
    },
    {
        "nom": "Bar le Duc",
        "x": 71.5156,
        "y": 26.5182
    },
    {
        "nom": "Verdun",
        "x": 71.9726,
        "y": 21.6768
    },
    {
        "nom": "Toul",
        "x": 74.2574,
        "y": 29.4397
    },
    {
        "nom": "Nancy",
        "x": 80.1219,
        "y": 28.438
    },
    {
        "nom": "St Dié",
        "x": 84.0823,
        "y": 31.1091
    },
    {
        "nom": "Epinal",
        "x": 79.8172,
        "y": 33.1125
    },
    {
        "nom": "Lunéville",
        "x": 82.0259,
        "y": 27.5198
    },
    {
        "nom": "Lorraine TGV",
        "x": 76.0853,
        "y": 24.6818
    },
    {
        "nom": "Meuse TGV",
        "x": 71.211,
        "y": 23.847
    },
    {
        "nom": "Metz",
        "x": 77.38,
        "y": 21.7602
    },
    {
        "nom": "Thionville",
        "x": 77.3039,
        "y": 19.0056
    },
    {
        "nom": "Longwy",
        "x": 73.2673,
        "y": 18.9222
    },
    {
        "nom": "Forbach",
        "x": 82.6352,
        "y": 20.0908
    },
    {
        "nom": "Sarrebourg",
        "x": 85.5293,
        "y": 26.1008
    },
    {
        "nom": "Strasbourg",
        "x": 92.3839,
        "y": 28.5215
    },
    {
        "nom": "Colmar",
        "x": 88.5758,
        "y": 33.196
    },
    {
        "nom": "Mulhouse",
        "x": 88.8043,
        "y": 37.9539
    },
    {
        "nom": "Culmont Chalindrey",
        "x": 74.2574,
        "y": 38.1208
    },
    {
        "nom": "Dijon",
        "x": 71.6679,
        "y": 42.211
    },
    {
        "nom": "Chagny",
        "x": 69.3831,
        "y": 44.4647
    },
    {
        "nom": "Chalon sur Saône",
        "x": 69.3831,
        "y": 48.4714
    },
    {
        "nom": "Mâcon Ville",
        "x": 69.4593,
        "y": 50.5582
    },
    {
        "nom": "Belfort",
        "x": 83.3206,
        "y": 38.8721
    },
    {
        "nom": "Montbéliard",
        "x": 81.7212,
        "y": 40.7919
    },
    {
        "nom": "Besançon",
        "x": 80.1219,
        "y": 42.2944
    },
    {
        "nom": "Mouchard",
        "x": 77.9132,
        "y": 45.8838
    },
    {
        "nom": "Dôle",
        "x": 74.1813,
        "y": 44.4647
    },
    {
        "nom": "Basel",
        "x": 92.46,
        "y": 40.1242
    },
    {
        "nom": "Culoz",
        "x": 78.9794,
        "y": 56.0674
    },
    {
        "nom": "Evian",
        "x": 84.0061,
        "y": 51.0591
    },
    {
        "nom": "Genève",
        "x": 80.1219,
        "y": 52.3946
    },
    {
        "nom": "Bellegarde",
        "x": 79.0556,
        "y": 53.8971
    },
    {
        "nom": "Annecy",
        "x": 82.0259,
        "y": 55.5666
    },
    {
        "nom": "Aix les Bains",
        "x": 79.1318,
        "y": 57.7369
    },
    {
        "nom": "Chambéry",
        "x": 79.1318,
        "y": 59.9071
    },
    {
        "nom": "St Gervais les Bains",
        "x": 86.3671,
        "y": 56.5682
    },
    {
        "nom": "Bourg St Maurice",
        "x": 88.3473,
        "y": 60.7419
    },
    {
        "nom": "Modane",
        "x": 87.0526,
        "y": 62.9956
    },
    {
        "nom": "Vienne",
        "x": 70.2209,
        "y": 62.4948
    },
    {
        "nom": "Moirans",
        "x": 75.5522,
        "y": 61.9105
    },
    {
        "nom": "Grenoble",
        "x": 77.0754,
        "y": 63.3295
    },
    {
        "nom": "Valence",
        "x": 70.2209,
        "y": 66.5015
    },
    {
        "nom": "Valence TGV",
        "x": 71.2871,
        "y": 66.5849
    },
    {
        "nom": "Briançon",
        "x": 86.0625,
        "y": 66.5849
    },
    {
        "nom": "Gap",
        "x": 85.6816,
        "y": 69.9238
    },
    {
        "nom": "Veynes Dévoluy",
        "x": 79.1318,
        "y": 71.2594
    },
    {
        "nom": "Avignon",
        "x": 71.0586,
        "y": 76.5182
    },
    {
        "nom": "Avignon TGV",
        "x": 71.1348,
        "y": 78.5215
    },
    {
        "nom": "Aix en Provence",
        "x": 77.3039,
        "y": 79.6901
    },
    {
        "nom": "Aix en Provence TGV",
        "x": 75.3237,
        "y": 81.7769
    },
    {
        "nom": "Marseille",
        "x": 76.6184,
        "y": 83.6968
    },
    {
        "nom": "Toulon",
        "x": 82.2544,
        "y": 85.4497
    },
    {
        "nom": "Cannes",
        "x": 89.7182,
        "y": 80.7753
    },
    {
        "nom": "Nice",
        "x": 92.1554,
        "y": 78.438
    },
    {
        "nom": "Vintimille",
        "x": 94.4402,
        "y": 77.5198
    },
    {
        "nom": "Laon",
        "x": 57.7304,
        "y": 21.0924
    },
    {
        "nom": "Marne la Vallée TGV",
        "x": 53.8462,
        "y": 26.4347
    },
    {
        "nom": "Aéroport CDG TGV",
        "x": 51.866,
        "y": 22.0941
    },
    {
        "nom": "Bourg en Bresse",
        "x": 71.7441,
        "y": 53.1459
    },
    {
        "nom": "Montceau les Mines",
        "x": 65.0419,
        "y": 48.8053
    },
    {
        "nom": "Reims",
        "x": 61.0815,
        "y": 21.6768
    },
    {
        "nom": "St Dizier",
        "x": 70.1447,
        "y": 28.0207
    },
    {
        "nom": "Dives Cabourg",
        "x": 31.5668,
        "y": 21.1547
    }
];