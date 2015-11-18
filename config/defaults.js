/*global define,location */
/*jslint sloppy:true */
/*
 | Copyright 2014 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
/*
defaults <- 
common config <- 
organization <- 
application id config <- 
custom url params <- 
standard url params
这里的默认配置优先级别最低
 */
define({
    //Default configuration settings for the application. This is where you'll define things like a bing maps key,
    //default web map, default app color theme and more. These values can be overwritten by template configuration settings and url parameters.
    "appid": "",
    "webmap": "dc811e31813c48aea1f7cdda095052ae",
    //"webmap": "1370ac639017468b9d782ddb8f5616f7", //yngc
    //"webmap": "013c11157c6d4a8fb21b95cee78d6d8c",  //leikh
    "oauthappid": null, //"AFTKRmv16wj14N3z",
    //Group templates must support a group url parameter. This will contain the id of the group.
    "group": "",
    //Enter the url to the proxy if needed by the application. See the 'Using the proxy page' help topic for details
    //http://developers.arcgis.com/en/javascript/jshelp/ags_proxy.html
    "proxyurl": "",
    //Example of a template specific property. If your template had several color schemes
    //you could define the default here and setup configuration settings to allow users to choose a different
    //color theme.
    "theme": "blue",
    "bingKey": "", //Enter the url to your organizations bing maps key if you want to use bing basemaps
    //Defaults to arcgis.com. Set this value to your portal or organization host name.
    //"sharinghost": location.protocol + "//" + "www.arcgis.com",
    /*
    如果部署后的url有 ‘/apps/’或者‘/home/’ ，则直接就用webserver的host了
    */
    "sharinghost": location.protocol + "//" + "www.arcgis.com", //yngc
    //"sharinghost": location.protocol + "//" + "esri-leikh.esricd.com/arcgis/",  //leikh
    "units": null,
    //If your applcation needs to edit feature layer fields set this value to true. When false the map will
    //be dreated with layers that are not set to editable which allows the FeatureLayer to load features optimally. 
    "editable": false,
    "helperServices": {
        "geometry": {
            //"url": "http://utility.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer"
            "url": null
        },
        "printTask": {
            //"url": "https://utility.arcgisonline.com/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task"
            "url": null
        },
        "elevationSync": {
            "url": null
        },
        "route": {
            //"url": "http://sampleserver3.arcgisonline.com/ArcGIS/rest/services/Network/USA/NAServer/Route"
            "url": null
        },
        "geocode": [{
            "url": null
        }]
    }
});