import React from 'react'
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap"

 const Beers = (props) => {
 const beers =  [
          {
        id: "c4f2KE",
        name: "'Murican Pilsner",
        nameDisplay: "'Murican Pilsner",
        abv: "5.5",
        glasswareId: 4,
        styleId: 98,
        isOrganic: "N",
        isRetired: "N",
        labels: {
        icon: "https://brewerydb-images.s3.amazonaws.com/beer/c4f2KE/upload_jjKJ7g-icon.png",
        medium: "https://brewerydb-images.s3.amazonaws.com/beer/c4f2KE/upload_jjKJ7g-medium.png",
        large: "https://brewerydb-images.s3.amazonaws.com/beer/c4f2KE/upload_jjKJ7g-large.png",
        contentAwareIcon: "https://brewerydb-images.s3.amazonaws.com/beer/c4f2KE/upload_jjKJ7g-contentAwareIcon.png",
        contentAwareMedium: "https://brewerydb-images.s3.amazonaws.com/beer/c4f2KE/upload_jjKJ7g-contentAwareMedium.png",
        contentAwareLarge: "https://brewerydb-images.s3.amazonaws.com/beer/c4f2KE/upload_jjKJ7g-contentAwareLarge.png"
        },
        status: "verified",
        statusDisplay: "Verified",
        createDate: "2013-08-19 11:58:12",
        updateDate: "2018-11-02 02:15:14",
        glass: {
        id: 4,
        name: "Pilsner",
        createDate: "2012-01-03 02:41:33"
        },
        style: {
        id: 98,
        categoryId: 8,
        category: {
        id: 8,
        name: "North American Lager",
        createDate: "2012-03-21 20:06:46"
        },
        name: "American-Style Pilsener",
        shortName: "American Pilsener",
        description: "This classic and unique pre-Prohibition American-style Pilsener is straw to deep gold in color. Hop bitterness, flavor and aroma are medium to high, and use of noble-type hops for flavor and aroma is preferred. Up to 25 percent corn and/or rice in the grist should be used. Malt flavor and aroma are medium. This is a light-medium to medium-bodied beer. Sweet corn-like dimethylsulfide (DMS), fruity esters and American hop-derived citrus flavors or aromas should not be perceived. Diacetyl is not acceptable. There should be no chill haze. Competition organizers may wish to subcategorize this style into rice and corn subcategories.",
        ibuMin: "25",
        ibuMax: "40",
        abvMin: "5",
        abvMax: "6",
        srmMin: "3",
        srmMax: "6",
        ogMin: "1.045",
        fgMin: "1.012",
        fgMax: "1.018",
        createDate: "2012-03-21 20:06:46",
        updateDate: "2015-04-07 15:40:08"
        }
        },
        {
        id: "zTTWa2",
        name: "11.5° PLATO",
        nameDisplay: "11.5° PLATO",
        description: "The Plato scale is a measurement of the density of liquid. The number tells brewers how big or small a resulting beer will be—the larger the number the bigger the beer. We designed 11.5° Plato—a lower number on the beer scale—to give us just enough body to support a heavy heap of hops. The result is an easy-drinking session IPA which satisfies the thirst for hops, but urges you to have another round.",
        abv: "4.5",
        ibu: "35",
        styleId: 164,
        isOrganic: "N",
        isRetired: "N",
        status: "verified",
        statusDisplay: "Verified",
        originalGravity: "1.046",
        createDate: "2016-08-09 14:44:42",
        updateDate: "2018-11-02 02:15:14",
      style: {
      id: 164,
      categoryId: 3,
      category: {
      id: 3,
      name: "North American Origin Ales",
      createDate: "2012-03-21 20:06:45"
        },
      name:"Session India Pale Ale",
      shortName: "Session IPA",
      description: "Session India Pale Ales are gold to copper. Chill haze is allowable at cold temperatures and hop haze is allowable at any temperature. Fruity-ester aroma is light to moderate. Hop aroma is medium to high with qualities from a wide variety of hops from all over the world. Low to medium maltiness is present. Hop flavor is strong, characterized by flavors from a wide variety of hops. Hop bitterness is medium to high. Fruity-ester flavors are low to moderate. Diacetyl is absent or at very low levels. Body is low to medium.",
      createDate: "2015-04-07 17:07:27"
        }
        },
        {
      id: "zfP2fK",
      name: "12th Of Never",
      nameDisplay: "12th Of Never",
      description: "Tropically Hoppy. Light, yet Full-Bodied. Bright and Citrusy. Word.\r\nThe magical, mystical 12th of Never is a blend of Old and New School hops that play bright citrus, rich coconut, and papaya-esque flavors, all on a solid stage of English puffed wheat. Tropically hoppy. Light, yet full-bodied. Bright and citrusy. The 12th of Never Ale is everything we’ve learned about making hop-forward beer expressed in a moderate voice.  Pale, cold, slightly alcoholic and bitter.  It’s all we know.\r\n\r\nThese 12oz mini-kegs (AKA cans) are an exciting new option for us, and we are stoopid stoked at the opportunity for y'all to take us to all those new, nelophobic locations…",
      abv: "5.5",
      ibu: "45",
      availableId: 1,
      styleId: 25,
      isOrganic: "N",
      isRetired: "N",
      labels: {
      icon: "https://brewerydb-images.s3.amazonaws.com/beer/zfP2fK/upload_nSMNjh-icon.png",
      medium: "https://brewerydb-images.s3.amazonaws.com/beer/zfP2fK/upload_nSMNjh-medium.png",
      large: "https://brewerydb-images.s3.amazonaws.com/beer/zfP2fK/upload_nSMNjh-large.png",
      contentAwareIcon: "https://brewerydb-images.s3.amazonaws.com/beer/zfP2fK/upload_nSMNjh-contentAwareIcon.png",
      contentAwareMedium: "https://brewerydb-images.s3.amazonaws.com/beer/zfP2fK/upload_nSMNjh-contentAwareMedium.png",
      contentAwareLarge: "https://brewerydb-images.s3.amazonaws.com/beer/zfP2fK/upload_nSMNjh-contentAwareLarge.png"
        },
      status: "verified",
      statusDisplay: "Verified",
      foodPairings: "Pizza, Spicy Thai, Korean, or Indian food, Pizza, Whitefish (without heavy sauces) like Sea Bass, Trout, & Most Lake Fish, & Pizza",
      originalGravity: "1.05",
      createDate: "2016-08-03 23:25:54",
      updateDate: "2018-11-02 02:15:14",
      available: {
      id: 1,
      name: "Year Round",
      description: "Available year round as a staple beer."
        },
      style: {
      id: 25,
      categoryId: 3,
      category: {
      id: 3,
      name: "North American Origin Ales",
      createDate: "2012-03-21 20:06:45"
        },
      name: "American-Style Pale Ale",
      shortName: "American Pale",
      description: "American pale ales range from deep golden to copper in color. The style is characterized by fruity, floral and citrus-like American-variety hop character producing medium to medium-high hop bitterness, flavor, and aroma. Note that the \"traditional\" style of this beer has its origins with certain floral, fruity, citrus-like, piney, resinous, or sulfur-like American hop varietals. One or more of these hop characters is the perceived end, but the perceived hop characters may be a result of the skillful use of hops of other national origins. American pale ales have medium body and low to medium maltiness. Low caramel character is allowable. Fruity-ester flavor and aroma should be moderate to strong. Diacetyl should be absent or present at very low levels. Chill haze is allowable at cold temperatures.",
      ibuMin: "30",
      ibuMax: "42",
      abvMin: "4.5",
      abvMax: "5.6",
      srmMin: "6",
      srmMax: "14",
      ogMin: "1.044",
      fgMin: "1.008",
      fgMax: "1.014",
      createDate: "2012-03-21 20:06:45",
      updateDate: "2015-04-07 15:25:18"
        }
        },
        {
      id: "xwYSL2",
      name: "15th Anniversary Ale",
      nameDisplay: "15th Anniversary Ale",
      description: "For the ﬁrst ever SweetWater anniversary beer (yeah it took us 15 years), we went back to our roots, dusted off our original ESB recipe, and gave it a big ol’ bump. The recipe consists of 7 malts, one of which Kevin toasted personally in his toaster oven, just like the old days, and 5 different styles of hops. In true SweetWater style, there is no style, but it’s big, bold, and meant to grow old, meaning this beer will be fantastic out of the gate, or you can lay her down in the cellar for many years to come.",
      styleId: 5,
      isOrganic: "N",
      isRetired: "N",
      status: "verified",
      statusDisplay: "Verified",
      createDate: "2015-04-16 15:44:15",
      updateDate: "2018-11-02 02:15:14",
      style: {
      id: 5,
      categoryId: 1,
      category: {
      id: 1,
      name: "British Origin Ales",
      createDate: "2012-03-21 20:06:45"
        },
      name: "Extra Special Bitter",
      shortName: "ESB",
      description: "Extra special bitter possesses medium to strong hop aroma, flavor, and bitterness. The residual malt and defining sweetness of this richly flavored, full-bodied bitter is more pronounced than in other styles of bitter. It is light amber to copper colored with medium to medium-high bitterness. Mild carbonation traditionally characterizes draft-cask versions, but in bottled versions, a slight increase in carbon dioxide content is acceptable. Fruity-ester character is acceptable in aroma and flavor. Diacetyl (butterscotch character) is acceptable and characteristic when at very low levels. The absence of diacetyl is also acceptable. Chill haze is allowable at cold temperatures. English or American hops may be used. (English and American hop character may be specified in subcategories.)",
      ibuMin: "30",
      ibuMax: "45",
      abvMin: "4.8",
      abvMax: "5.8",
      srmMin: "8",
      srmMax: "14",
      ogMin: "1.046",
      fgMin: "1.01",
      fgMax: "1.016",
      createDate: "2012-03-21 20:06:45",
      updateDate: "2015-04-07 15:19:20"
        }
        },
        {
      id: "UJGpVS",
      name: "16 So Fine Red Wheat Wine",
      nameDisplay: "16 So Fine Red Wheat Wine",
      description: "For our super heady 16 year anniversary beer we stepped on the gas and headed down the road less traveled! Our b-day present to ourselves was a racy Red Wheat Wine. The brew rips down the road at 11% ABV fueld by a 45% wheat bomb with an after burner hop shot of Amarillo, Willamette, Nelson Sauvignon, and US Goldings that pushes this baby to the limit of sensory overload. Get in. Sit down. Hold on. Shut up.",
      abv: "11",
      styleId: 35,
      isOrganic: "N",
      isRetired: "N",
      labels: {
      icon: "https://brewerydb-images.s3.amazonaws.com/beer/UJGpVS/upload_K4w7gB-icon.png",
      medium: "https://brewerydb-images.s3.amazonaws.com/beer/UJGpVS/upload_K4w7gB-medium.png",
      large: "https://brewerydb-images.s3.amazonaws.com/beer/UJGpVS/upload_K4w7gB-large.png",
      contentAwareIcon: "https://brewerydb-images.s3.amazonaws.com/beer/UJGpVS/upload_K4w7gB-contentAwareIcon.png",
      contentAwareMedium: "https://brewerydb-images.s3.amazonaws.com/beer/UJGpVS/upload_K4w7gB-contentAwareMedium.png",
      contentAwareLarge: "https://brewerydb-images.s3.amazonaws.com/beer/UJGpVS/upload_K4w7gB-contentAwareLarge.png"
        },
      status: "verified",
      statusDisplay: "Verified",
      createDate: "2013-02-24 16:31:05",
      updateDate: "2018-11-02 02:15:14",
      style: {
      id: 35,
      categoryId: 3,
      category: {
      id: 3,
      name: "North American Origin Ales",
      createDate: "2012-03-21 20:06:45"
        },
      name: "American-Style Wheat Wine Ale",
      shortName: "Wheatwine",
      description: "American style wheat wines range from gold to deep amber and are brewed with 50% or more wheat malt. They have full body and high residual malty sweetness. Perception of bitterness is moderate to medium -high. Fruity-ester characters are often high and counterbalanced by complexity of alcohols and high alcohol content. Hop aroma and flavor are at low to medium levels. Very low levels of diacetyl may be acceptable. Bready, wheat, honey-like and/or caramel aroma and flavor are often part of the character. Phenolic yeast character, sulfur, and/or sweet corn-like dimethylsulfide (DMS) should not be present. Oxidized, stale and aged characters are not typical of this style. Chill haze is allowable.",
      ibuMin: "45",
      ibuMax: "85",
      abvMin: "8.4",
      abvMax: "12",
      srmMin: "8",
      srmMax: "15",
      ogMin: "1.088",
      fgMin: "1.024",
      fgMax: "1.032",
      createDate: "2012-03-21 20:06:46",
      updateDate: "2015-04-07 15:27:17"
        }
        },
        {
      id: "vz5JZ1",
      name: "1794 The Fergal Project",
      nameDisplay: "1794 The Fergal Project",
      abv: "4.5",
      styleId: 42,
      isOrganic: "N",
      isRetired: "N",
      status: "verified",
      statusDisplay: "Verified",
      createDate: "2018-04-29 16:55:00",
      updateDate: "2018-11-02 02:15:14",
      style: {
      id: 42,
      categoryId: 3,
      category: {
      id: 3,
      name: "North American Origin Ales",
      createDate: "2012-03-21 20:06:45"
        },
      name: "American-Style Stout",
      shortName: "American Stout",
      description: "Initial low to medium malt sweetness with a degree of caramel, chocolate and/or roasted coffee flavor with a distinctive dryroasted bitterness in the finish. Coffee-like roasted barley and roasted malt aromas are prominent. Some slight roasted malt acidity is permissible and a medium- to full-bodied mouthfeel is appropriate. Hop bitterness may be moderate to high. Hop aroma and flavor is moderate to high, often with American citrus-type and/or resiny hop character. The perception of fruity esters is low. Roasted malt/barley astringency may be low but not excessive. Diacetyl (butterscotch) should be negligible or not perceived. Head retention is excellent.",
      ibuMin: "35",
      ibuMax: "60",
      abvMin: "5.7",
      abvMax: "8.8",
      srmMin: "40",
      srmMax: "40",
      ogMin: "1.05",
      fgMin: "1.01",
      fgMax: "1.022",
      createDate: "2012-03-21 20:06:46",
      updateDate: "2015-04-07 15:28:43"
        }
        },
        {
      id: "LcpeBb",
      name: "17th Saison",
      nameDisplay: "17th Saison",
      description: "This year’s anni ale has everything in it but the pitch fork and a bale of hay. With over two months of fermentation and cellaring time, this saison plows the field as it harvests spicy farmhouse overtones from its primary Fraunch saison yeast. That funky monkey delivers a strapping alc 9 % by vol, seeding a perfect foundation for secondary Brettanomyces fermentation, which hoes a cornucopia of tart and effervescent flavors. Distinct citrus notes from the finishing hops cultivate a naturally freaky fresh palate tweaker. Here’s to the next 17 trips around that burning ball in the sky!",
      abv: "9",
      styleId: 72,
      isOrganic: "N",
      isRetired: "N",
      status: "verified",
      statusDisplay: "Verified",
      createDate: "2015-04-16 15:43:03",
      updateDate: "2018-11-02 02:15:14",
      style: {
      id: 72,
      categoryId: 5,
      category: {
      id: 5,
      name: "Belgian And French Origin Ales",
      createDate: "2012-03-21 20:06:46"
        },
      name: "French & Belgian-Style Saison",
      shortName: "Saison",
      description: "Beers in this category are golden to deep amber in color. There may be quite a variety of characters within this style. Generally: They are light to medium in body. Malt aroma is low to medium-low. Esters are medium to high in  aroma, while, complex alcohols, herbs, spices, low Brettanomyces character and even clove and smoke-like phenolics may or may not be evident in the overall balanced beer. Hop aroma and flavor may be at low to medium levels. Malt flavor is low but provides foundation for the overall balance. Hop bitterness is moderate to moderately assertive. Herb and/or spice flavors, including black pepper-like notes, may or may not be evident. Fruitiness from fermentation is generally in character. A balanced small amount of sour or acidic flavors is acceptable when in balance with other components. Earthy, cellar-like, musty aromas are okay. Diacetyl should not be perceived. Chill or slight yeast haze is okay. Often bottle conditioned with some yeast character and high carbonation. French & Belgian-Style Saison may have Brettanomyces characters that are slightly acidity, fruity, horsey, goaty and/or leather-like.",
      ibuMin: "20",
      ibuMax: "40",
      abvMin: "4.5",
      abvMax: "8.5",
      srmMin: "4",
      srmMax: "14",
      ogMin: "1.055",
      fgMin: "1.004",
      fgMax: "1.016",
      createDate: "2012-03-21 20:06:46",
      updateDate: "2015-04-07 15:34:55"
        }
        },
        {
      id: "Yd8G8r",
      name: "18th Anniversary Belgian Tripel",
      nameDisplay: "18th Anniversary Belgian Tripel",
      description: "This brilliant Belgian Tripel showcases the best of our brewers as we bring to life 18 years of passion for beer and strive to crate the most interesting beers possible. This tripel leads with complex citrus aromas that are complimented by a strong undertow of spicy hop character. Ardennes yeast brings forward fruity esters as the Belgian candy sugar added in fermentation softens the body while leading to a vigorous ABV in the finished beer.",
      abv: "10",
      ibu: "17",
      styleId: 59,
      isOrganic: "N",
      isRetired: "N",
      labels: {
      icon: "https://brewerydb-images.s3.amazonaws.com/beer/Yd8G8r/upload_tFSifO-icon.png",
      medium: "https://brewerydb-images.s3.amazonaws.com/beer/Yd8G8r/upload_tFSifO-medium.png",
      large: "https://brewerydb-images.s3.amazonaws.com/beer/Yd8G8r/upload_tFSifO-large.png",
      contentAwareIcon: "https://brewerydb-images.s3.amazonaws.com/beer/Yd8G8r/upload_tFSifO-contentAwareIcon.png",
      contentAwareMedium: "https://brewerydb-images.s3.amazonaws.com/beer/Yd8G8r/upload_tFSifO-contentAwareMedium.png",
      contentAwareLarge: "https://brewerydb-images.s3.amazonaws.com/beer/Yd8G8r/upload_tFSifO-contentAwareLarge.png"
        },
      status: "verified",
      statusDisplay: "Verified",
      createDate: "2015-04-15 20:02:48",
      updateDate: "2018-11-02 02:15:14",
      style: {
      id: 59,
      categoryId: 5,
      category: {
      id: 5,
      name: "Belgian And French Origin Ales",
      createDate: "2012-03-21 20:06:46"
        },
      name: "Belgian-Style Tripel",
      shortName: "Belgian Tripel",
      description: "Tripels are often characterized by a complex, sometimes mild spicy character. Clove-like phenolic flavor and aroma may be evident at extremely low levels. Yeast-generated  fruity esters, including banana, are also common, but not necessary. These pale/light-colored ales may finish sweet, though any sweet finish should be light. The beer is characteristically medium and clean in body with an equalizing hop/malt balance and a perception of medium to medium high hop bitterness. Traditional Belgian Tripels are often well attenuated. Brewing sugar may be used to lighten the perception of body. Its sweetness will come from very pale malts. There should not be character from any roasted or dark malts. Low hop flavor is acceptable. Alcohol strength and flavor should be perceived as evident. Head retention is dense and mousse-like. Chill haze is acceptable at low serving temperatures. Traditional Tripels are bottle conditioned, may exhibit slight yeast haze but the yeast should not be intentionally roused. Oxidative character if evident in aged Tripels should be mild and pleasant.",
      ibuMin: "20",
      ibuMax: "45",
      abvMin: "7",
      abvMax: "10",
      srmMin: "4",
      srmMax: "9",
      ogMin: "1.07",
      fgMin: "1.01",
      fgMax: "1.018",
      createDate: "2012-03-21 20:06:46",
      updateDate: "2015-04-07 15:31:50"
        }
        },
        {
      id: "iJ329Y",
      name: "19 - Golden Belgian Style Ale",
      nameDisplay: "19 - Golden Belgian Style Ale",
      description: "This Golden Belgian Style Ale matured for over a year on brett in Cabernet and Merlot barrels, then was blended with a bright, citrusy hop-forward Belgian style IPA. Four plus two equals seven here, as the finished product is bigger than the sum of its parts. The art of this crafted cuvee is in the hop profile with a Belgian style nose up front, followed by woody undertones and a complex finish. After 19 years we’re still all about brewing great beer, supporting the communities who drink it and having a kick ass time along the way.",
      abv: "7",
      availableId: 2,
      styleId: 135,
      isOrganic: "N",
      isRetired: "N",
      labels: {
      icon: "https://brewerydb-images.s3.amazonaws.com/beer/iJ329Y/upload_LBXagO-icon.png",
      medium: "https://brewerydb-images.s3.amazonaws.com/beer/iJ329Y/upload_LBXagO-medium.png",
      large: "https://brewerydb-images.s3.amazonaws.com/beer/iJ329Y/upload_LBXagO-large.png",
      contentAwareIcon: "https://brewerydb-images.s3.amazonaws.com/beer/iJ329Y/upload_LBXagO-contentAwareIcon.png",
      contentAwareMedium: "https://brewerydb-images.s3.amazonaws.com/beer/iJ329Y/upload_LBXagO-contentAwareMedium.png",
      contentAwareLarge: "https://brewerydb-images.s3.amazonaws.com/beer/iJ329Y/upload_LBXagO-contentAwareLarge.png"
        },
      status: "verified",
      statusDisplay: "Verified",
      createDate: "2017-09-06 14:34:39",
      updateDate: "2018-11-02 02:15:14",
      available: {
      id: 2,
      name: "Limited",
      description: "Limited availability."
        },
      style: {
      id: 135,
      categoryId: 11,
      category: {
      id: 11,
      name: "Hybrid/mixed Beer",
      createDate: "2012-03-21 20:06:46"
        },
      name: "Wood- and Barrel-Aged Strong Beer",
      shortName: "BBL Aged Strong",
      description: "Any strong classic style or unique, experimental style of beer can be wood or barrel-aged for a period of time in a wooden barrel or in contact with wood. This beer is aged with the intention of imparting the particularly unique character of the wood and/or what has previously been in the barrel. New wood character can be characterized as a complex blend of vanillin and unique wood character but wood aged is not necessarily synonymous with imparting wood-flavors. Used sherry, rum, bourbon, scotch, port, wine and other barrels are often used, imparting complexity and uniqueness to beer. Ultimately a balance of flavor, aroma and mouthfeel are sought with the marriage of new beer with wood and/or barrel flavors. Primary character of the beer style may or may not be apparent. Sour wood-aged beer of any color is outlined in other categories. Beers in this style may or may not have Brettanomyces character. The brewer must explain the special nature of the beer to allow for accurate judging. Comments could include: type of wood used (new or old, oak or other wood type), type of barrel used (new, port/ whiskey/ wine/ sherry/ other), base beer style or achieved character. Beer entries not accompanied by this information will be at a disadvantage during judging.",
      createDate: "2012-03-21 20:06:46",
      updateDate: "2015-04-07 15:46:50"
        }
        },
        {
      id: "O78ldO",
      name: "1904 American Red Lager",
      nameDisplay: "1904 American Red Lager",
      description: "1904 American Red Lager is a special beer that goes by many names depending on which restaurant you visit!",
      abv: "5",
      styleId: 93,
      isOrganic: "N",
      isRetired: "N",
      status: "verified",
      statusDisplay: "Verified",
      createDate: "2017-06-19 14:11:51",
      updateDate: "2018-11-02 02:15:14",
      style: {
      id: 93,
      categoryId: 8,
      category: {
      id: 8,
      name: "North American Lager",
      createDate: "2012-03-21 20:06:46"
        },
      name: "American-Style Lager",
      shortName: "American Lager",
      description: "Light in body and very light to straw in color, American lagers are very clean and crisp and aggressively carbonated. Flavor components should b e subtle and complex, with no one ingredient dominating the others. Malt sweetness is light to mild. Corn, rice, or other grain or sugar adjuncts are often used. Hop bitterness, flavor and aroma are negligible to very light. Light fruity esters are acceptable. Chill haze and diacetyl should be absent.",
      ibuMin: "5",
      ibuMax: "13",
      abvMin: "3.8",
      abvMax: "5",
      srmMin: "2",
      srmMax: "4",
      ogMin: "1.04",
      fgMin: "1.006",
      fgMax: "1.01",
      createDate: "2012-03-21 20:06:46",
      updateDate: "2015-04-07 15:39:26"
        }
        },
        {
      id: "qGDeH1",
      name: "2 x 4",
      nameDisplay: "2 x 4",
      description: "40% Belgian-style Quad Ale aged in brandy barrels with dates and currants added, 60% Belgian-style Dubbel Ale.",
      abv: "8.7",
      glasswareId: 5,
      styleId: 70,
      isOrganic: "N",
      isRetired: "N",
      labels: {
      icon: "https://brewerydb-images.s3.amazonaws.com/beer/qGDeH1/upload_yrbAAo-icon.png",
      medium: "https://brewerydb-images.s3.amazonaws.com/beer/qGDeH1/upload_yrbAAo-medium.png",
      large: "https://brewerydb-images.s3.amazonaws.com/beer/qGDeH1/upload_yrbAAo-large.png",
      contentAwareIcon: "https://brewerydb-images.s3.amazonaws.com/beer/qGDeH1/upload_yrbAAo-contentAwareIcon.png",
      contentAwareMedium: "https://brewerydb-images.s3.amazonaws.com/beer/qGDeH1/upload_yrbAAo-contentAwareMedium.png",
      contentAwareLarge: "https://brewerydb-images.s3.amazonaws.com/beer/qGDeH1/upload_yrbAAo-contentAwareLarge.png"
        },
      status: "verified",
      statusDisplay: "Verified",
      createDate: "2012-01-03 02:42:37",
      updateDate: "2018-11-02 02:15:14",
      glass: {
      id: 5,
      name: "Pint",
      createDate: "2012-01-03 02:41:33"
        },
      style: {
      id: 70,
      categoryId: 5,
      category: {
      id: 5,
      name: "Belgian And French Origin Ales",
      createDate: "2012-03-21 20:06:46"
        },
      name: "Other Belgian-Style Ales",
      shortName: "Belgian Ale",
      description: "Recognizing the uniqueness and traditions of several other styles of Belgian Ales, the beers entered in this category will be assessed on the merits that they do not fit existing style guidelines and information that the brewer provides explaining the history and tradition of the style. Balance of character is a key component when assessing these beers. Barrel or wood-aged entries in competitions may be directed to other categories by competition director. In competitions the brewer must provide the historical or regional tradition of the style, or his interpretation of the style, in order to be assessed properly by the judges.",
      createDate: "2012-03-21 20:06:46",
      updateDate: "2015-04-07 15:33:05"
        }
        },
        {
      id: "MgdJep",
      name: "200th Anniversary Export Stout",
      nameDisplay: "200th Anniversary Export Stout",
      description: "Toffee caramel with subtle chocolate notes. Complex and very smooth with a balance of roasted malt and sweet chocolate.",
      abv: "6",
      styleId: 24,
      isOrganic: "N",
      isRetired: "N",
      labels: {
      icon: "https://brewerydb-images.s3.amazonaws.com/beer/MgdJep/upload_Z7FPX3-icon.png",
      medium: "https://brewerydb-images.s3.amazonaws.com/beer/MgdJep/upload_Z7FPX3-medium.png",
      large: "https://brewerydb-images.s3.amazonaws.com/beer/MgdJep/upload_Z7FPX3-large.png",
      contentAwareIcon: "https://brewerydb-images.s3.amazonaws.com/beer/MgdJep/upload_Z7FPX3-contentAwareIcon.png",
      contentAwareMedium: "https://brewerydb-images.s3.amazonaws.com/beer/MgdJep/upload_Z7FPX3-contentAwareMedium.png",
      contentAwareLarge: "https://brewerydb-images.s3.amazonaws.com/beer/MgdJep/upload_Z7FPX3-contentAwareLarge.png"
        },
      status: "verified",
      statusDisplay: "Verified",
      createDate: "2017-09-11 16:56:19",
      updateDate: "2018-11-02 02:15:14",
      style: {
      id: 24,
      categoryId: 2,
      category: {
      id: 2,
      name: "Irish Origin Ales",
      createDate: "2012-03-21 20:06:45"
        },
      name: "Foreign (Export)-Style Stout",
      shortName: "Export Stout",
      description: "As with classic dry stouts, foreign-style stouts have an initial malt sweetness and caramel flavor with a distinctive dry-roasted bitterness in the finish. Coffee-like roasted barley and roasted malt aromas are prominent. Some slight acidity is permissible and a medium- to full-bodied mouthfeel is appropriate. Bitterness may be high but the perception is often compromised by malt sweetness. Hop aroma and flavor should not be perceived. The perception of fruity esters is low. Diacetyl (butterscotch) should be negligible or not perceived. Head retention is excellent.",
      ibuMin: "30",
      ibuMax: "60",
      abvMin: "5.7",
      abvMax: "9.3",
      srmMin: "40",
      srmMax: "40",
      ogMin: "1.052",
      fgMin: "1.008",
      fgMax: "1.02",
      createDate: "2012-03-21 20:06:45",
      updateDate: "2015-04-07 15:23:58"
        }
        },
        {
      id: "ISTT06",
      name: "2017 Beer Camp",
      nameDisplay: "2017 Beer Camp (2017)",
      description: "At Beer Camp, no beer style is off limits, so we jumped at the idea of doing a Golden IPA using wheat malt for a light, dry body and bold American and experimental hops for intense citrus flavor. The perfect spring seasonal, we invite you to enjoy this year’s Beer Camp encore.",
      abv: "6.5",
      ibu: "50",
      styleId: 30,
      isOrganic: "N",
      isRetired: "N",
      year: 2017,
      labels: {
      icon: "https://brewerydb-images.s3.amazonaws.com/beer/ISTT06/upload_uNRmiy-icon.png",
      medium: "https://brewerydb-images.s3.amazonaws.com/beer/ISTT06/upload_uNRmiy-medium.png",
      large: "https://brewerydb-images.s3.amazonaws.com/beer/ISTT06/upload_uNRmiy-large.png",
      contentAwareIcon: "https://brewerydb-images.s3.amazonaws.com/beer/ISTT06/upload_uNRmiy-contentAwareIcon.png",
      contentAwareMedium: "https://brewerydb-images.s3.amazonaws.com/beer/ISTT06/upload_uNRmiy-contentAwareMedium.png",
      contentAwareLarge: "https://brewerydb-images.s3.amazonaws.com/beer/ISTT06/upload_uNRmiy-contentAwareLarge.png"
        },
      status: "verified",
      statusDisplay: "Verified",
      foodPairings: "Grilled Fish, Blackened Chicken\r\nSharp Goat Cheese\r\nLemon Sorbet",
      createDate: "2017-04-11 15:29:50",
      updateDate: "2018-11-02 02:15:14",
      style: {
      id: 30,
      categoryId: 3,
      category: {
      id: 3,
      name: "North American Origin Ales",
      createDate: "2012-03-21 20:06:45"
        },
      name: "American-Style India Pale Ale",
      shortName: "American IPA",
      description: "American-style India pale ales are perceived to have medium-high to intense hop bitterness, flavor and aroma with medium-high alcohol content. The style is further characterized by floral, fruity, citrus-like, piney, resinous, or sulfur-like American-variety hop character. Note that one or more of these American-variety hop characters is the perceived end, but the hop characters may be a result of the skillful use of hops of other national origins. The use of water with high mineral content results in a crisp, dry beer. This pale gold to deep copper-colored ale has a full, flowery hop aroma and may have a strong hop flavor (in addition to the perception of hop bitterness). India pale ales possess medium maltiness which contributes to a medium body. Fruity-ester flavors and aromas are moderate to very strong. Diacetyl can be absent or may be perceived at very low levels. Chill and/or hop haze is allowable at cold temperatures. (English and citrus-like American hops are considered enough of a distinction justifying separate American-style IPA and English-style IPA categories or subcategories. Hops of other origins may be used for bitterness or approximating traditional American or English character. See English-style India Pale Ale",
      ibuMin: "50",
      ibuMax: "70",
      abvMin: "6.3",
      abvMax: "7.5",
      srmMin: "6",
      srmMax: "14",
      ogMin: "1.06",
      fgMin: "1.012",
      fgMax: "1.018",
      createDate: "2012-03-21 20:06:45",
      updateDate: "2015-04-07 15:26:37"
        }
        },
        {
      id: "v4KRep",
      name: "20th Anniversary Imperial Hash IPA on Brett",
      nameDisplay: "20th Anniversary Imperial Hash IPA on Brett",
      description: "Extremely hop forward with a residual sweetness; golden in color with a haze.The Brettanomyces used is a SweetWater house blend.  As fermentation finishes, the Brett will start to produce its associated acids and phenols, lending a slightly tart finish. The aroma is fruity, herbal, tropical and citrusy, and the Brett gives a nice touch of funk and earthy phenolics.",
      abv: "9",
      ibu: "81",
      styleId: 31,
      isOrganic: "N",
      isRetired: "N",
      status: "verified",
      statusDisplay: "Verified",
      createDate: "2017-02-18 19:42:40",
      updateDate: "2018-11-02 02:15:14",
      style: {
      id: 31,
      categoryId: 3,
      category: {
      id: 3,
      name: "North American Origin Ales",
      createDate: "2012-03-21 20:06:45"
        },
      name: "Imperial or Double India Pale Ale",
      shortName: "Imperial IPA",
      description: "Imperial or Double India Pale Ales have intense hop bitterness, flavor and aroma. Alcohol content is medium-high to high and notably evident. They range from deep golden to medium copper in color. The style may use any variety of hops. Though the hop character is intense it's balanced with complex alcohol flavors, moderate to high fruity esters and medium to high malt character. Hop character should be fresh and lively and should not be harsh in quality. The use of large amounts of hops may cause a degree of appropriate hop haze. Imperial or Double India Pale Ales have medium-high to full body. Diacetyl should not be perceived. The intention of this style of beer is to exhibit the fresh and bright character of hops. Oxidative character and aged character should not be present.",
      ibuMin: "65",
      ibuMax: "100",
      abvMin: "7.5",
      abvMax: "10.5",
      srmMin: "5",
      srmMax: "13",
      ogMin: "1.075",
      fgMin: "1.012",
      fgMax: "1.02",
      createDate: "2012-03-21 20:06:45",
      updateDate: "2015-04-07 15:26:46"
        }
        },
        {
      id: "uIgENV",
      name: "20th Street Ale Citra",
      nameDisplay: "20th Street Ale Citra",
      abv: "7.3",
      glasswareId: 5,
      isOrganic: "N",
      isRetired: "N",
      labels: {
      icon: "https://brewerydb-images.s3.amazonaws.com/beer/uIgENV/upload_Y3uGi9-icon.png",
      medium: "https://brewerydb-images.s3.amazonaws.com/beer/uIgENV/upload_Y3uGi9-medium.png",
      large: "https://brewerydb-images.s3.amazonaws.com/beer/uIgENV/upload_Y3uGi9-large.png"
        },
      status: "verified",
      statusDisplay: "Verified",
      createDate: "2012-11-17 14:40:19",
      updateDate: "2018-11-02 02:15:14",
      glass: {
      id: 5,
      name: "Pint",
      createDate: "2012-01-03 02:41:33"
        }
        },
        {
      id: "WcP2Ww",
      name: "20th Street Ale Crystal",
      nameDisplay: "20th Street Ale Crystal",
      abv: "7.3",
      isOrganic: "N",
      isRetired: "N",
      labels: {
      icon: "https://brewerydb-images.s3.amazonaws.com/beer/WcP2Ww/upload_fLddgs-icon.png",
      medium: "https://brewerydb-images.s3.amazonaws.com/beer/WcP2Ww/upload_fLddgs-medium.png",
      large: "https://brewerydb-images.s3.amazonaws.com/beer/WcP2Ww/upload_fLddgs-large.png"
        },
      status: "verified",
      statusDisplay: "Verified",
      createDate: "2012-11-17 14:40:35",
      updateDate: "2018-11-02 02:15:14"
        },
        {
      id: "HyxQE4",
      name: "20th Street Ale Magnum",
      nameDisplay: "20th Street Ale Magnum",
      abv: "7.3",
      isOrganic: "N",
      isRetired: "N",
      labels: {
      icon: "https://brewerydb-images.s3.amazonaws.com/beer/HyxQE4/upload_ZXeOiC-icon.png",
      medium: "https://brewerydb-images.s3.amazonaws.com/beer/HyxQE4/upload_ZXeOiC-medium.png",
      large: "https://brewerydb-images.s3.amazonaws.com/beer/HyxQE4/upload_ZXeOiC-large.png"
        },
      status: "verified",
      statusDisplay: "Verified",
      createDate: "2012-11-17 14:40:02",
      updateDate: "2018-11-02 02:15:14"
        },
        {
      id: "e9sjBk",
      name: "21st Anniversary",
      nameDisplay: "21st Anniversary",
      description: "For our next few anniversary releases, we’re celebrating the beer mecca of Flanders, Belgium with a little east vs. west showdown. First off is an Oud Bruin (tr. Old Brown), which represents the style from the region of East Flanders. As the name indicates, this is an old style brown ale that uses a blend of microflora: bacteria such as acetobacter, lactobacillus and pediococcus; yeasts such as cultured saccharomyces yeast and brettanomyces wild yeasts to give the beer a specific sourness and funky aroma. We then aged it in American Oak foeders on top of cherries to give it a nice fruity punch that we know you’ll love.",
      abv: "7.9",
      ibu: "7",
      styleId: 57,
      isOrganic: "N",
      isRetired: "N",
      status: "verified",
      statusDisplay: "Verified",
      createDate: "2018-04-17 19:19:15",
      updateDate: "2018-11-02 02:15:14",
      style: {
      id: 57,
      categoryId: 5,
      category: {
      id: 5,
      name: "Belgian And French Origin Ales",
      createDate: "2012-03-21 20:06:46"
        },
      name: "Belgian-Style Flanders Oud Bruin or Oud Red Ales",
      shortName: "Flanders Red",
      description: "This light- to medium-bodied deep copper to brown ale is characterized by a slight to strong lactic sourness, and with \"Reds\" sometimes a balanced degree of acetic acid. Brettanomyces produced flavors and aromas are not part of character. A fruity-estery character which is often cherry-like is apparent with no hop flavor or aroma. Flanders brown ales have low to medium bitterness and a cocoa-like character from roast malt. Roasted malt character in aroma and flavor is acceptable at low levels. A very low degree of malt sweetness may be present and in balance with the acidity produced by Lactobacillus activity. Oak-like or woody characters may be pleasantly integrated into overall palate. Chill haze is acceptable at low serving temperatures. Some versions may be more highly carbonated and, when bottle conditioned, may appear cloudy (yeast) when served. These final beers are often blended old with new before packaging in order to create the brewer's intended balance of characters.",
      ibuMin: "15",
      ibuMax: "25",
      abvMin: "4.8",
      abvMax: "6.5",
      srmMin: "12",
      srmMax: "20",
      ogMin: "1.044",
      fgMin: "1.008",
      fgMax: "1.016",
      createDate: "2012-03-21 20:06:46",
      updateDate: "2015-04-07 15:31:39"
        }
        },
        {
      id: "YZXVKq",
      name: "25th Anniversary",
      nameDisplay: "25th Anniversary",
      description: "Twenty Five is a special-release beer celebrating 25 years of craftsmanship from Breckenridge Brewery. Imperial Vanilla Porter Aged In Rum Barrels.",
      abv: "9.8",
      styleId: 158,
      isOrganic: "N",
      isRetired: "N",
      status: "verified",
      statusDisplay: "Verified",
      createDate: "2015-12-11 15:48:31",
      updateDate: "2018-11-02 02:15:14",
      style: {
      id: 158,
      categoryId: 3,
      category: {
      id: 3,
      name: "North American Origin Ales",
      createDate: "2012-03-21 20:06:45"
        },
      name: "American-Style Imperial Porter",
      shortName: "American Imperial Porter",
      description: "American-style imperial porters are black in color. No roast barley or strong burnt/astringent black malt character should be perceived. Medium malt, caramel and cocoa-like sweetness. Hop bitterness is perceived at a medium-low to medium level. Hop flavor and aroma may vary from being low to medium-high. This is a full bodied beer. Ale-like fruity esters should be evident but not overpowering and compliment hop character and malt derived sweetness. Diacetyl (butterscotch) levels should be absent.",
      ibuMin: "35",
      ibuMax: "50",
      abvMin: "5.5",
      abvMax: "9.5",
      srmMin: "40",
      srmMax: "40",
      ogMin: "1.08",
      ogMax: "1.1",
      fgMin: "1.02",
      fgMax: "1.03",
      createDate: "2013-08-10 12:42:51",
      updateDate: "2015-04-07 15:49:32"
        }
        },
        {
      id: "7z8RTq",
      name: "3 Weight",
      nameDisplay: "3 Weight",
      abv: "4",
      styleId: 164,
      isOrganic: "N",
      isRetired: "N",
      status: "verified",
      statusDisplay: "Verified",
      createDate: "2017-07-23 21:47:32",
      updateDate: "2018-11-02 02:15:14",
      style: {
      id: 164,
      categoryId: 3,
      category: {
      id: 3,
      name: "North American Origin Ales",
      createDate: "2012-03-21 20:06:45"
        },
      name: "Session India Pale Ale",
      shortName: "Session IPA",
      description: "Session India Pale Ales are gold to copper. Chill haze is allowable at cold temperatures and hop haze is allowable at any temperature. Fruity-ester aroma is light to moderate. Hop aroma is medium to high with qualities from a wide variety of hops from all over the world. Low to medium maltiness is present. Hop flavor is strong, characterized by flavors from a wide variety of hops. Hop bitterness is medium to high. Fruity-ester flavors are low to moderate. Diacetyl is absent or at very low levels. Body is low to medium.",
      createDate: "2015-04-07 17:07:27"
        }
        },
        {
      id: "f5CWb6",
      name: "30th Anniversary - Charlie, Fred & Ken's Bock",
      nameDisplay: "30th Anniversary - Charlie, Fred & Ken's Bock",
      description: "Charlie Papazian and Fred Eckhart are the men who launched a thousand breweries. Their writing on the art of homebrewing and steadfast promotion of beer culture helped propel the craft brewing movement. Charlie and Fred agreed to work with us on this special ale in honor of our 30th anniversary. This Imperial Helles Bock is a testament to the ever-evolving brewer’s art. Bold yet balanced with distinct toasted malt character, moderate sweetness and clean and floral hops.",
      abv: "8.3",
      availableId: 3,
      styleId: 89,
      isOrganic: "N",
      isRetired: "Y",
      labels: {
      icon: "https://brewerydb-images.s3.amazonaws.com/beer/f5CWb6/upload_PSAyRK-icon.png",
      medium: "https://brewerydb-images.s3.amazonaws.com/beer/f5CWb6/upload_PSAyRK-medium.png",
      large: "https://brewerydb-images.s3.amazonaws.com/beer/f5CWb6/upload_PSAyRK-large.png",
      contentAwareIcon: "https://brewerydb-images.s3.amazonaws.com/beer/f5CWb6/upload_PSAyRK-contentAwareIcon.png",
      contentAwareMedium: "https://brewerydb-images.s3.amazonaws.com/beer/f5CWb6/upload_PSAyRK-contentAwareMedium.png",
      contentAwareLarge: "https://brewerydb-images.s3.amazonaws.com/beer/f5CWb6/upload_PSAyRK-contentAwareLarge.png"
        },
      status: "verified",
      statusDisplay: "Verified",
      createDate: "2014-06-17 20:00:02",
      updateDate: "2018-11-02 02:15:14",
      available: {
      id: 3,
      name: "Not Available",
      description: "Beer is not currently available."
        },
      style: {
      id: 89,
      categoryId: 7,
      category: {
      id: 7,
      name: "European-germanic Lager",
      createDate: "2012-03-21 20:06:46"
        },
      name: "German-Style Heller Bock/Maibock",
      shortName: "Maibock",
      description: "The German word helle means light colored, and as such, a heller Bock is light straw to deep golden in color. Maibocks are also light-colored bocks. The sweet malty character should come through in the aroma and flavor. A lightly toasted and/or bready malt character is often evident. Roast or heavy toast/caramel malt character should be absent. Body is medium to full. Hop bitterness should be low, while noble-type hop aroma and flavor may be at low to medium levels. Bitterness increases with gravity. Fruity esters may be perceived at low levels. Diacetyl should be absent. Chill haze should not be perceived.",
      ibuMin: "20",
      ibuMax: "38",
      abvMin: "6",
      abvMax: "8",
      srmMin: "4",
      srmMax: "10",
      ogMin: "1.066",
      fgMin: "1.012",
      fgMax: "1.02",
      createDate: "2012-03-21 20:06:46",
      updateDate: "2015-04-07 15:39:04"
        }
        },
        {
      id: "0KEzfx",
      name: "30th Anniversary - Fritz and Ken's Ale",
      nameDisplay: "30th Anniversary - Fritz and Ken's Ale",
      abv: "9.2",
      availableId: 3,
      styleId: 43,
      isOrganic: "N",
      isRetired: "Y",
      labels: {
      icon: "https://brewerydb-images.s3.amazonaws.com/beer/0KEzfx/upload_9zYMPq-icon.png",
      medium: "https://brewerydb-images.s3.amazonaws.com/beer/0KEzfx/upload_9zYMPq-medium.png",
      large: "https://brewerydb-images.s3.amazonaws.com/beer/0KEzfx/upload_9zYMPq-large.png",
      contentAwareIcon: "https://brewerydb-images.s3.amazonaws.com/beer/0KEzfx/upload_9zYMPq-contentAwareIcon.png",
      contentAwareMedium: "https://brewerydb-images.s3.amazonaws.com/beer/0KEzfx/upload_9zYMPq-contentAwareMedium.png",
      contentAwareLarge: "https://brewerydb-images.s3.amazonaws.com/beer/0KEzfx/upload_9zYMPq-contentAwareLarge.png"
        },
      status: "verified",
      statusDisplay: "Verified",
      createDate: "2014-02-04 22:15:20",
      updateDate: "2018-11-02 02:15:14",
      available: {
      id: 3,
      name: "Not Available",
      description: "Beer is not currently available."
        },
      style: {
      id: 43,
      categoryId: 3,
      category: {
      id: 3,
      name: "North American Origin Ales",
      createDate: "2012-03-21 20:06:45"
        },
      name: "American-Style Imperial Stout",
      shortName: "American Imperial Stout",
      description: "Black in color, American-style imperial stouts typically have a high alcohol content. Generally characterized as very robust. The extremely rich malty flavor and aroma are balanced with assertive hopping and fruity-ester characteristics. Bitterness should be moderately high to very high and balanced with full sweet malt character. Roasted malt astringency and bitterness can be moderately perceived but should not overwhelm the overall character. Hop aroma is usually moderately-high to overwhelmingly hop-floral, -citrus or -herbal. Diacetyl (butterscotch) levels should be absent.",
      ibuMin: "50",
      ibuMax: "80",
      abvMin: "7",
      abvMax: "12",
      srmMin: "40",
      srmMax: "40",
      ogMin: "1.08",
      fgMin: "1.02",
      fgMax: "1.03",
      createDate: "2012-03-21 20:06:46",
      updateDate: "2015-04-07 15:28:49"
        }
        },
        {
      id: "KjumXn",
      name: "30th Anniversary - Grand Cru",
      nameDisplay: "30th Anniversary - Grand Cru",
      abv: "9.2",
      styleId: 138,
      isOrganic: "N",
      isRetired: "N",
      status: "verified",
      statusDisplay: "Verified",
      createDate: "2018-05-10 17:15:23",
      updateDate: "2018-11-02 02:15:14",
      style: {
      id: 138,
      categoryId: 11,
      category: {
      id: 11,
      name: "Hybrid/mixed Beer",
      createDate: "2012-03-21 20:06:46"
        },
      name: "Other Strong Ale or Lager",
      shortName: "Strong Ale",
      description: "Any style of beer can be made stronger than the classic style guidelines. The goal should be to reach a balance between the style's character and the additional alcohol. Refer to this guide when making styles stronger and appropriately identify the style created (for example: double alt, triple fest, or quadruple Pilsener).",
      createDate: "2012-03-21 20:06:46",
      updateDate: "2015-04-07 15:47:08"
        }
        },
        {
      id: "8M5lCq",
      name: "30th Anniversary - Jack & Ken's Ale",
      nameDisplay: "30th Anniversary - Jack & Ken's Ale",
      description: "Jack McAuliffe was the first American \"micro\" brewer. His tiny New Albion Brewery in Sonoma, California inspired countless dreamers to start small-scale breweries of their own. Jack agreed to guest brew this very special ale with us in honor of our 30th anniversary. This Black Barleywine Ale is a nod to the legendary ales New Albion served at their legendary summer solstice parties. Rich with bittersweet and roasted malt flavors, balanced with whole-cone American hops, this robust ale should age gracefully for years.",
      abv: "10.2",
      availableId: 3,
      styleId: 34,
      isOrganic: "N",
      isRetired: "Y",
      labels: {
      icon: "https://brewerydb-images.s3.amazonaws.com/beer/8M5lCq/upload_v5FHDf-icon.png",
      medium: "https://brewerydb-images.s3.amazonaws.com/beer/8M5lCq/upload_v5FHDf-medium.png",
      large: "https://brewerydb-images.s3.amazonaws.com/beer/8M5lCq/upload_v5FHDf-large.png",
      contentAwareIcon: "https://brewerydb-images.s3.amazonaws.com/beer/8M5lCq/upload_v5FHDf-contentAwareIcon.png",
      contentAwareMedium: "https://brewerydb-images.s3.amazonaws.com/beer/8M5lCq/upload_v5FHDf-contentAwareMedium.png",
      contentAwareLarge: "https://brewerydb-images.s3.amazonaws.com/beer/8M5lCq/upload_v5FHDf-contentAwareLarge.png"
        },
      status: "verified",
      statusDisplay: "Verified",
      createDate: "2014-06-17 20:02:42",
      updateDate: "2018-11-02 02:15:14",
      available: {
      id: 3,
      name: "Not Available",
      description: "Beer is not currently available."
        },
      style: {
      id: 34,
      categoryId: 3,
      category: {
      id: 3,
      name: "North American Origin Ales",
      createDate: "2012-03-21 20:06:45"
        },
      name: "American-Style Barley Wine Ale",
      shortName: "American Barleywine",
      description: "American style barley wines range from amber to deep copper-garnet in color and have a full body and high residual malty sweetness. Complexity of alcohols and fruity-ester characters are often high and counterbalanced by assertive bitterness and extraordinary alcohol content. Hop aroma and flavor are at medium to very high levels. American type hops are often used but not necessary for this style. Very low levels of diacetyl may be acceptable. A caramel and/or toffee aroma and flavor are often part of the character. Characters indicating oxidation, such as vinous (sometimes sherry-like) aromas and/or flavors, are not generally acceptable in American-style Barley Wine Ale, however if a low level of age-induced oxidation character harmonizes and enhances the overall experience this can be regarded favorably. Chill haze is allowable at cold temperatures.",
      ibuMin: "60",
      ibuMax: "100",
      abvMin: "8.4",
      abvMax: "12",
      srmMin: "11",
      srmMax: "22",
      ogMin: "1.09",
      fgMin: "1.024",
      fgMax: "1.028",
      createDate: "2012-03-21 20:06:46",
      updateDate: "2015-04-07 15:27:08"
        }
        },
        {
      id: "ajbd6g",
      name: "35th Anniversary  - Brewer's Reserve",
      nameDisplay: "35th Anniversary  - Brewer's Reserve",
      abv: "8",
      styleId: 14,
      isOrganic: "N",
      isRetired: "N",
      labels: {
      icon: "https://brewerydb-images.s3.amazonaws.com/beer/ajbd6g/upload_o0dl64-icon.png",
      medium: "https://brewerydb-images.s3.amazonaws.com/beer/ajbd6g/upload_o0dl64-medium.png",
      large: "https://brewerydb-images.s3.amazonaws.com/beer/ajbd6g/upload_o0dl64-large.png",
      contentAwareIcon: "https://brewerydb-images.s3.amazonaws.com/beer/ajbd6g/upload_o0dl64-contentAwareIcon.png",
      contentAwareMedium: "https://brewerydb-images.s3.amazonaws.com/beer/ajbd6g/upload_o0dl64-contentAwareMedium.png",
      contentAwareLarge: "https://brewerydb-images.s3.amazonaws.com/beer/ajbd6g/upload_o0dl64-contentAwareLarge.png"
        },
      status: "verified",
      statusDisplay: "Verified",
      createDate: "2015-11-10 14:23:57",
      updateDate: "2018-11-02 02:15:14",
      style: {
      id: 14,
      categoryId: 1,
      category: {
      id: 1,
      name: "British Origin Ales",
      createDate: "2012-03-21 20:06:45"
        },
      name: "Strong Ale",
      shortName: "Strong Ale",
      description: "Light amber to mid-range brown in color, strong ales are medium to full bodied with a malty sweetness and may have low levels of roast malt character. Hop aroma should be minimal and flavor can vary from none to medium in character intensity. Fruity-ester flavors and aromas can contribute to the character of this ale. Bitterness should be minimal but evident and balanced with malt and/or caramel-like sweetness. Alcohol types can be varied and complex. A rich, often sweet and complex estery character may be evident. Very low levels of diacetyl are acceptable. Chill haze is acceptable at low temperatures. (This style may often be split into two categories, strong and very strong.)",
      ibuMin: "30",
      ibuMax: "65",
      abvMin: "7",
      abvMax: "11",
      srmMin: "8",
      srmMax: "21",
      ogMin: "1.06",
      fgMin: "1.014",
      fgMax: "1.04",
      createDate: "2012-03-21 20:06:45",
      updateDate: "2015-04-07 15:21:05"
        }
        },
        {
      id: "NoNhan",
      name: "420 Extra Pale Ale",
      nameDisplay: "420 Extra Pale Ale",
      description: "SweetWater 420 Extra Pale Ale, our most popular brew, is a tasty West Coast-style pale ale with a stimulating hop character and a crisp finish. 1st brewed on April 20th 1997.\r\n\r\nGrains – Munich, 40L, 2-Row\r\nHops – Centennial, Cascade\r\n\r\nAwards – 2002 Silver Medal- Great American Beer Festival, 1997 – 2005 Creative Loafing Readers Choice – Best local beer, 1998 World Beer Cup silver medal, Top 10 Local beers – Atlanta Journal Constitution",
      abv: "5.4",
      ibu: "41",
      glasswareId: 5,
      availableId: 1,
      styleId: 25,
      isOrganic: "N",
      isRetired: "N",
      labels: {
      icon: "https://brewerydb-images.s3.amazonaws.com/beer/NoNhan/upload_FgWgmB-icon.png",
      medium: "https://brewerydb-images.s3.amazonaws.com/beer/NoNhan/upload_FgWgmB-medium.png",
      large: "https://brewerydb-images.s3.amazonaws.com/beer/NoNhan/upload_FgWgmB-large.png",
      contentAwareIcon: "https://brewerydb-images.s3.amazonaws.com/beer/NoNhan/upload_FgWgmB-contentAwareIcon.png",
      contentAwareMedium: "https://brewerydb-images.s3.amazonaws.com/beer/NoNhan/upload_FgWgmB-contentAwareMedium.png",
      contentAwareLarge: "https://brewerydb-images.s3.amazonaws.com/beer/NoNhan/upload_FgWgmB-contentAwareLarge.png"
        },
      status: "verified",
      statusDisplay: "Verified",
      createDate: "2012-01-03 02:44:20",
      updateDate: "2018-11-02 02:15:14",
      glass: {
      id: 5,
      name: "Pint",
      createDate: "2012-01-03 02:41:33"
        },
      available: {
      id: 1,
      name: "Year Round",
      description: "Available year round as a staple beer."
        },
      style: {
      id: 25,
      categoryId: 3,
      category: {
      id: 3,
      name: "North American Origin Ales",
      createDate: "2012-03-21 20:06:45"
        },
      name: "American-Style Pale Ale",
      shortName: "American Pale",
      description: "American pale ales range from deep golden to copper in color. The style is characterized by fruity, floral and citrus-like American-variety hop character producing medium to medium-high hop bitterness, flavor, and aroma. Note that the \"traditional\" style of this beer has its origins with certain floral, fruity, citrus-like, piney, resinous, or sulfur-like American hop varietals. One or more of these hop characters is the perceived end, but the perceived hop characters may be a result of the skillful use of hops of other national origins. American pale ales have medium body and low to medium maltiness. Low caramel character is allowable. Fruity-ester flavor and aroma should be moderate to strong. Diacetyl should be absent or present at very low levels. Chill haze is allowable at cold temperatures.",
      ibuMin: "30",
      ibuMax: "42",
      abvMin: "4.5",
      abvMax: "5.6",
      srmMin: "6",
      srmMax: "14",
      ogMin: "1.044",
      fgMin: "1.008",
      fgMax: "1.014",
      createDate: "2012-03-21 20:06:45",
      updateDate: "2015-04-07 15:25:18"
        }
        },
        {
      id: "pOUbfg",
      name: "420 Fest",
      nameDisplay: "420 Fest",
      abv: "8",
      availableId: 2,
      styleId: 31,
      isOrganic: "N",
      isRetired: "N",
      status: "verified",
      statusDisplay: "Verified",
      createDate: "2015-06-01 22:38:11",
      updateDate: "2018-11-02 02:15:14",
      available: {
      id: 2,
      name: "Limited",
      description: "Limited availability."
        },
      style: {
      id: 31,
      categoryId: 3,
      category: {
      id: 3,
      name: "North American Origin Ales",
      createDate: "2012-03-21 20:06:45"
        },
      name: "Imperial or Double India Pale Ale",
      shortName: "Imperial IPA",
      description: "Imperial or Double India Pale Ales have intense hop bitterness, flavor and aroma. Alcohol content is medium-high to high and notably evident. They range from deep golden to medium copper in color. The style may use any variety of hops. Though the hop character is intense it's balanced with complex alcohol flavors, moderate to high fruity esters and medium to high malt character. Hop character should be fresh and lively and should not be harsh in quality. The use of large amounts of hops may cause a degree of appropriate hop haze. Imperial or Double India Pale Ales have medium-high to full body. Diacetyl should not be perceived. The intention of this style of beer is to exhibit the fresh and bright character of hops. Oxidative character and aged character should not be present.",
      ibuMin: "65",
      ibuMax: "100",
      abvMin: "7.5",
      abvMax: "10.5",
      srmMin: "5",
      srmMax: "13",
      ogMin: "1.075",
      fgMin: "1.012",
      fgMax: "1.02",
      createDate: "2012-03-21 20:06:45",
      updateDate: "2015-04-07 15:26:46"
        }
        },
        {
      id: "jIKwgZ",
      name: "420 Strain G13 IPA",
      nameDisplay: "420 Strain G13 IPA",
      description: "G13 IPA is a strange new strain, indeed. We took the dank hop profile you’d expect from a hazy IPA, and married it with terpenes and natural hemp flavors. The result is a big yet balanced IPA that mimics the aroma and taste of a heady, green G13. G13 IPA is a sticky super-hybrid that’s ready to rip.\r\n\r\nPungent and dank aromatics on this terpene infused IPA fill the room once the beer is opened. We went with an aggressive dry hop schedule which interlaces nicely with the unique flavors to bring forward citrus and earthy notes followed by a resinous finish. This one’s fire!\r\n\r\nColombus and Simcoe in the boil and dry hop!",
      abv: "6",
      ibu: "48",
      styleId: 30,
      isOrganic: "N",
      isRetired: "N",
      labels: {
      icon: "https://brewerydb-images.s3.amazonaws.com/beer/jIKwgZ/upload_fypFIo-icon.png",
      medium: "https://brewerydb-images.s3.amazonaws.com/beer/jIKwgZ/upload_fypFIo-medium.png",
      large: "https://brewerydb-images.s3.amazonaws.com/beer/jIKwgZ/upload_fypFIo-large.png",
      contentAwareIcon: "https://brewerydb-images.s3.amazonaws.com/beer/jIKwgZ/upload_fypFIo-contentAwareIcon.png",
      contentAwareMedium: "https://brewerydb-images.s3.amazonaws.com/beer/jIKwgZ/upload_fypFIo-contentAwareMedium.png",
      contentAwareLarge: "https://brewerydb-images.s3.amazonaws.com/beer/jIKwgZ/upload_fypFIo-contentAwareLarge.png"
        },
      status: "verified",
      statusDisplay: "Verified",
      createDate: "2018-07-13 19:25:27",
      updateDate: "2018-11-02 02:15:14",
      style: {
      id: 30,
      categoryId: 3,
      category: {
      id: 3,
      name: "North American Origin Ales",
      createDate: "2012-03-21 20:06:45"
        },
      name: "American-Style India Pale Ale",
      shortName: "American IPA",
      description: "American-style India pale ales are perceived to have medium-high to intense hop bitterness, flavor and aroma with medium-high alcohol content. The style is further characterized by floral, fruity, citrus-like, piney, resinous, or sulfur-like American-variety hop character. Note that one or more of these American-variety hop characters is the perceived end, but the hop characters may be a result of the skillful use of hops of other national origins. The use of water with high mineral content results in a crisp, dry beer. This pale gold to deep copper-colored ale has a full, flowery hop aroma and may have a strong hop flavor (in addition to the perception of hop bitterness). India pale ales possess medium maltiness which contributes to a medium body. Fruity-ester flavors and aromas are moderate to very strong. Diacetyl can be absent or may be perceived at very low levels. Chill and/or hop haze is allowable at cold temperatures. (English and citrus-like American hops are considered enough of a distinction justifying separate American-style IPA and English-style IPA categories or subcategories. Hops of other origins may be used for bitterness or approximating traditional American or English character. See English-style India Pale Ale",
      ibuMin: "50",
      ibuMax: "70",
      abvMin: "6.3",
      abvMax: "7.5",
      srmMin: "6",
      srmMax: "14",
      ogMin: "1.06",
      fgMin: "1.012",
      fgMax: "1.018",
      createDate: "2012-03-21 20:06:45",
      updateDate: "2015-04-07 15:26:37"
        }
        },
        {
      id: "lWygSS",
      name: "471 Double IPA - Hull Melon",
      nameDisplay: "471 Double IPA - Hull Melon",
      abv: "9.2",
      availableId: 2,
      styleId: 31,
      isOrganic: "N",
      isRetired: "N",
      labels: {
      icon: "https://brewerydb-images.s3.amazonaws.com/beer/lWygSS/upload_krkDHm-icon.png",
      medium: "https://brewerydb-images.s3.amazonaws.com/beer/lWygSS/upload_krkDHm-medium.png",
      large: "https://brewerydb-images.s3.amazonaws.com/beer/lWygSS/upload_krkDHm-large.png",
      contentAwareIcon: "https://brewerydb-images.s3.amazonaws.com/beer/lWygSS/upload_krkDHm-contentAwareIcon.png",
      contentAwareMedium: "https://brewerydb-images.s3.amazonaws.com/beer/lWygSS/upload_krkDHm-contentAwareMedium.png",
      contentAwareLarge: "https://brewerydb-images.s3.amazonaws.com/beer/lWygSS/upload_krkDHm-contentAwareLarge.png"
        },
      status: "verified",
      statusDisplay: "Verified",
      createDate: "2015-11-18 18:37:22",
      updateDate: "2018-11-02 02:15:14",
      available: {
      id: 2,
      name: "Limited",
      description: "Limited availability."
        },
      style: {
      id: 31,
      categoryId: 3,
      category: {
      id: 3,
      name: "North American Origin Ales",
      createDate: "2012-03-21 20:06:45"
        },
      name: "Imperial or Double India Pale Ale",
      shortName: "Imperial IPA",
      description: "Imperial or Double India Pale Ales have intense hop bitterness, flavor and aroma. Alcohol content is medium-high to high and notably evident. They range from deep golden to medium copper in color. The style may use any variety of hops. Though the hop character is intense it's balanced with complex alcohol flavors, moderate to high fruity esters and medium to high malt character. Hop character should be fresh and lively and should not be harsh in quality. The use of large amounts of hops may cause a degree of appropriate hop haze. Imperial or Double India Pale Ales have medium-high to full body. Diacetyl should not be perceived. The intention of this style of beer is to exhibit the fresh and bright character of hops. Oxidative character and aged character should not be present.",
      ibuMin: "65",
      ibuMax: "100",
      abvMin: "7.5",
      abvMax: "10.5",
      srmMin: "5",
      srmMax: "13",
      ogMin: "1.075",
      fgMin: "1.012",
      fgMax: "1.02",
      createDate: "2012-03-21 20:06:45",
      updateDate: "2015-04-07 15:26:46"
        }
        },
        {
      id: "fa0oqf",
      name: "471 ESB - Extra Special Bitter",
      nameDisplay: "471 ESB - Extra Special Bitter",
      description: "Extra, extra? You better believe it. We like to say it’s double extra special. The balance of malt and hops makes it truly one-of-a-kind. Warming malt notes at the onset with a hop kick in the back and opens up to a nice dry finish. Our small batch ESB is a big traditional ale with characteristics that break tradition and a complexity that constantly surprises.\r\n\r\nYeast: Scottish Ale\r\nMalts: English Pale, Amber, Crystal and Roasted Barley\r\nHops: Chinook, Centennial, Fuggle",
      abv: "7.8",
      ibu: "55",
      glasswareId: 5,
      availableId: 3,
      styleId: 5,
      isOrganic: "N",
      isRetired: "Y",
      status: "verified",
      statusDisplay: "Verified",
      createDate: "2012-01-03 02:42:37",
      updateDate: "2018-11-02 02:15:14",
      glass: {
      id: 5,
      name: "Pint",
      createDate: "2012-01-03 02:41:33"
        },
      available: {
      id: 3,
      name: "Not Available",
      description: "Beer is not currently available."
        },
      style: {
      id: 5,
      categoryId: 1,
      category: {
      id: 1,
      name: "British Origin Ales",
      createDate: "2012-03-21 20:06:45"
        },
      name: "Extra Special Bitter",
      shortName: "ESB",
      description: "Extra special bitter possesses medium to strong hop aroma, flavor, and bitterness. The residual malt and defining sweetness of this richly flavored, full-bodied bitter is more pronounced than in other styles of bitter. It is light amber to copper colored with medium to medium-high bitterness. Mild carbonation traditionally characterizes draft-cask versions, but in bottled versions, a slight increase in carbon dioxide content is acceptable. Fruity-ester character is acceptable in aroma and flavor. Diacetyl (butterscotch character) is acceptable and characteristic when at very low levels. The absence of diacetyl is also acceptable. Chill haze is allowable at cold temperatures. English or American hops may be used. (English and American hop character may be specified in subcategories.)",
      ibuMin: "30",
      ibuMax: "45",
      abvMin: "4.8",
      abvMax: "5.8",
      srmMin: "8",
      srmMax: "14",
      ogMin: "1.046",
      fgMin: "1.01",
      fgMax: "1.016",
      createDate: "2012-03-21 20:06:45",
      updateDate: "2015-04-07 15:19:20"
        }
        },
        {
      id: "HZMvCT",
      name: "471 IPA Barrel Series: Citra",
      nameDisplay: "471 IPA Barrel Series: Citra",
      description: "471 IPA Barrel Series is a labor of love. We not only give our 471 Double IPA the luxury of time in whiskey barrels, we follow that stage with a dry hop treatment that features a new hop variety with each release. We’ve pampered it here, for you to enjoy.\r\n\r\nThe Citra dry hop imparts citrus aromas of tangerine and orange.",
      abv: "11.3",
      ibu: "70",
      styleId: 31,
      isOrganic: "N",
      isRetired: "N",
      status: "verified",
      statusDisplay: "Verified",
      createDate: "2017-04-19 13:37:27",
      updateDate: "2018-11-02 02:15:14",
      style: {
      id: 31,
      categoryId: 3,
      category: {
      id: 3,
      name: "North American Origin Ales",
      createDate: "2012-03-21 20:06:45"
        },
      name: "Imperial or Double India Pale Ale",
      shortName: "Imperial IPA",
      description: "Imperial or Double India Pale Ales have intense hop bitterness, flavor and aroma. Alcohol content is medium-high to high and notably evident. They range from deep golden to medium copper in color. The style may use any variety of hops. Though the hop character is intense it's balanced with complex alcohol flavors, moderate to high fruity esters and medium to high malt character. Hop character should be fresh and lively and should not be harsh in quality. The use of large amounts of hops may cause a degree of appropriate hop haze. Imperial or Double India Pale Ales have medium-high to full body. Diacetyl should not be perceived. The intention of this style of beer is to exhibit the fresh and bright character of hops. Oxidative character and aged character should not be present.",
      ibuMin: "65",
      ibuMax: "100",
      abvMin: "7.5",
      abvMax: "10.5",
      srmMin: "5",
      srmMax: "13",
      ogMin: "1.075",
      fgMin: "1.012",
      fgMax: "1.02",
      createDate: "2012-03-21 20:06:45",
      updateDate: "2015-04-07 15:26:46"
        }
        },
        {
      id: "GysKeq",
      name: "471 IPA Barrel Series: Eureka!",
      nameDisplay: "471 IPA Barrel Series: Eureka!",
      description: "471 IPA Barrel Series is a labor of love. We not only give our 471 Double IPA the luxury of time in whiskey barrels, we follow that stage with a dry hop treatment that features a new hop variety with each release. We’ve pampered it here, for you to enjoy.\r\n\r\nThe Eureka! dry hop imparts aromas of dark fruit and pint with strong herbal notes.",
      abv: "11.2",
      ibu: "70",
      availableId: 2,
      styleId: 31,
      isOrganic: "N",
      isRetired: "N",
      status: "verified",
      statusDisplay: "Verified",
      createDate: "2016-11-30 19:13:16",
      updateDate: "2018-11-02 02:15:14",
      available: {
      id: 2,
      name: "Limited",
      description: "Limited availability."
        },
      style: {
      id: 31,
      categoryId: 3,
      category: {
      id: 3,
      name: "North American Origin Ales",
      createDate: "2012-03-21 20:06:45"
        },
      name: "Imperial or Double India Pale Ale",
      shortName: "Imperial IPA",
      description: "Imperial or Double India Pale Ales have intense hop bitterness, flavor and aroma. Alcohol content is medium-high to high and notably evident. They range from deep golden to medium copper in color. The style may use any variety of hops. Though the hop character is intense it's balanced with complex alcohol flavors, moderate to high fruity esters and medium to high malt character. Hop character should be fresh and lively and should not be harsh in quality. The use of large amounts of hops may cause a degree of appropriate hop haze. Imperial or Double India Pale Ales have medium-high to full body. Diacetyl should not be perceived. The intention of this style of beer is to exhibit the fresh and bright character of hops. Oxidative character and aged character should not be present.",
      ibuMin: "65",
      ibuMax: "100",
      abvMin: "7.5",
      abvMax: "10.5",
      srmMin: "5",
      srmMax: "13",
      ogMin: "1.075",
      fgMin: "1.012",
      fgMax: "1.02",
      createDate: "2012-03-21 20:06:45",
      updateDate: "2015-04-07 15:26:46"
        }
        },
        {
      id: "tw2Iw0",
      name: "471 IPA. Aggressive Hoppiness",
      nameDisplay: "471 IPA. Aggressive Hoppiness",
      description: "Hoppy? Brother, 471 IPA redefines hoppy. 471 is a small batch, limited edition ale that was created by our Brewmaster to separate the weak from the strong. 471 is a double IPA, that combines Pale, Munich, Caramel-30, Carapils and Torrified Wheat malts, with Chinook, Centennial, Simcoe and Fuggles hops. It has a big sweet mouthfeel, followed by more hoppiness than you've ever had at one time. Enjoy.",
      abv: "9.2",
      ibu: "70",
      availableId: 3,
      styleId: 31,
      isOrganic: "N",
      isRetired: "Y",
      status: "verified",
      statusDisplay: "Verified",
      createDate: "2012-01-03 02:42:37",
      updateDate: "2018-11-02 02:15:14",
      available: {
      id: 3,
      name: "Not Available",
      description: "Beer is not currently available."
        },
      style: {
      id: 31,
      categoryId: 3,
      category: {
      id: 3,
      name: "North American Origin Ales",
      createDate: "2012-03-21 20:06:45"
        },
      name: "Imperial or Double India Pale Ale",
      shortName: "Imperial IPA",
      description: "Imperial or Double India Pale Ales have intense hop bitterness, flavor and aroma. Alcohol content is medium-high to high and notably evident. They range from deep golden to medium copper in color. The style may use any variety of hops. Though the hop character is intense it's balanced with complex alcohol flavors, moderate to high fruity esters and medium to high malt character. Hop character should be fresh and lively and should not be harsh in quality. The use of large amounts of hops may cause a degree of appropriate hop haze. Imperial or Double India Pale Ales have medium-high to full body. Diacetyl should not be perceived. The intention of this style of beer is to exhibit the fresh and bright character of hops. Oxidative character and aged character should not be present.",
      ibuMin: "65",
      ibuMax: "100",
      abvMin: "7.5",
      abvMax: "10.5",
      srmMin: "5",
      srmMax: "13",
      ogMin: "1.075",
      fgMin: "1.012",
      fgMax: "1.02",
      createDate: "2012-03-21 20:06:45",
      updateDate: "2015-04-07 15:26:46"
        }
        },
        {
      id: "GYF0P4",
      name: "471 Pilsner",
      nameDisplay: "471 Pilsner",
      styleId: 98,
      isOrganic: "N",
      isRetired: "N",
      status: "verified",
      statusDisplay: "Verified",
      createDate: "2012-01-03 02:42:37",
      updateDate: "2018-11-02 02:15:14",
      style: {
      id: 98,
      categoryId: 8,
      category: {
      id: 8,
      name: "North American Lager",
      createDate: "2012-03-21 20:06:46"
        },
      name: "American-Style Pilsener",
      shortName: "American Pilsener",
      description: "This classic and unique pre-Prohibition American-style Pilsener is straw to deep gold in color. Hop bitterness, flavor and aroma are medium to high, and use of noble-type hops for flavor and aroma is preferred. Up to 25 percent corn and/or rice in the grist should be used. Malt flavor and aroma are medium. This is a light-medium to medium-bodied beer. Sweet corn-like dimethylsulfide (DMS), fruity esters and American hop-derived citrus flavors or aromas should not be perceived. Diacetyl is not acceptable. There should be no chill haze. Competition organizers may wish to subcategorize this style into rice and corn subcategories.",
      ibuMin: "25",
      ibuMax: "40",
      abvMin: "5",
      abvMax: "6",
      srmMin: "3",
      srmMax: "6",
      ogMin: "1.045",
      fgMin: "1.012",
      fgMax: "1.018",
      createDate: "2012-03-21 20:06:46",
      updateDate: "2015-04-07 15:40:08"
        }
        },
        {
      id: "j9cp5e",
      name: "471 Small Batch IPA",
      nameDisplay: "471 Small Batch IPA",
      description: "Hoppy? Brother, 471 IPA redefines hoppy. 471 is a small batch, limited edition ale that was created by our Brewmaster to separate the weak from the strong. 471 is a double IPA, that combines Pale, Munich, Caramel-30, Carapils and Torrified Wheat malts, with Chinook, Centennial, Simcoe and Fuggles hops. It has a big sweet mouthfeel, followed by more hoppiness than you've ever had at one time. Enjoy.",
      abv: "9.2",
      ibu: "70",
      glasswareId: 8,
      srmId: 11,
      availableId: 1,
      styleId: 30,
      isOrganic: "N",
      isRetired: "N",
      labels: {
      icon: "https://brewerydb-images.s3.amazonaws.com/beer/j9cp5e/upload_YlBItH-icon.png",
      medium: "https://brewerydb-images.s3.amazonaws.com/beer/j9cp5e/upload_YlBItH-medium.png",
      large: "https://brewerydb-images.s3.amazonaws.com/beer/j9cp5e/upload_YlBItH-large.png",
      contentAwareIcon: "https://brewerydb-images.s3.amazonaws.com/beer/j9cp5e/upload_YlBItH-contentAwareIcon.png",
      contentAwareMedium: "https://brewerydb-images.s3.amazonaws.com/beer/j9cp5e/upload_YlBItH-contentAwareMedium.png",
      contentAwareLarge: "https://brewerydb-images.s3.amazonaws.com/beer/j9cp5e/upload_YlBItH-contentAwareLarge.png"
        },
      status: "verified",
      statusDisplay: "Verified",
      createDate: "2012-01-03 02:42:37",
      updateDate: "2018-11-02 02:15:14",
      glass: {
      id: 8,
      name: "Tulip",
      createDate: "2012-01-03 02:41:33"
        },
      srm: {
      id: 11,
      name: "11",
      hex: "D77200"
        },
      available: {
      id: 1,
      name: "Year Round",
      description: "Available year round as a staple beer."
        },
      style: {
      id: 30,
      categoryId: 3,
      category: {
      id: 3,
      name: "North American Origin Ales",
      createDate: "2012-03-21 20:06:45"
        },
      name: "American-Style India Pale Ale",
      shortName: "American IPA",
      description: "American-style India pale ales are perceived to have medium-high to intense hop bitterness, flavor and aroma with medium-high alcohol content. The style is further characterized by floral, fruity, citrus-like, piney, resinous, or sulfur-like American-variety hop character. Note that one or more of these American-variety hop characters is the perceived end, but the hop characters may be a result of the skillful use of hops of other national origins. The use of water with high mineral content results in a crisp, dry beer. This pale gold to deep copper-colored ale has a full, flowery hop aroma and may have a strong hop flavor (in addition to the perception of hop bitterness). India pale ales possess medium maltiness which contributes to a medium body. Fruity-ester flavors and aromas are moderate to very strong. Diacetyl can be absent or may be perceived at very low levels. Chill and/or hop haze is allowable at cold temperatures. (English and citrus-like American hops are considered enough of a distinction justifying separate American-style IPA and English-style IPA categories or subcategories. Hops of other origins may be used for bitterness or approximating traditional American or English character. See English-style India Pale Ale",
      ibuMin: "50",
      ibuMax: "70",
      abvMin: "6.3",
      abvMax: "7.5",
      srmMin: "6",
      srmMax: "14",
      ogMin: "1.06",
      fgMin: "1.012",
      fgMax: "1.018",
      createDate: "2012-03-21 20:06:45",
      updateDate: "2015-04-07 15:26:37"
        }
        },
        {
      id: "5MX880",
      name: "5 C's IPA",
      nameDisplay: "5 C's IPA",
      description: "Our interpretation of a West Coast IPA is golden, medium-bodied ale that is very hop forward.  The use of Cascade, Chinook, Columbus, Centennial and Crystal hops makes this beer a hophead's dream.",
      abv: "6.5",
      styleId: 30,
      isOrganic: "N",
      isRetired: "N",
      status: "verified",
      statusDisplay: "Verified",
      createDate: "2012-01-03 02:42:37",
      updateDate: "2018-11-02 02:15:14",
      style: {
      id: 30,
      categoryId: 3,
      category: {
      id: 3,
      name: "North American Origin Ales",
      createDate: "2012-03-21 20:06:45"
        },
      name: "American-Style India Pale Ale",
      shortName: "American IPA",
      description: "American-style India pale ales are perceived to have medium-high to intense hop bitterness, flavor and aroma with medium-high alcohol content. The style is further characterized by floral, fruity, citrus-like, piney, resinous, or sulfur-like American-variety hop character. Note that one or more of these American-variety hop characters is the perceived end, but the hop characters may be a result of the skillful use of hops of other national origins. The use of water with high mineral content results in a crisp, dry beer. This pale gold to deep copper-colored ale has a full, flowery hop aroma and may have a strong hop flavor (in addition to the perception of hop bitterness). India pale ales possess medium maltiness which contributes to a medium body. Fruity-ester flavors and aromas are moderate to very strong. Diacetyl can be absent or may be perceived at very low levels. Chill and/or hop haze is allowable at cold temperatures. (English and citrus-like American hops are considered enough of a distinction justifying separate American-style IPA and English-style IPA categories or subcategories. Hops of other origins may be used for bitterness or approximating traditional American or English character. See English-style India Pale Ale",
      ibuMin: "50",
      ibuMax: "70",
      abvMin: "6.3",
      abvMax: "7.5",
      srmMin: "6",
      srmMax: "14",
      ogMin: "1.06",
      fgMin: "1.012",
      fgMax: "1.018",
      createDate: "2012-03-21 20:06:45",
      updateDate: "2015-04-07 15:26:37"
        }
        },
        {
      id: "uA3MVL",
      name: "7 Birds",
      nameDisplay: "7 Birds",
      description: "Strawberry, Raspberry pilsner. Very good. Crisp and clean. Beautiful disaster session style I could drink this all day while being outside.",
      abv: "5",
      ibu: "13",
      styleId: 98,
      isOrganic: "Y",
      isRetired: "N",
      status: "verified",
      statusDisplay: "Verified",
      createDate: "2015-07-14 20:56:20",
      updateDate: "2018-11-02 02:15:14",
      style: {
      id: 98,
      categoryId: 8,
      category: {
      id: 8,
      name: "North American Lager",
      createDate: "2012-03-21 20:06:46"
        },
      name: "American-Style Pilsener",
      shortName: "American Pilsener",
      description: "This classic and unique pre-Prohibition American-style Pilsener is straw to deep gold in color. Hop bitterness, flavor and aroma are medium to high, and use of noble-type hops for flavor and aroma is preferred. Up to 25 percent corn and/or rice in the grist should be used. Malt flavor and aroma are medium. This is a light-medium to medium-bodied beer. Sweet corn-like dimethylsulfide (DMS), fruity esters and American hop-derived citrus flavors or aromas should not be perceived. Diacetyl is not acceptable. There should be no chill haze. Competition organizers may wish to subcategorize this style into rice and corn subcategories.",
      ibuMin: "25",
      ibuMax: "40",
      abvMin: "5",
      abvMax: "6",
      srmMin: "3",
      srmMax: "6",
      ogMin: "1.045",
      fgMin: "1.012",
      fgMax: "1.018",
      createDate: "2012-03-21 20:06:46",
      updateDate: "2015-04-07 15:40:08"
        }
        },
        {
      id: "Fhw2NF",
      name: "7 Cities Pilsner",
      nameDisplay: "7 Cities Pilsner",
      description: "Seven Cities Pilsner, an unfiltered German Pilsner is the first lager style beer to be released by Jackalope Brewing Company.\r\n It is brewed entirely with noble German Tettnang hops and pours a beautiful light golden color,\r\n thus we named it after the myth of the Seven Cities of Gold.\r\n It is a light bodied, refreshing brew with hints of Pilsen malt sweetness,\r\n and a smooth yet hoppy finish.",
      abv: "5",
      ibu: "32",
      styleId: 98,
      isOrganic: "Y",
      isRetired: "N",
      labels: {
      icon: "https://brewerydb-images.s3.amazonaws.com/beer/Fhw2NF/upload_4QscTY-icon.png",
      medium: "https://brewerydb-images.s3.amazonaws.com/beer/Fhw2NF/upload_4QscTY-medium.png",
      large: "https://brewerydb-images.s3.amazonaws.com/beer/Fhw2NF/upload_4QscTY-large.png",
      contentAwareIcon: "https://brewerydb-images.s3.amazonaws.com/beer/Fhw2NF/upload_4QscTY-contentAwareIcon.png",
      contentAwareMedium: "https://brewerydb-images.s3.amazonaws.com/beer/Fhw2NF/upload_4QscTY-contentAwareMedium.png",
      contentAwareLarge: "https://brewerydb-images.s3.amazonaws.com/beer/Fhw2NF/upload_4QscTY-contentAwareLarge.png"
        },
      status: "verified",
      statusDisplay: "Verified",
      createDate: "2015-07-14 20:28:12",
      updateDate: "2018-11-02 02:15:14",
      style: {
      id: 98,
      categoryId: 8,
      category: {
      id: 8,
      name: "North American Lager",
      createDate: "2012-03-21 20:06:46"
        },
      name: "American-Style Pilsener",
      shortName: "American Pilsener",
      description: "This classic and unique pre-Prohibition American-style Pilsener is straw to deep gold in color. Hop bitterness, flavor and aroma are medium to high, and use of noble-type hops for flavor and aroma is preferred. Up to 25 percent corn and/or rice in the grist should be used. Malt flavor and aroma are medium. This is a light-medium to medium-bodied beer. Sweet corn-like dimethylsulfide (DMS), fruity esters and American hop-derived citrus flavors or aromas should not be perceived. Diacetyl is not acceptable. There should be no chill haze. Competition organizers may wish to subcategorize this style into rice and corn subcategories.",
      ibuMin: "25",
      ibuMax: "40",
      abvMin: "5",
      abvMax: "6",
      srmMin: "3",
      srmMax: "6",
      ogMin: "1.045",
      fgMin: "1.012",
      fgMax: "1.018",
      createDate: "2012-03-21 20:06:46",
      updateDate: "2015-04-07 15:40:08"
        }
        },
        {
      id: "MqTIG4",
      name: "72 Imperial",
      nameDisplay: "72 Imperial",
      description: "Just sit back and enjoy the ride.\r\n\r\nBrewed with chocolate from Colorado's very own Rocky Mountain Chocolate Factory, Inc., this Imperial Chocolate Cream Stout is full of rich, toasted chocolate notes with hints of dark fruit. 72 Imperial will take you where you need to go. Just sit back and enjoy the ride.",
      abv: "7.2",
      ibu: "11",
      availableId: 2,
      styleId: 44,
      isOrganic: "N",
      isRetired: "N",
      labels: {
      icon: "https://brewerydb-images.s3.amazonaws.com/beer/MqTIG4/upload_0mNn6W-icon.png",
      medium: "https://brewerydb-images.s3.amazonaws.com/beer/MqTIG4/upload_0mNn6W-medium.png",
      large: "https://brewerydb-images.s3.amazonaws.com/beer/MqTIG4/upload_0mNn6W-large.png",
      contentAwareIcon: "https://brewerydb-images.s3.amazonaws.com/beer/MqTIG4/upload_0mNn6W-contentAwareIcon.png",
      contentAwareMedium: "https://brewerydb-images.s3.amazonaws.com/beer/MqTIG4/upload_0mNn6W-contentAwareMedium.png",
      contentAwareLarge: "https://brewerydb-images.s3.amazonaws.com/beer/MqTIG4/upload_0mNn6W-contentAwareLarge.png"
        },
      status: "verified",
      statusDisplay: "Verified",
      createDate: "2014-07-17 14:35:54",
      updateDate: "2018-11-02 02:15:14",
      available: {
      id: 2,
      name: "Limited",
      description: "Limited availability."
        },
      style: {
      id: 44,
      categoryId: 3,
      category: {
      id: 3,
      name: "North American Origin Ales",
      createDate: "2012-03-21 20:06:45"
        },
      name: "Specialty Stouts",
      shortName: "Stout",
      description: "See British Origin American-Style Imperial Porter Imperial porters are very dark brown to black in color. No roast barley or strong burnt/astringent black malt character should be perceived. Medium malt, caramel and cocoa-like sweetness should be in harmony with medium-low to medium hop bitterness. This is a full bodied beer. Ale-like fruity esters should be evident but not overpowering and compliment malt derived sweetness and hop character. Hop flavor and aroma may vary from being low to medium-high. Diacetyl (butterscotch) levels should be absent.",
      ibuMin: "35",
      ibuMax: "50",
      abvMin: "7",
      abvMax: "12",
      srmMin: "40",
      srmMax: "40",
      ogMin: "1.08",
      fgMin: "1.02",
      fgMax: "1.03",
      createDate: "2012-03-21 20:06:46",
      updateDate: "2015-04-07 15:28:58"
        }
        },
        {
      id: "wDgaK8",
      name: "A Beer Named Sue",
      nameDisplay: "A Beer Named Sue",
      description: "Golden ale infused with local organic Artemesia Annua grown by Hallow Herb Farm in Burlington’s Intervale. The aroma and flavor of “Sweet Woodruff” meets fruity esters and soft malt character while finishing dry.",
      abv: "5.7",
      ibu: "23",
      styleId: 72,
      isOrganic: "N",
      isRetired: "N",
      status: "verified",
      statusDisplay: "Verified",
      originalGravity: "1.051",
      createDate: "2015-04-06 16:47:09",
      updateDate: "2018-11-02 02:15:14",
      style: {
      id: 72,
      categoryId: 5,
      category: {
      id: 5,
      name: "Belgian And French Origin Ales",
      createDate: "2012-03-21 20:06:46"
        },
      name: "French & Belgian-Style Saison",
      shortName: "Saison",
      description: "Beers in this category are golden to deep amber in color. There may be quite a variety of characters within this style. Generally: They are light to medium in body. Malt aroma is low to medium-low. Esters are medium to high in  aroma, while, complex alcohols, herbs, spices, low Brettanomyces character and even clove and smoke-like phenolics may or may not be evident in the overall balanced beer. Hop aroma and flavor may be at low to medium levels. Malt flavor is low but provides foundation for the overall balance. Hop bitterness is moderate to moderately assertive. Herb and/or spice flavors, including black pepper-like notes, may or may not be evident. Fruitiness from fermentation is generally in character. A balanced small amount of sour or acidic flavors is acceptable when in balance with other components. Earthy, cellar-like, musty aromas are okay. Diacetyl should not be perceived. Chill or slight yeast haze is okay. Often bottle conditioned with some yeast character and high carbonation. French & Belgian-Style Saison may have Brettanomyces characters that are slightly acidity, fruity, horsey, goaty and/or leather-like.",
      ibuMin: "20",
      ibuMax: "40",
      abvMin: "4.5",
      abvMax: "8.5",
      srmMin: "4",
      srmMax: "14",
      ogMin: "1.055",
      fgMin: "1.004",
      fgMax: "1.016",
      createDate: "2012-03-21 20:06:46",
      updateDate: "2015-04-07 15:34:55"
        }
        },
        {
      id: "Au0v9G",
      name: "A Little Sumpin' Extra",
      nameDisplay: "A Little Sumpin' Extra",
      abv: "8.7",
      availableId: 4,
      styleId: 31,
      isOrganic: "N",
      isRetired: "N",
      labels: {
      icon: "https://brewerydb-images.s3.amazonaws.com/beer/Au0v9G/upload_K1Zc5E-icon.png",
      medium: "https://brewerydb-images.s3.amazonaws.com/beer/Au0v9G/upload_K1Zc5E-medium.png",
      large: "https://brewerydb-images.s3.amazonaws.com/beer/Au0v9G/upload_K1Zc5E-large.png",
      contentAwareIcon: "https://brewerydb-images.s3.amazonaws.com/beer/Au0v9G/upload_K1Zc5E-contentAwareIcon.png",
      contentAwareMedium: "https://brewerydb-images.s3.amazonaws.com/beer/Au0v9G/upload_K1Zc5E-contentAwareMedium.png",
      contentAwareLarge: "https://brewerydb-images.s3.amazonaws.com/beer/Au0v9G/upload_K1Zc5E-contentAwareLarge.png"
        },
      status: "verified",
      statusDisplay: "Verified",
      createDate: "2014-04-17 12:52:38",
      updateDate: "2018-11-02 02:15:14",
      available: {
      id: 4,
      name: "Seasonal",
      description: "Available at the same time of year, every year."
        },
      style: {
      id: 31,
      categoryId: 3,
      category: {
      id: 3,
      name: "North American Origin Ales",
      createDate: "2012-03-21 20:06:45"
        },
      name: "Imperial or Double India Pale Ale",
      shortName: "Imperial IPA",
      description: "Imperial or Double India Pale Ales have intense hop bitterness, flavor and aroma. Alcohol content is medium-high to high and notably evident. They range from deep golden to medium copper in color. The style may use any variety of hops. Though the hop character is intense it's balanced with complex alcohol flavors, moderate to high fruity esters and medium to high malt character. Hop character should be fresh and lively and should not be harsh in quality. The use of large amounts of hops may cause a degree of appropriate hop haze. Imperial or Double India Pale Ales have medium-high to full body. Diacetyl should not be perceived. The intention of this style of beer is to exhibit the fresh and bright character of hops. Oxidative character and aged character should not be present.",
      ibuMin: "65",
      ibuMax: "100",
      abvMin: "7.5",
      abvMax: "10.5",
      srmMin: "5",
      srmMax: "13",
      ogMin: "1.075",
      fgMin: "1.012",
      fgMax: "1.02",
      createDate: "2012-03-21 20:06:45",
      updateDate: "2015-04-07 15:26:46"
        }
        },
        {
      id: "svXHfu",
      name: "A Little Sumpin' Sumpin'",
      nameDisplay: "A Little Sumpin' Sumpin'",
      description: "Sneaky Smooth with a Touch of What we Call Wheatly-esque-ish-ness. Crispy Wheat and Pale Malt flavors with a Zippy Hop Finish. A Return of the Brand-Spankin’ New Beer From The Summer of 2009.",
      abv: "7.5",
      ibu: "64.2",
      glasswareId: 5,
      srmId: 20,
      availableId: 1,
      styleId: 25,
      isOrganic: "N",
      isRetired: "N",
      labels: {
      icon: "https://brewerydb-images.s3.amazonaws.com/beer/svXHfu/upload_i4Mwls-icon.png",
      medium: "https://brewerydb-images.s3.amazonaws.com/beer/svXHfu/upload_i4Mwls-medium.png",
      large: "https://brewerydb-images.s3.amazonaws.com/beer/svXHfu/upload_i4Mwls-large.png",
      contentAwareIcon: "https://brewerydb-images.s3.amazonaws.com/beer/svXHfu/upload_i4Mwls-contentAwareIcon.png",
      contentAwareMedium: "https://brewerydb-images.s3.amazonaws.com/beer/svXHfu/upload_i4Mwls-contentAwareMedium.png",
      contentAwareLarge: "https://brewerydb-images.s3.amazonaws.com/beer/svXHfu/upload_i4Mwls-contentAwareLarge.png"
        },
      status: "verified",
      statusDisplay: "Verified",
      servingTemperature: "cold",
      servingTemperatureDisplay: "Cold - (4-7C/39-45F)",
      originalGravity: "1.076",
      createDate: "2012-01-03 02:43:37",
      updateDate: "2018-11-02 02:15:14",
      glass: {
      id: 5,
      name: "Pint",
      createDate: "2012-01-03 02:41:33"
        },
      srm: {
      id: 20,
      name: "20",
      hex: "9B3200"
        },
      available: {
      id: 1,
      name: "Year Round",
      description: "Available year round as a staple beer."
        },
      style: {
      id: 25,
      categoryId: 3,
      category: {
      id: 3,
      name: "North American Origin Ales",
      createDate: "2012-03-21 20:06:45"
        },
      name: "American-Style Pale Ale",
      shortName: "American Pale",
      description: "American pale ales range from deep golden to copper in color. The style is characterized by fruity, floral and citrus-like American-variety hop character producing medium to medium-high hop bitterness, flavor, and aroma. Note that the \"traditional\" style of this beer has its origins with certain floral, fruity, citrus-like, piney, resinous, or sulfur-like American hop varietals. One or more of these hop characters is the perceived end, but the perceived hop characters may be a result of the skillful use of hops of other national origins. American pale ales have medium body and low to medium maltiness. Low caramel character is allowable. Fruity-ester flavor and aroma should be moderate to strong. Diacetyl should be absent or present at very low levels. Chill haze is allowable at cold temperatures.",
      ibuMin: "30",
      ibuMax: "42",
      abvMin: "4.5",
      abvMax: "5.6",
      srmMin: "6",
      srmMax: "14",
      ogMin: "1.044",
      fgMin: "1.008",
      fgMax: "1.014",
      createDate: "2012-03-21 20:06:45",
      updateDate: "2015-04-07 15:25:18"
        }
        },
        {
      id: "hbF6tu",
      name: "ABLE Best Britter",
      nameDisplay: "ABLE Best Britter",
      description: "Draft Only",
      abv: "4.3",
      glasswareId: 5,
      availableId: 2,
      styleId: 4,
      isOrganic: "N",
      isRetired: "N",
      labels: {
      icon: "https://brewerydb-images.s3.amazonaws.com/beer/hbF6tu/upload_KtTfDY-icon.png",
      medium: "https://brewerydb-images.s3.amazonaws.com/beer/hbF6tu/upload_KtTfDY-medium.png",
      large: "https://brewerydb-images.s3.amazonaws.com/beer/hbF6tu/upload_KtTfDY-large.png",
      contentAwareIcon: "https://brewerydb-images.s3.amazonaws.com/beer/hbF6tu/upload_KtTfDY-contentAwareIcon.png",
      contentAwareMedium: "https://brewerydb-images.s3.amazonaws.com/beer/hbF6tu/upload_KtTfDY-contentAwareMedium.png",
      contentAwareLarge: "https://brewerydb-images.s3.amazonaws.com/beer/hbF6tu/upload_KtTfDY-contentAwareLarge.png"
        },
      status: "verified",
      statusDisplay: "Verified",
      createDate: "2012-01-03 02:42:38",
      updateDate: "2018-11-02 02:15:14",
      glass: {
      id: 5,
      name: "Pint",
      createDate: "2012-01-03 02:41:33"
        },
      available: {
      id: 2,
      name: "Limited",
      description: "Limited availability."
        },
      style: {
      id: 4,
      categoryId: 1,
      category: {
      id: 1,
      name: "British Origin Ales",
      createDate: "2012-03-21 20:06:45"
        },
      name: "Special Bitter or Best Bitter",
      shortName: "Special Bitter",
      description: "Special bitter is more robust than ordinary bitter. It has medium body and medium residual malt sweetness. It is deep gold to copper colored. Hop bitterness should be medium and absent of harshness. Hop flavor and aroma character may be evident at the brewer's discretion. Mild carbonation traditionally characterizes draft-cask versions, but in bottled versions, a slight increase in carbon dioxide content is acceptable. Fruity-ester character is acceptable in aroma and flavor. Diacetyl (butterscotch character) is acceptable and characteristic when at very low levels. The absence of diacetyl is also acceptable. Chill haze is allowable at cold temperatures. (English and American hop character may be specified in subcategories.)",
      ibuMin: "28",
      ibuMax: "40",
      abvMin: "4.1",
      abvMax: "4.8",
      srmMin: "6",
      srmMax: "14",
      ogMin: "1.038",
      fgMin: "1.006",
      fgMax: "1.012",
      createDate: "2012-03-21 20:06:45",
      updateDate: "2015-04-07 15:19:15"
        }
        },
        {
      id: "MTLa3r",
      name: "Afternooner",
      nameDisplay: "Afternooner",
      abv: "4.6",
      styleId: 62,
      isOrganic: "N",
      isRetired: "N",
      status: "verified",
      statusDisplay: "Verified",
      createDate: "2012-10-10 23:41:23",
      updateDate: "2018-11-02 02:15:14",
      style: {
      id: 62,
      categoryId: 5,
      category: {
      id: 5,
      name: "Belgian And French Origin Ales",
      createDate: "2012-03-21 20:06:46"
        },
      name: "Belgian-Style Pale Ale",
      shortName: "Belgian Pale",
      description: "Belgian-style pale ales are characterized by low but noticeable hop bitterness, flavor, and aroma. Light to medium body and low malt aroma are typical. They are light amber to deep amber in color. Noble-type hops are commonly used. Low to medium fruity esters are evident in aroma and flavor. Low levels of phenolic spiciness from yeast byproducts may be perceived. Low caramel or toasted malt flavor is okay. Diacetyl should not be perceived. Chill haze is allowable at cold temperatures.",
      ibuMin: "20",
      ibuMax: "30",
      abvMin: "4",
      abvMax: "6",
      srmMin: "6",
      srmMax: "12",
      ogMin: "1.044",
      fgMin: "1.008",
      fgMax: "1.014",
      createDate: "2012-03-21 20:06:46",
      updateDate: "2015-04-07 15:32:06"
        }
        },
        {
      id: "6AcqY6",
      name: "Agave Wheat",
      nameDisplay: "Agave Wheat",
      description: "This true American-style unfiltered wheat has something a little special – the nectar of the great Salmiana Agave. Agave complements the refreshingly light quality of our wheat and adds a subtle note of flavor that expands this beer’s uplifting taste profile. It is familiar, yet creative.\r\n\r\nYeast: American Wheat\r\nMalts: Pale, White Wheat, Torrified Wheat, Carapils, Caramel, Munich\r\nHops: Fuggle, Cascade, Willamette",
      abv: "5.9",
      ibu: "19",
      glasswareId: 9,
      availableId: 1,
      styleId: 112,
      isOrganic: "N",
      isRetired: "N",
      labels: {
      icon: "https://brewerydb-images.s3.amazonaws.com/beer/6AcqY6/upload_NDHDT6-icon.png",
      medium: "https://brewerydb-images.s3.amazonaws.com/beer/6AcqY6/upload_NDHDT6-medium.png",
      large: "https://brewerydb-images.s3.amazonaws.com/beer/6AcqY6/upload_NDHDT6-large.png",
      contentAwareIcon: "https://brewerydb-images.s3.amazonaws.com/beer/6AcqY6/upload_NDHDT6-contentAwareIcon.png",
      contentAwareMedium: "https://brewerydb-images.s3.amazonaws.com/beer/6AcqY6/upload_NDHDT6-contentAwareMedium.png",
      contentAwareLarge: "https://brewerydb-images.s3.amazonaws.com/beer/6AcqY6/upload_NDHDT6-contentAwareLarge.png"
        },
      status: "verified",
      statusDisplay: "Verified",
      createDate: "2012-01-03 02:42:39",
      updateDate: "2018-11-02 02:15:14",
      glass: {
      id: 9,
      name: "Weizen",
      createDate: "2012-01-03 02:41:33"
        },
      available: {
      id: 1,
      name: "Year Round",
      description: "Available year round as a staple beer."
        },
      style: {
      id: 112,
      categoryId: 11,
      category: {
      id: 11,
      name: "Hybrid/mixed Beer",
      createDate: "2012-03-21 20:06:46"
        },
      name: "Light American Wheat Ale or Lager with Yeast",
      shortName: "Wheat Ale",
      description: "This beer can be made using either ale or lager yeast. It can be brewed with 30 to 75 percent wheat malt, and hop rates may be low to medium. Hop characters may be light to moderate in bitterness, flavor and aroma. Fruity-estery aroma and flavor are typical but at low levels however, phenolic, clove-like characteristics should not be perceived. Color is usually straw to light amber, and the body should be light to medium in character. Diacetyl should not be perceived. Because this style is served with yeast the character should portray a full yeasty mouthfeel and appear hazy to very cloudy. Chill haze is also acceptable. Yeast flavor and aroma should be low to medium but not overpowering the balance and character of malt and hops. These beers are typically served with the yeast in the bottle, and are cloudy when served.",
      ibuMin: "10",
      ibuMax: "35",
      abvMin: "3.5",
      abvMax: "5.5",
      srmMin: "4",
      srmMax: "10",
      ogMin: "1.036",
      fgMin: "1.006",
      fgMax: "1.018",
      createDate: "2012-03-21 20:06:46",
      updateDate: "2015-04-07 15:42:48"
        }
        },
        {
      id: "RK9Po6",
      name: "Ale 20",
      nameDisplay: "Ale 20",
      abv: "5.7",
      styleId: 25,
      isOrganic: "N",
      isRetired: "N",
      labels: {
      icon: "https://brewerydb-images.s3.amazonaws.com/beer/RK9Po6/upload_wGYxyS-icon.png",
      medium: "https://brewerydb-images.s3.amazonaws.com/beer/RK9Po6/upload_wGYxyS-medium.png",
      large: "https://brewerydb-images.s3.amazonaws.com/beer/RK9Po6/upload_wGYxyS-large.png",
      contentAwareIcon: "https://brewerydb-images.s3.amazonaws.com/beer/RK9Po6/upload_wGYxyS-contentAwareIcon.png",
      contentAwareMedium: "https://brewerydb-images.s3.amazonaws.com/beer/RK9Po6/upload_wGYxyS-contentAwareMedium.png",
      contentAwareLarge: "https://brewerydb-images.s3.amazonaws.com/beer/RK9Po6/upload_wGYxyS-contentAwareLarge.png"
        },
      status: "verified",
      statusDisplay: "Verified",
      createDate: "2013-09-03 14:12:56",
      updateDate: "2018-11-02 02:15:14",
      style: {
      id: 25,
      categoryId: 3,
      category: {
      id: 3,
      name: "North American Origin Ales",
      createDate: "2012-03-21 20:06:45"
        },
      name: "American-Style Pale Ale",
      shortName: "American Pale",
      description: "American pale ales range from deep golden to copper in color. The style is characterized by fruity, floral and citrus-like American-variety hop character producing medium to medium-high hop bitterness, flavor, and aroma. Note that the \"traditional\" style of this beer has its origins with certain floral, fruity, citrus-like, piney, resinous, or sulfur-like American hop varietals. One or more of these hop characters is the perceived end, but the perceived hop characters may be a result of the skillful use of hops of other national origins. American pale ales have medium body and low to medium maltiness. Low caramel character is allowable. Fruity-ester flavor and aroma should be moderate to strong. Diacetyl should be absent or present at very low levels. Chill haze is allowable at cold temperatures.",
      ibuMin: "30",
      ibuMax: "42",
      abvMin: "4.5",
      abvMax: "5.6",
      srmMin: "6",
      srmMax: "14",
      ogMin: "1.044",
      fgMin: "1.008",
      fgMax: "1.014",
      createDate: "2012-03-21 20:06:45",
      updateDate: "2015-04-07 15:25:18"
        }
        },
        {
      id: "yn4ODI",
      name: "Ale Communication",
      nameDisplay: "Ale Communication",
      description: "American Double IPA",
      abv: "7.8",
      styleId: 33,
      isOrganic: "N",
      isRetired: "N",
      status: "verified",
      statusDisplay: "Verified",
      createDate: "2012-10-10 23:41:24",
      updateDate: "2018-11-02 02:15:14",
      style: {
      id: 33,
      categoryId: 3,
      category: {
      id: 3,
      name: "North American Origin Ales",
      createDate: "2012-03-21 20:06:45"
        },
      name: "Imperial Red Ale",
      shortName: "Imperial Red",
      description: "Imperial Red Ales are deep amber to dark copper/reddish brown. A small amount of chill haze is allowable at cold temperatures. Fruity-ester aroma is medium. Hop aroma is intense, arising from any variety of hops. Medium to high caramel malt character is present. Hop flavor is intense, and balanced with other beer characters. They may use any variety of hops. Hop bitterness is intense. Alcohol content is very high and of notable character. Complex alcohol flavors may be evident. Fruity-ester flavors are medium. Diacetyl should not be perceived. Body is full.",
      ibuMin: "55",
      ibuMax: "85",
      abvMin: "7.9",
      abvMax: "10.5",
      srmMin: "10",
      srmMax: "15",
      ogMin: "1.08",
      fgMin: "1.02",
      fgMax: "1.028",
      createDate: "2012-03-21 20:06:46",
      updateDate: "2015-04-07 17:05:43"
        }
        },
        {
      id: "2cLm8B",
      name: "All Colorado Apricot Wheat",
      nameDisplay: "All Colorado Apricot Wheat",
      abv: "5.5",
      styleId: 114,
      isOrganic: "N",
      isRetired: "N",
      labels: {
      icon: "https://brewerydb-images.s3.amazonaws.com/beer/2cLm8B/upload_r59XGe-icon.png",
      medium: "https://brewerydb-images.s3.amazonaws.com/beer/2cLm8B/upload_r59XGe-medium.png",
      large: "https://brewerydb-images.s3.amazonaws.com/beer/2cLm8B/upload_r59XGe-large.png",
      contentAwareIcon: "https://brewerydb-images.s3.amazonaws.com/beer/2cLm8B/upload_r59XGe-contentAwareIcon.png",
      contentAwareMedium: "https://brewerydb-images.s3.amazonaws.com/beer/2cLm8B/upload_r59XGe-contentAwareMedium.png",
      contentAwareLarge: "https://brewerydb-images.s3.amazonaws.com/beer/2cLm8B/upload_r59XGe-contentAwareLarge.png"
        },
      status: "verified",
      statusDisplay: "Verified",
      createDate: "2017-12-14 15:18:59",
      updateDate: "2018-11-02 02:15:14",
      style: {
      id: 114,
      categoryId: 11,
      category: {
      id: 11,
      name: "Hybrid/mixed Beer",
      createDate: "2012-03-21 20:06:46"
        },
      name: "Fruit Wheat Ale or Lager with or without Yeast",
      shortName: "Fruit Wheat Ale",
      description: "This beer can be made using either ale or lager yeast. It can be brewed with 30 to 75 percent malted wheat. Fruit or fruit extracts contribute flavor and/or aroma. Perceived fruit qualities should be authentic and replicate true fruit complexity as much as possible. Color should reflect a degree of fruit's color. Hop rates may be low to medium. Hop characters may be light to moderate in bitterness, flavor and aroma. Fruity-estery aroma and flavor from yeast can be typical but at low levels; however, phenolic, clovelike characteristics should not be perceived. Body should be light to medium in character. Diacetyl should not be perceived. When this style is served with yeast the character should portray a full yeasty mouthfeel and appear hazy to very cloudy. Chill haze is also acceptable. Yeast flavor and aroma should be low to medium but not overpowering the balance and character of malt and hops. Brewer may indicate on the bottle whether the yeast should be intentionally roused or if they prefer that the entry be poured as quietly as possible.",
      ibuMin: "10",
      ibuMax: "35",
      abvMin: "3.8",
      abvMax: "5",
      srmMin: "2",
      srmMax: "10",
      ogMin: "1.036",
      fgMin: "1.004",
      fgMax: "1.016",
      createDate: "2012-03-21 20:06:46",
      updateDate: "2015-04-07 15:43:55"
        }
        },
        {
      id: "DbeLZF",
      name: "All Colorado Wet Hop Pale Ale",
      nameDisplay: "All Colorado Wet Hop Pale Ale",
      abv: "5.8",
      styleId: 25,
      isOrganic: "N",
      isRetired: "N",
      labels: {
      icon: "https://brewerydb-images.s3.amazonaws.com/beer/DbeLZF/upload_BuoLMV-icon.png",
      medium: "https://brewerydb-images.s3.amazonaws.com/beer/DbeLZF/upload_BuoLMV-medium.png",
      large: "https://brewerydb-images.s3.amazonaws.com/beer/DbeLZF/upload_BuoLMV-large.png",
      contentAwareIcon: "https://brewerydb-images.s3.amazonaws.com/beer/DbeLZF/upload_BuoLMV-contentAwareIcon.png",
      contentAwareMedium: "https://brewerydb-images.s3.amazonaws.com/beer/DbeLZF/upload_BuoLMV-contentAwareMedium.png",
      contentAwareLarge: "https://brewerydb-images.s3.amazonaws.com/beer/DbeLZF/upload_BuoLMV-contentAwareLarge.png"
        },
      status: "verified",
      statusDisplay: "Verified",
      createDate: "2017-12-20 13:54:10",
      updateDate: "2018-11-02 02:15:14",
      style: {
      id: 25,
      categoryId: 3,
      category: {
      id: 3,
      name: "North American Origin Ales",
      createDate: "2012-03-21 20:06:45"
        },
      name: "American-Style Pale Ale",
      shortName: "American Pale",
      description: "American pale ales range from deep golden to copper in color. The style is characterized by fruity, floral and citrus-like American-variety hop character producing medium to medium-high hop bitterness, flavor, and aroma. Note that the \"traditional\" style of this beer has its origins with certain floral, fruity, citrus-like, piney, resinous, or sulfur-like American hop varietals. One or more of these hop characters is the perceived end, but the perceived hop characters may be a result of the skillful use of hops of other national origins. American pale ales have medium body and low to medium maltiness. Low caramel character is allowable. Fruity-ester flavor and aroma should be moderate to strong. Diacetyl should be absent or present at very low levels. Chill haze is allowable at cold temperatures.",
      ibuMin: "30",
      ibuMax: "42",
      abvMin: "4.5",
      abvMax: "5.6",
      srmMin: "6",
      srmMax: "14",
      ogMin: "1.044",
      fgMin: "1.008",
      fgMax: "1.014",
      createDate: "2012-03-21 20:06:45",
      updateDate: "2015-04-07 15:25:18"
        }
        },
        {
      id: "aG4Ie2",
      name: "Alpha Dog Imperial IPA",
      nameDisplay: "Alpha Dog Imperial IPA",
      description: "A True Hop Bomb Brewed plenty of Columbus and Mt Hood Hops for a Piney hop character. Premium Pale, Honey and Munich Malt make this beer a little less malty but packing plenty of hop punch.",
      abv: "8.5",
      ibu: "127",
      srmId: 6,
      availableId: 1,
      styleId: 31,
      isOrganic: "N",
      isRetired: "N",
      labels: {
      icon: "https://brewerydb-images.s3.amazonaws.com/beer/aG4Ie2/upload_yX4wkY-icon.png",
      medium: "https://brewerydb-images.s3.amazonaws.com/beer/aG4Ie2/upload_yX4wkY-medium.png",
      large: "https://brewerydb-images.s3.amazonaws.com/beer/aG4Ie2/upload_yX4wkY-large.png",
      contentAwareIcon: "https://brewerydb-images.s3.amazonaws.com/beer/aG4Ie2/upload_yX4wkY-contentAwareIcon.png",
      contentAwareMedium: "https://brewerydb-images.s3.amazonaws.com/beer/aG4Ie2/upload_yX4wkY-contentAwareMedium.png",
      contentAwareLarge: "https://brewerydb-images.s3.amazonaws.com/beer/aG4Ie2/upload_yX4wkY-contentAwareLarge.png"
        },
      status: "verified",
      statusDisplay: "Verified",
      createDate: "2013-05-02 18:24:18",
      updateDate: "2018-11-02 02:15:14",
      srm: {
      id: 6,
      name: "6",
      hex: "F8A600"
        },
      available: {
      id: 1,
      name: "Year Round",
      description: "Available year round as a staple beer."
        },
      style: {
      id: 31,
      categoryId: 3,
      category: {
      id: 3,
      name: "North American Origin Ales",
      createDate: "2012-03-21 20:06:45"
        },
      name: "Imperial or Double India Pale Ale",
      shortName: "Imperial IPA",
      description: "Imperial or Double India Pale Ales have intense hop bitterness, flavor and aroma. Alcohol content is medium-high to high and notably evident. They range from deep golden to medium copper in color. The style may use any variety of hops. Though the hop character is intense it's balanced with complex alcohol flavors, moderate to high fruity esters and medium to high malt character. Hop character should be fresh and lively and should not be harsh in quality. The use of large amounts of hops may cause a degree of appropriate hop haze. Imperial or Double India Pale Ales have medium-high to full body. Diacetyl should not be perceived. The intention of this style of beer is to exhibit the fresh and bright character of hops. Oxidative character and aged character should not be present.",
      ibuMin: "65",
      ibuMax: "100",
      abvMin: "7.5",
      abvMax: "10.5",
      srmMin: "5",
      srmMax: "13",
      ogMin: "1.075",
      fgMin: "1.012",
      fgMax: "1.02",
      createDate: "2012-03-21 20:06:45",
      updateDate: "2015-04-07 15:26:46"
        }
        }
    ]



return (
    
    <div className="/Beers/">
   {beers.map((beer) => {
     
     const {name,id,description,} = beer;
            return (
              
      <Link to={`/Beer/${id}`}key={id}>
       <section className="card-section"> 
      <Card style={{ width: '18rem' }} className="card">
      <Card.Img variant="top" src="https://res.cloudinary.com/ds7w3ysag/image/upload/c_scale,h_300,w_300/v1611009102/matt-palmer-lGzhgzkN6UI-unsplash_h2tzto.jpg" />
      <Card.Body>
       
      <Card.Title>{name}</Card.Title>
      <Card.Text>
          {description}
         
          </Card.Text>
       
     </Card.Body>
     </Card>
     </section>
     </Link>
          );
 })}
 </div>
)
} 
export default Beers