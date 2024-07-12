/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 265.0, "minX": 0.0, "maxY": 28626.0, "series": [{"data": [[0.0, 265.0], [0.1, 271.0], [0.2, 272.0], [0.3, 272.0], [0.4, 273.0], [0.5, 273.0], [0.6, 274.0], [0.7, 274.0], [0.8, 275.0], [0.9, 275.0], [1.0, 275.0], [1.1, 275.0], [1.2, 275.0], [1.3, 276.0], [1.4, 276.0], [1.5, 276.0], [1.6, 276.0], [1.7, 276.0], [1.8, 276.0], [1.9, 277.0], [2.0, 277.0], [2.1, 277.0], [2.2, 277.0], [2.3, 277.0], [2.4, 277.0], [2.5, 277.0], [2.6, 277.0], [2.7, 278.0], [2.8, 278.0], [2.9, 278.0], [3.0, 278.0], [3.1, 278.0], [3.2, 278.0], [3.3, 278.0], [3.4, 278.0], [3.5, 278.0], [3.6, 278.0], [3.7, 279.0], [3.8, 279.0], [3.9, 279.0], [4.0, 279.0], [4.1, 279.0], [4.2, 279.0], [4.3, 279.0], [4.4, 279.0], [4.5, 279.0], [4.6, 279.0], [4.7, 279.0], [4.8, 280.0], [4.9, 280.0], [5.0, 280.0], [5.1, 280.0], [5.2, 280.0], [5.3, 280.0], [5.4, 280.0], [5.5, 280.0], [5.6, 280.0], [5.7, 280.0], [5.8, 280.0], [5.9, 280.0], [6.0, 280.0], [6.1, 281.0], [6.2, 281.0], [6.3, 281.0], [6.4, 281.0], [6.5, 281.0], [6.6, 281.0], [6.7, 281.0], [6.8, 281.0], [6.9, 281.0], [7.0, 281.0], [7.1, 281.0], [7.2, 281.0], [7.3, 281.0], [7.4, 281.0], [7.5, 282.0], [7.6, 282.0], [7.7, 282.0], [7.8, 282.0], [7.9, 282.0], [8.0, 282.0], [8.1, 282.0], [8.2, 282.0], [8.3, 282.0], [8.4, 282.0], [8.5, 282.0], [8.6, 282.0], [8.7, 282.0], [8.8, 282.0], [8.9, 282.0], [9.0, 282.0], [9.1, 282.0], [9.2, 282.0], [9.3, 282.0], [9.4, 283.0], [9.5, 283.0], [9.6, 283.0], [9.7, 283.0], [9.8, 283.0], [9.9, 283.0], [10.0, 283.0], [10.1, 283.0], [10.2, 283.0], [10.3, 283.0], [10.4, 283.0], [10.5, 283.0], [10.6, 283.0], [10.7, 283.0], [10.8, 283.0], [10.9, 283.0], [11.0, 283.0], [11.1, 283.0], [11.2, 284.0], [11.3, 284.0], [11.4, 284.0], [11.5, 284.0], [11.6, 284.0], [11.7, 284.0], [11.8, 284.0], [11.9, 284.0], [12.0, 284.0], [12.1, 284.0], [12.2, 284.0], [12.3, 284.0], [12.4, 284.0], [12.5, 284.0], [12.6, 284.0], [12.7, 284.0], [12.8, 284.0], [12.9, 284.0], [13.0, 284.0], [13.1, 284.0], [13.2, 284.0], [13.3, 284.0], [13.4, 285.0], [13.5, 285.0], [13.6, 285.0], [13.7, 285.0], [13.8, 285.0], [13.9, 285.0], [14.0, 285.0], [14.1, 285.0], [14.2, 285.0], [14.3, 285.0], [14.4, 285.0], [14.5, 285.0], [14.6, 285.0], [14.7, 285.0], [14.8, 285.0], [14.9, 285.0], [15.0, 285.0], [15.1, 285.0], [15.2, 285.0], [15.3, 285.0], [15.4, 285.0], [15.5, 285.0], [15.6, 285.0], [15.7, 286.0], [15.8, 286.0], [15.9, 286.0], [16.0, 286.0], [16.1, 286.0], [16.2, 286.0], [16.3, 286.0], [16.4, 286.0], [16.5, 286.0], [16.6, 286.0], [16.7, 286.0], [16.8, 286.0], [16.9, 286.0], [17.0, 286.0], [17.1, 286.0], [17.2, 286.0], [17.3, 286.0], [17.4, 286.0], [17.5, 286.0], [17.6, 286.0], [17.7, 286.0], [17.8, 286.0], [17.9, 287.0], [18.0, 287.0], [18.1, 287.0], [18.2, 287.0], [18.3, 287.0], [18.4, 287.0], [18.5, 287.0], [18.6, 287.0], [18.7, 287.0], [18.8, 287.0], [18.9, 287.0], [19.0, 287.0], [19.1, 287.0], [19.2, 287.0], [19.3, 287.0], [19.4, 287.0], [19.5, 287.0], [19.6, 287.0], [19.7, 287.0], [19.8, 287.0], [19.9, 287.0], [20.0, 287.0], [20.1, 287.0], [20.2, 287.0], [20.3, 287.0], [20.4, 288.0], [20.5, 288.0], [20.6, 288.0], [20.7, 288.0], [20.8, 288.0], [20.9, 288.0], [21.0, 288.0], [21.1, 288.0], [21.2, 288.0], [21.3, 288.0], [21.4, 288.0], [21.5, 288.0], [21.6, 288.0], [21.7, 288.0], [21.8, 288.0], [21.9, 288.0], [22.0, 288.0], [22.1, 288.0], [22.2, 288.0], [22.3, 288.0], [22.4, 288.0], [22.5, 288.0], [22.6, 288.0], [22.7, 288.0], [22.8, 288.0], [22.9, 288.0], [23.0, 288.0], [23.1, 288.0], [23.2, 289.0], [23.3, 289.0], [23.4, 289.0], [23.5, 289.0], [23.6, 289.0], [23.7, 289.0], [23.8, 289.0], [23.9, 289.0], [24.0, 289.0], [24.1, 289.0], [24.2, 289.0], [24.3, 289.0], [24.4, 289.0], [24.5, 289.0], [24.6, 289.0], [24.7, 289.0], [24.8, 289.0], [24.9, 289.0], [25.0, 289.0], [25.1, 289.0], [25.2, 289.0], [25.3, 289.0], [25.4, 289.0], [25.5, 289.0], [25.6, 289.0], [25.7, 290.0], [25.8, 290.0], [25.9, 290.0], [26.0, 290.0], [26.1, 290.0], [26.2, 290.0], [26.3, 290.0], [26.4, 290.0], [26.5, 290.0], [26.6, 290.0], [26.7, 290.0], [26.8, 290.0], [26.9, 290.0], [27.0, 290.0], [27.1, 290.0], [27.2, 290.0], [27.3, 290.0], [27.4, 290.0], [27.5, 290.0], [27.6, 290.0], [27.7, 290.0], [27.8, 290.0], [27.9, 290.0], [28.0, 290.0], [28.1, 290.0], [28.2, 290.0], [28.3, 291.0], [28.4, 291.0], [28.5, 291.0], [28.6, 291.0], [28.7, 291.0], [28.8, 291.0], [28.9, 291.0], [29.0, 291.0], [29.1, 291.0], [29.2, 291.0], [29.3, 291.0], [29.4, 291.0], [29.5, 291.0], [29.6, 291.0], [29.7, 291.0], [29.8, 291.0], [29.9, 291.0], [30.0, 291.0], [30.1, 291.0], [30.2, 291.0], [30.3, 291.0], [30.4, 291.0], [30.5, 291.0], [30.6, 291.0], [30.7, 291.0], [30.8, 291.0], [30.9, 291.0], [31.0, 292.0], [31.1, 292.0], [31.2, 292.0], [31.3, 292.0], [31.4, 292.0], [31.5, 292.0], [31.6, 292.0], [31.7, 292.0], [31.8, 292.0], [31.9, 292.0], [32.0, 292.0], [32.1, 292.0], [32.2, 292.0], [32.3, 292.0], [32.4, 292.0], [32.5, 292.0], [32.6, 292.0], [32.7, 292.0], [32.8, 292.0], [32.9, 292.0], [33.0, 292.0], [33.1, 292.0], [33.2, 292.0], [33.3, 292.0], [33.4, 292.0], [33.5, 292.0], [33.6, 292.0], [33.7, 292.0], [33.8, 293.0], [33.9, 293.0], [34.0, 293.0], [34.1, 293.0], [34.2, 293.0], [34.3, 293.0], [34.4, 293.0], [34.5, 293.0], [34.6, 293.0], [34.7, 293.0], [34.8, 293.0], [34.9, 293.0], [35.0, 293.0], [35.1, 293.0], [35.2, 293.0], [35.3, 293.0], [35.4, 293.0], [35.5, 293.0], [35.6, 293.0], [35.7, 293.0], [35.8, 293.0], [35.9, 293.0], [36.0, 293.0], [36.1, 293.0], [36.2, 294.0], [36.3, 294.0], [36.4, 294.0], [36.5, 294.0], [36.6, 294.0], [36.7, 294.0], [36.8, 294.0], [36.9, 294.0], [37.0, 294.0], [37.1, 294.0], [37.2, 294.0], [37.3, 294.0], [37.4, 294.0], [37.5, 294.0], [37.6, 294.0], [37.7, 294.0], [37.8, 294.0], [37.9, 294.0], [38.0, 294.0], [38.1, 294.0], [38.2, 294.0], [38.3, 294.0], [38.4, 294.0], [38.5, 294.0], [38.6, 294.0], [38.7, 294.0], [38.8, 295.0], [38.9, 295.0], [39.0, 295.0], [39.1, 295.0], [39.2, 295.0], [39.3, 295.0], [39.4, 295.0], [39.5, 295.0], [39.6, 295.0], [39.7, 295.0], [39.8, 295.0], [39.9, 295.0], [40.0, 295.0], [40.1, 295.0], [40.2, 295.0], [40.3, 295.0], [40.4, 295.0], [40.5, 295.0], [40.6, 295.0], [40.7, 295.0], [40.8, 295.0], [40.9, 295.0], [41.0, 295.0], [41.1, 295.0], [41.2, 296.0], [41.3, 296.0], [41.4, 296.0], [41.5, 296.0], [41.6, 296.0], [41.7, 296.0], [41.8, 296.0], [41.9, 296.0], [42.0, 296.0], [42.1, 296.0], [42.2, 296.0], [42.3, 296.0], [42.4, 296.0], [42.5, 296.0], [42.6, 296.0], [42.7, 296.0], [42.8, 296.0], [42.9, 296.0], [43.0, 296.0], [43.1, 296.0], [43.2, 296.0], [43.3, 296.0], [43.4, 296.0], [43.5, 296.0], [43.6, 296.0], [43.7, 297.0], [43.8, 297.0], [43.9, 297.0], [44.0, 297.0], [44.1, 297.0], [44.2, 297.0], [44.3, 297.0], [44.4, 297.0], [44.5, 297.0], [44.6, 297.0], [44.7, 297.0], [44.8, 297.0], [44.9, 297.0], [45.0, 297.0], [45.1, 297.0], [45.2, 297.0], [45.3, 297.0], [45.4, 297.0], [45.5, 297.0], [45.6, 297.0], [45.7, 297.0], [45.8, 297.0], [45.9, 298.0], [46.0, 298.0], [46.1, 298.0], [46.2, 298.0], [46.3, 298.0], [46.4, 298.0], [46.5, 298.0], [46.6, 298.0], [46.7, 298.0], [46.8, 298.0], [46.9, 298.0], [47.0, 298.0], [47.1, 298.0], [47.2, 298.0], [47.3, 298.0], [47.4, 298.0], [47.5, 298.0], [47.6, 298.0], [47.7, 298.0], [47.8, 298.0], [47.9, 298.0], [48.0, 299.0], [48.1, 299.0], [48.2, 299.0], [48.3, 299.0], [48.4, 299.0], [48.5, 299.0], [48.6, 299.0], [48.7, 299.0], [48.8, 299.0], [48.9, 299.0], [49.0, 299.0], [49.1, 299.0], [49.2, 299.0], [49.3, 299.0], [49.4, 299.0], [49.5, 299.0], [49.6, 299.0], [49.7, 299.0], [49.8, 299.0], [49.9, 299.0], [50.0, 300.0], [50.1, 300.0], [50.2, 300.0], [50.3, 300.0], [50.4, 300.0], [50.5, 300.0], [50.6, 300.0], [50.7, 300.0], [50.8, 300.0], [50.9, 300.0], [51.0, 300.0], [51.1, 300.0], [51.2, 300.0], [51.3, 300.0], [51.4, 300.0], [51.5, 300.0], [51.6, 300.0], [51.7, 300.0], [51.8, 300.0], [51.9, 300.0], [52.0, 301.0], [52.1, 301.0], [52.2, 301.0], [52.3, 301.0], [52.4, 301.0], [52.5, 301.0], [52.6, 301.0], [52.7, 301.0], [52.8, 301.0], [52.9, 301.0], [53.0, 301.0], [53.1, 301.0], [53.2, 301.0], [53.3, 301.0], [53.4, 301.0], [53.5, 301.0], [53.6, 301.0], [53.7, 302.0], [53.8, 302.0], [53.9, 302.0], [54.0, 302.0], [54.1, 302.0], [54.2, 302.0], [54.3, 302.0], [54.4, 302.0], [54.5, 302.0], [54.6, 302.0], [54.7, 302.0], [54.8, 302.0], [54.9, 302.0], [55.0, 302.0], [55.1, 302.0], [55.2, 302.0], [55.3, 302.0], [55.4, 303.0], [55.5, 303.0], [55.6, 303.0], [55.7, 303.0], [55.8, 303.0], [55.9, 303.0], [56.0, 303.0], [56.1, 303.0], [56.2, 303.0], [56.3, 303.0], [56.4, 303.0], [56.5, 303.0], [56.6, 303.0], [56.7, 303.0], [56.8, 304.0], [56.9, 304.0], [57.0, 304.0], [57.1, 304.0], [57.2, 304.0], [57.3, 304.0], [57.4, 304.0], [57.5, 304.0], [57.6, 304.0], [57.7, 304.0], [57.8, 304.0], [57.9, 304.0], [58.0, 304.0], [58.1, 304.0], [58.2, 304.0], [58.3, 304.0], [58.4, 304.0], [58.5, 304.0], [58.6, 304.0], [58.7, 305.0], [58.8, 305.0], [58.9, 305.0], [59.0, 305.0], [59.1, 305.0], [59.2, 305.0], [59.3, 305.0], [59.4, 305.0], [59.5, 305.0], [59.6, 305.0], [59.7, 305.0], [59.8, 305.0], [59.9, 305.0], [60.0, 306.0], [60.1, 306.0], [60.2, 306.0], [60.3, 306.0], [60.4, 306.0], [60.5, 306.0], [60.6, 306.0], [60.7, 306.0], [60.8, 306.0], [60.9, 306.0], [61.0, 306.0], [61.1, 306.0], [61.2, 306.0], [61.3, 306.0], [61.4, 306.0], [61.5, 306.0], [61.6, 307.0], [61.7, 307.0], [61.8, 307.0], [61.9, 307.0], [62.0, 307.0], [62.1, 307.0], [62.2, 307.0], [62.3, 307.0], [62.4, 307.0], [62.5, 307.0], [62.6, 307.0], [62.7, 307.0], [62.8, 307.0], [62.9, 307.0], [63.0, 307.0], [63.1, 307.0], [63.2, 307.0], [63.3, 308.0], [63.4, 308.0], [63.5, 308.0], [63.6, 308.0], [63.7, 308.0], [63.8, 308.0], [63.9, 308.0], [64.0, 308.0], [64.1, 308.0], [64.2, 308.0], [64.3, 308.0], [64.4, 309.0], [64.5, 309.0], [64.6, 309.0], [64.7, 309.0], [64.8, 309.0], [64.9, 309.0], [65.0, 309.0], [65.1, 309.0], [65.2, 309.0], [65.3, 309.0], [65.4, 309.0], [65.5, 309.0], [65.6, 310.0], [65.7, 310.0], [65.8, 310.0], [65.9, 310.0], [66.0, 310.0], [66.1, 310.0], [66.2, 310.0], [66.3, 310.0], [66.4, 310.0], [66.5, 310.0], [66.6, 310.0], [66.7, 311.0], [66.8, 311.0], [66.9, 311.0], [67.0, 311.0], [67.1, 311.0], [67.2, 311.0], [67.3, 311.0], [67.4, 312.0], [67.5, 312.0], [67.6, 312.0], [67.7, 312.0], [67.8, 312.0], [67.9, 312.0], [68.0, 312.0], [68.1, 312.0], [68.2, 312.0], [68.3, 313.0], [68.4, 313.0], [68.5, 313.0], [68.6, 313.0], [68.7, 313.0], [68.8, 313.0], [68.9, 313.0], [69.0, 313.0], [69.1, 313.0], [69.2, 314.0], [69.3, 314.0], [69.4, 314.0], [69.5, 314.0], [69.6, 314.0], [69.7, 314.0], [69.8, 314.0], [69.9, 315.0], [70.0, 315.0], [70.1, 315.0], [70.2, 315.0], [70.3, 315.0], [70.4, 315.0], [70.5, 315.0], [70.6, 315.0], [70.7, 316.0], [70.8, 316.0], [70.9, 316.0], [71.0, 316.0], [71.1, 316.0], [71.2, 316.0], [71.3, 316.0], [71.4, 317.0], [71.5, 317.0], [71.6, 317.0], [71.7, 317.0], [71.8, 317.0], [71.9, 317.0], [72.0, 317.0], [72.1, 318.0], [72.2, 318.0], [72.3, 318.0], [72.4, 318.0], [72.5, 318.0], [72.6, 318.0], [72.7, 319.0], [72.8, 319.0], [72.9, 319.0], [73.0, 319.0], [73.1, 319.0], [73.2, 319.0], [73.3, 320.0], [73.4, 320.0], [73.5, 320.0], [73.6, 320.0], [73.7, 321.0], [73.8, 321.0], [73.9, 321.0], [74.0, 321.0], [74.1, 321.0], [74.2, 322.0], [74.3, 322.0], [74.4, 322.0], [74.5, 323.0], [74.6, 323.0], [74.7, 323.0], [74.8, 323.0], [74.9, 323.0], [75.0, 324.0], [75.1, 324.0], [75.2, 324.0], [75.3, 325.0], [75.4, 325.0], [75.5, 325.0], [75.6, 326.0], [75.7, 326.0], [75.8, 326.0], [75.9, 327.0], [76.0, 327.0], [76.1, 327.0], [76.2, 327.0], [76.3, 328.0], [76.4, 328.0], [76.5, 328.0], [76.6, 329.0], [76.7, 329.0], [76.8, 329.0], [76.9, 329.0], [77.0, 330.0], [77.1, 330.0], [77.2, 330.0], [77.3, 330.0], [77.4, 331.0], [77.5, 331.0], [77.6, 332.0], [77.7, 332.0], [77.8, 332.0], [77.9, 333.0], [78.0, 333.0], [78.1, 333.0], [78.2, 334.0], [78.3, 334.0], [78.4, 334.0], [78.5, 335.0], [78.6, 335.0], [78.7, 335.0], [78.8, 336.0], [78.9, 336.0], [79.0, 337.0], [79.1, 337.0], [79.2, 337.0], [79.3, 338.0], [79.4, 338.0], [79.5, 339.0], [79.6, 339.0], [79.7, 340.0], [79.8, 340.0], [79.9, 340.0], [80.0, 341.0], [80.1, 341.0], [80.2, 342.0], [80.3, 342.0], [80.4, 344.0], [80.5, 344.0], [80.6, 344.0], [80.7, 345.0], [80.8, 345.0], [80.9, 346.0], [81.0, 347.0], [81.1, 348.0], [81.2, 349.0], [81.3, 349.0], [81.4, 350.0], [81.5, 351.0], [81.6, 351.0], [81.7, 352.0], [81.8, 352.0], [81.9, 353.0], [82.0, 354.0], [82.1, 355.0], [82.2, 356.0], [82.3, 357.0], [82.4, 357.0], [82.5, 358.0], [82.6, 359.0], [82.7, 360.0], [82.8, 360.0], [82.9, 362.0], [83.0, 364.0], [83.1, 364.0], [83.2, 365.0], [83.3, 365.0], [83.4, 367.0], [83.5, 368.0], [83.6, 370.0], [83.7, 371.0], [83.8, 374.0], [83.9, 375.0], [84.0, 377.0], [84.1, 379.0], [84.2, 382.0], [84.3, 383.0], [84.4, 385.0], [84.5, 387.0], [84.6, 388.0], [84.7, 390.0], [84.8, 391.0], [84.9, 393.0], [85.0, 394.0], [85.1, 397.0], [85.2, 398.0], [85.3, 400.0], [85.4, 401.0], [85.5, 402.0], [85.6, 404.0], [85.7, 405.0], [85.8, 407.0], [85.9, 410.0], [86.0, 412.0], [86.1, 416.0], [86.2, 417.0], [86.3, 419.0], [86.4, 421.0], [86.5, 423.0], [86.6, 425.0], [86.7, 428.0], [86.8, 431.0], [86.9, 433.0], [87.0, 437.0], [87.1, 440.0], [87.2, 444.0], [87.3, 449.0], [87.4, 451.0], [87.5, 452.0], [87.6, 456.0], [87.7, 461.0], [87.8, 464.0], [87.9, 467.0], [88.0, 469.0], [88.1, 473.0], [88.2, 476.0], [88.3, 479.0], [88.4, 484.0], [88.5, 487.0], [88.6, 489.0], [88.7, 493.0], [88.8, 496.0], [88.9, 499.0], [89.0, 504.0], [89.1, 508.0], [89.2, 516.0], [89.3, 518.0], [89.4, 523.0], [89.5, 527.0], [89.6, 532.0], [89.7, 537.0], [89.8, 542.0], [89.9, 548.0], [90.0, 551.0], [90.1, 555.0], [90.2, 558.0], [90.3, 561.0], [90.4, 564.0], [90.5, 567.0], [90.6, 570.0], [90.7, 575.0], [90.8, 578.0], [90.9, 580.0], [91.0, 584.0], [91.1, 589.0], [91.2, 591.0], [91.3, 594.0], [91.4, 598.0], [91.5, 602.0], [91.6, 607.0], [91.7, 611.0], [91.8, 615.0], [91.9, 621.0], [92.0, 628.0], [92.1, 633.0], [92.2, 638.0], [92.3, 642.0], [92.4, 646.0], [92.5, 652.0], [92.6, 657.0], [92.7, 669.0], [92.8, 674.0], [92.9, 683.0], [93.0, 702.0], [93.1, 707.0], [93.2, 727.0], [93.3, 732.0], [93.4, 758.0], [93.5, 767.0], [93.6, 782.0], [93.7, 791.0], [93.8, 818.0], [93.9, 839.0], [94.0, 855.0], [94.1, 865.0], [94.2, 898.0], [94.3, 919.0], [94.4, 940.0], [94.5, 956.0], [94.6, 995.0], [94.7, 1001.0], [94.8, 1006.0], [94.9, 1018.0], [95.0, 1024.0], [95.1, 1037.0], [95.2, 1077.0], [95.3, 1100.0], [95.4, 1108.0], [95.5, 1112.0], [95.6, 1115.0], [95.7, 1118.0], [95.8, 1127.0], [95.9, 1135.0], [96.0, 1176.0], [96.1, 1200.0], [96.2, 1214.0], [96.3, 1238.0], [96.4, 1262.0], [96.5, 1298.0], [96.6, 1306.0], [96.7, 1316.0], [96.8, 1326.0], [96.9, 1337.0], [97.0, 1352.0], [97.1, 1375.0], [97.2, 1405.0], [97.3, 1428.0], [97.4, 1452.0], [97.5, 1482.0], [97.6, 1506.0], [97.7, 1518.0], [97.8, 1589.0], [97.9, 1635.0], [98.0, 1706.0], [98.1, 1743.0], [98.2, 1789.0], [98.3, 1844.0], [98.4, 1946.0], [98.5, 2038.0], [98.6, 2101.0], [98.7, 2260.0], [98.8, 2540.0], [98.9, 2960.0], [99.0, 3163.0], [99.1, 3317.0], [99.2, 3388.0], [99.3, 3588.0], [99.4, 3761.0], [99.5, 4189.0], [99.6, 4694.0], [99.7, 5331.0], [99.8, 6145.0], [99.9, 6807.0]], "isOverall": false, "label": "Demo_Capacity_Testing", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 2497.0, "series": [{"data": [[600.0, 76.0], [700.0, 37.0], [800.0, 26.0], [900.0, 23.0], [1000.0, 31.0], [1100.0, 40.0], [1200.0, 21.0], [1300.0, 34.0], [1400.0, 18.0], [1500.0, 14.0], [1600.0, 8.0], [1700.0, 12.0], [1800.0, 6.0], [1900.0, 7.0], [2000.0, 5.0], [2100.0, 3.0], [2200.0, 4.0], [2300.0, 1.0], [2400.0, 2.0], [2500.0, 2.0], [2800.0, 3.0], [2900.0, 1.0], [3000.0, 2.0], [3100.0, 4.0], [3200.0, 3.0], [3300.0, 6.0], [3400.0, 3.0], [3500.0, 2.0], [3600.0, 3.0], [3700.0, 4.0], [3900.0, 1.0], [4000.0, 1.0], [4300.0, 3.0], [4100.0, 1.0], [4400.0, 1.0], [4600.0, 1.0], [4900.0, 2.0], [5100.0, 1.0], [5300.0, 2.0], [5200.0, 1.0], [5600.0, 1.0], [5500.0, 1.0], [5800.0, 1.0], [6100.0, 1.0], [6400.0, 4.0], [6800.0, 1.0], [7100.0, 1.0], [7300.0, 1.0], [7500.0, 1.0], [28600.0, 1.0], [200.0, 2497.0], [300.0, 1766.0], [400.0, 182.0], [500.0, 127.0]], "isOverall": false, "label": "Demo_Capacity_Testing", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 28600.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4446.0, "series": [{"data": [[0.0, 4446.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 432.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 121.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.0898203592814375, "minX": 1.72077006E12, "maxY": 4.131736526946111, "series": [{"data": [[1.72077126E12, 1.1497005988023954], [1.72077156E12, 1.2228915662650601], [1.72077186E12, 1.16875], [1.72077024E12, 1.1445783132530116], [1.72077006E12, 2.857142857142857], [1.72077036E12, 1.233532934131736], [1.72077066E12, 1.0898203592814375], [1.72077096E12, 1.295180722891567], [1.72077078E12, 1.162650602409639], [1.72077108E12, 1.210843373493976], [1.72077138E12, 1.281437125748503], [1.72077168E12, 1.161676646706587], [1.7207715E12, 1.215568862275449], [1.7207718E12, 3.355029585798817], [1.72077018E12, 1.1856287425149707], [1.72077048E12, 1.198795180722891], [1.7207703E12, 1.514970059880241], [1.7207706E12, 1.3734939759036149], [1.7207709E12, 1.265060240963855], [1.7207712E12, 4.131736526946111], [1.72077102E12, 1.0952380952380956], [1.72077132E12, 1.2349397590361448], [1.72077162E12, 1.1197604790419162], [1.72077174E12, 2.2499999999999996], [1.72077012E12, 1.168674698795181], [1.72077042E12, 1.3592814371257487], [1.72077072E12, 1.1377245508982037], [1.72077054E12, 1.2994011976047906], [1.72077084E12, 1.1976047904191618], [1.72077114E12, 1.395209580838323], [1.72077144E12, 1.1736526946107786]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72077186E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 299.29442903957636, "minX": 1.0, "maxY": 7146.0, "series": [{"data": [[2.0, 543.0817236255576], [8.0, 1956.6666666666667], [9.0, 3042.4545454545455], [10.0, 3391.222222222222], [11.0, 3715.0], [3.0, 889.9370078740161], [12.0, 4024.0], [13.0, 4412.0], [14.0, 4859.333333333333], [15.0, 5259.0], [4.0, 1275.1521739130435], [1.0, 299.29442903957636], [16.0, 5601.5], [17.0, 5809.0], [18.0, 6359.666666666667], [19.0, 6476.0], [5.0, 1610.30612244898], [20.0, 6807.0], [21.0, 7146.0], [6.0, 1574.6944444444443], [7.0, 2012.090909090909]], "isOverall": false, "label": "Demo_Capacity_Testing", "isController": false}, {"data": [[1.4294000000000011, 425.19919999999996]], "isOverall": false, "label": "Demo_Capacity_Testing-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 21.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 13.3, "minX": 1.72077006E12, "maxY": 5397.383333333333, "series": [{"data": [[1.72077126E12, 5305.683333333333], [1.72077156E12, 5273.233333333334], [1.72077186E12, 5087.0], [1.72077024E12, 5279.566666666667], [1.72077006E12, 222.55], [1.72077036E12, 5311.883333333333], [1.72077066E12, 5304.883333333333], [1.72077096E12, 5277.05], [1.72077078E12, 5272.566666666667], [1.72077108E12, 5283.3], [1.72077138E12, 5306.0], [1.72077168E12, 5309.9], [1.7207715E12, 5308.483333333334], [1.7207718E12, 5397.383333333333], [1.72077018E12, 5314.683333333333], [1.72077048E12, 5275.8], [1.7207703E12, 5310.816666666667], [1.7207706E12, 5276.633333333333], [1.7207709E12, 5274.666666666667], [1.7207712E12, 5308.983333333334], [1.72077102E12, 5341.45], [1.72077132E12, 5277.366666666667], [1.72077162E12, 5306.233333333334], [1.72077174E12, 5216.433333333333], [1.72077012E12, 5276.516666666666], [1.72077042E12, 5311.183333333333], [1.72077072E12, 5309.933333333333], [1.72077054E12, 5310.05], [1.72077084E12, 5306.666666666667], [1.72077114E12, 5305.466666666666], [1.72077144E12, 5306.733333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.72077126E12, 317.3], [1.72077156E12, 315.4], [1.72077186E12, 304.0], [1.72077024E12, 315.4], [1.72077006E12, 13.3], [1.72077036E12, 317.3], [1.72077066E12, 317.3], [1.72077096E12, 315.4], [1.72077078E12, 315.4], [1.72077108E12, 315.4], [1.72077138E12, 317.3], [1.72077168E12, 317.3], [1.7207715E12, 317.3], [1.7207718E12, 319.2], [1.72077018E12, 317.3], [1.72077048E12, 315.4], [1.7207703E12, 317.3], [1.7207706E12, 315.4], [1.7207709E12, 315.4], [1.7207712E12, 317.3], [1.72077102E12, 319.2], [1.72077132E12, 315.4], [1.72077162E12, 317.3], [1.72077174E12, 311.6], [1.72077012E12, 315.4], [1.72077042E12, 317.3], [1.72077072E12, 317.3], [1.72077054E12, 317.3], [1.72077084E12, 317.3], [1.72077114E12, 317.3], [1.72077144E12, 317.3]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72077186E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 314.47619047619037, "minX": 1.72077006E12, "maxY": 1372.3712574850297, "series": [{"data": [[1.72077126E12, 327.2634730538923], [1.72077156E12, 352.0843373493975], [1.72077186E12, 340.03125000000006], [1.72077024E12, 333.6024096385544], [1.72077006E12, 835.4285714285714], [1.72077036E12, 355.14371257485055], [1.72077066E12, 318.12574850299404], [1.72077096E12, 377.78915662650616], [1.72077078E12, 337.16867469879503], [1.72077108E12, 344.6746987951809], [1.72077138E12, 368.16167664670667], [1.72077168E12, 333.84431137724545], [1.7207715E12, 339.8203592814371], [1.7207718E12, 1097.479289940828], [1.72077018E12, 343.5329341317365], [1.72077048E12, 353.03012048192784], [1.7207703E12, 439.9880239520959], [1.7207706E12, 410.4939759036147], [1.7207709E12, 361.09638554216843], [1.7207712E12, 1372.3712574850297], [1.72077102E12, 314.47619047619037], [1.72077132E12, 354.8132530120479], [1.72077162E12, 320.37724550898196], [1.72077174E12, 691.9390243902438], [1.72077012E12, 340.39156626506025], [1.72077042E12, 400.4491017964072], [1.72077072E12, 324.7365269461078], [1.72077054E12, 376.1197604790419], [1.72077084E12, 349.5149700598803], [1.72077114E12, 413.26946107784454], [1.72077144E12, 336.7125748502996]], "isOverall": false, "label": "Demo_Capacity_Testing", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72077186E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 314.16071428571416, "minX": 1.72077006E12, "maxY": 1371.868263473054, "series": [{"data": [[1.72077126E12, 327.00598802395217], [1.72077156E12, 351.72289156626505], [1.72077186E12, 339.68749999999994], [1.72077024E12, 333.3072289156626], [1.72077006E12, 832.4285714285714], [1.72077036E12, 354.7065868263474], [1.72077066E12, 317.8323353293415], [1.72077096E12, 377.27108433734946], [1.72077078E12, 336.9277108433736], [1.72077108E12, 344.2891566265059], [1.72077138E12, 367.76047904191614], [1.72077168E12, 333.5628742514969], [1.7207715E12, 339.4730538922156], [1.7207718E12, 921.656804733728], [1.72077018E12, 343.25149700598797], [1.72077048E12, 352.7710843373495], [1.7207703E12, 439.64071856287427], [1.7207706E12, 410.13253012048204], [1.7207709E12, 360.89156626506025], [1.7207712E12, 1371.868263473054], [1.72077102E12, 314.16071428571416], [1.72077132E12, 354.71084337349413], [1.72077162E12, 319.89221556886196], [1.72077174E12, 690.2256097560975], [1.72077012E12, 339.8855421686749], [1.72077042E12, 400.1976047904192], [1.72077072E12, 324.35928143712573], [1.72077054E12, 375.8263473053894], [1.72077084E12, 349.2874251497008], [1.72077114E12, 412.9640718562876], [1.72077144E12, 336.40718562874235]], "isOverall": false, "label": "Demo_Capacity_Testing", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72077186E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 15.658682634730535, "minX": 1.72077006E12, "maxY": 652.2544378698226, "series": [{"data": [[1.72077126E12, 17.053892215568858], [1.72077156E12, 17.06626506024096], [1.72077186E12, 17.425000000000004], [1.72077024E12, 15.74698795180723], [1.72077006E12, 421.2857142857142], [1.72077036E12, 22.65269461077846], [1.72077066E12, 16.5688622754491], [1.72077096E12, 16.67469879518072], [1.72077078E12, 22.656626506024093], [1.72077108E12, 22.626506024096386], [1.72077138E12, 18.718562874251493], [1.72077168E12, 17.209580838323348], [1.7207715E12, 17.155688622754486], [1.7207718E12, 652.2544378698226], [1.72077018E12, 15.838323353293406], [1.72077048E12, 22.9277108433735], [1.7207703E12, 15.778443113772452], [1.7207706E12, 16.469879518072286], [1.7207709E12, 16.277108433734934], [1.7207712E12, 16.940119760479053], [1.72077102E12, 17.226190476190464], [1.72077132E12, 17.385542168674693], [1.72077162E12, 23.67065868263473], [1.72077174E12, 306.030487804878], [1.72077012E12, 16.325301204819272], [1.72077042E12, 15.658682634730535], [1.72077072E12, 16.50898203592814], [1.72077054E12, 22.04191616766468], [1.72077084E12, 22.443113772455085], [1.72077114E12, 28.70059880239522], [1.72077144E12, 17.57485029940121]], "isOverall": false, "label": "Demo_Capacity_Testing", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72077186E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 265.0, "minX": 1.72077006E12, "maxY": 7521.0, "series": [{"data": [[1.72077126E12, 1022.0], [1.72077156E12, 1116.0], [1.72077186E12, 1368.0], [1.72077024E12, 1157.0], [1.72077006E12, 1448.0], [1.72077036E12, 1508.0], [1.72077066E12, 1025.0], [1.72077096E12, 2300.0], [1.72077078E12, 1300.0], [1.72077108E12, 1262.0], [1.72077138E12, 1431.0], [1.72077168E12, 996.0], [1.7207715E12, 1108.0], [1.7207718E12, 7521.0], [1.72077018E12, 1295.0], [1.72077048E12, 1927.0], [1.7207703E12, 2260.0], [1.7207706E12, 2079.0], [1.7207709E12, 1422.0], [1.7207712E12, 7146.0], [1.72077102E12, 1211.0], [1.72077132E12, 1220.0], [1.72077162E12, 1384.0], [1.72077174E12, 5331.0], [1.72077012E12, 1352.0], [1.72077042E12, 2038.0], [1.72077072E12, 1389.0], [1.72077054E12, 2225.0], [1.72077084E12, 1303.0], [1.72077114E12, 2482.0], [1.72077144E12, 1189.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.72077126E12, 277.0], [1.72077156E12, 271.0], [1.72077186E12, 270.0], [1.72077024E12, 273.0], [1.72077006E12, 319.0], [1.72077036E12, 274.0], [1.72077066E12, 272.0], [1.72077096E12, 272.0], [1.72077078E12, 277.0], [1.72077108E12, 275.0], [1.72077138E12, 269.0], [1.72077168E12, 273.0], [1.7207715E12, 274.0], [1.7207718E12, 265.0], [1.72077018E12, 275.0], [1.72077048E12, 272.0], [1.7207703E12, 277.0], [1.7207706E12, 274.0], [1.7207709E12, 277.0], [1.7207712E12, 274.0], [1.72077102E12, 275.0], [1.72077132E12, 275.0], [1.72077162E12, 269.0], [1.72077174E12, 271.0], [1.72077012E12, 272.0], [1.72077042E12, 273.0], [1.72077072E12, 273.0], [1.72077054E12, 276.0], [1.72077084E12, 278.0], [1.72077114E12, 273.0], [1.72077144E12, 272.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.72077126E12, 378.2000000000001], [1.72077156E12, 487.60000000000014], [1.72077186E12, 417.70000000000005], [1.72077024E12, 397.0], [1.72077006E12, 1448.0], [1.72077036E12, 464.20000000000005], [1.72077066E12, 334.0], [1.72077096E12, 485.70000000000033], [1.72077078E12, 365.1000000000002], [1.72077108E12, 433.90000000000026], [1.72077138E12, 583.2], [1.72077168E12, 425.2000000000003], [1.7207715E12, 428.0], [1.7207718E12, 1798.7999999999997], [1.72077018E12, 437.20000000000005], [1.72077048E12, 352.90000000000003], [1.7207703E12, 864.4000000000008], [1.7207706E12, 603.8000000000001], [1.7207709E12, 499.80000000000007], [1.7207712E12, 4411.800000000002], [1.72077102E12, 340.5], [1.72077132E12, 519.3000000000002], [1.72077162E12, 365.40000000000003], [1.72077174E12, 1622.0], [1.72077012E12, 401.4000000000001], [1.72077042E12, 684.4000000000004], [1.72077072E12, 377.6000000000003], [1.72077054E12, 552.2], [1.72077084E12, 460.6], [1.72077114E12, 646.4000000000005], [1.72077144E12, 397.40000000000003]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.72077126E12, 1015.8799999999999], [1.72077156E12, 1080.4900000000007], [1.72077186E12, 1165.4799999999955], [1.72077024E12, 1128.8600000000006], [1.72077006E12, 1448.0], [1.72077036E12, 1323.7199999999982], [1.72077066E12, 970.5999999999995], [1.72077096E12, 2081.580000000004], [1.72077078E12, 1230.3200000000013], [1.72077108E12, 1167.5300000000018], [1.72077138E12, 1299.7599999999986], [1.72077168E12, 942.9599999999995], [1.7207715E12, 1103.24], [1.7207718E12, 7405.77], [1.72077018E12, 1173.2799999999988], [1.72077048E12, 1711.930000000004], [1.7207703E12, 2068.239999999998], [1.7207706E12, 2078.33], [1.7207709E12, 1286.6600000000026], [1.7207712E12, 6915.479999999998], [1.72077102E12, 781.8200000000014], [1.72077132E12, 1209.2800000000002], [1.72077162E12, 1345.9199999999996], [1.72077174E12, 4588.699999999993], [1.72077012E12, 1202.5900000000029], [1.72077042E12, 1823.799999999998], [1.72077072E12, 891.239999999995], [1.72077054E12, 1917.639999999997], [1.72077084E12, 1271.0399999999997], [1.72077114E12, 2265.759999999998], [1.72077144E12, 1068.6399999999987]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.72077126E12, 301.0], [1.72077156E12, 294.0], [1.72077186E12, 296.0], [1.72077024E12, 296.0], [1.72077006E12, 830.0], [1.72077036E12, 302.0], [1.72077066E12, 296.0], [1.72077096E12, 299.5], [1.72077078E12, 299.0], [1.72077108E12, 297.0], [1.72077138E12, 304.0], [1.72077168E12, 295.0], [1.7207715E12, 301.0], [1.7207718E12, 378.5], [1.72077018E12, 296.0], [1.72077048E12, 296.0], [1.7207703E12, 304.0], [1.7207706E12, 297.5], [1.7207709E12, 304.0], [1.7207712E12, 314.0], [1.72077102E12, 297.0], [1.72077132E12, 303.0], [1.72077162E12, 294.0], [1.72077174E12, 317.5], [1.72077012E12, 299.0], [1.72077042E12, 303.0], [1.72077072E12, 300.0], [1.72077054E12, 302.0], [1.72077084E12, 300.0], [1.72077114E12, 302.0], [1.72077144E12, 297.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.72077126E12, 471.4], [1.72077156E12, 874.4500000000002], [1.72077186E12, 593.0999999999998], [1.72077024E12, 596.5], [1.72077006E12, 1448.0], [1.72077036E12, 621.0], [1.72077066E12, 474.19999999999993], [1.72077096E12, 999.1500000000005], [1.72077078E12, 551.9000000000001], [1.72077108E12, 596.95], [1.72077138E12, 695.3999999999997], [1.72077168E12, 608.3999999999997], [1.7207715E12, 600.1999999999998], [1.7207718E12, 3601.2], [1.72077018E12, 675.7999999999996], [1.72077048E12, 650.5500000000005], [1.7207703E12, 1149.5999999999997], [1.7207706E12, 1282.9000000000005], [1.7207709E12, 694.0500000000002], [1.7207712E12, 5609.799999999999], [1.72077102E12, 392.19999999999993], [1.72077132E12, 631.8000000000002], [1.72077162E12, 440.7999999999999], [1.72077174E12, 2055.5], [1.72077012E12, 616.45], [1.72077042E12, 1114.0], [1.72077072E12, 463.9999999999999], [1.72077054E12, 878.1999999999999], [1.72077084E12, 593.3999999999997], [1.72077114E12, 1275.1999999999998], [1.72077144E12, 585.5999999999998]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72077186E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 298.0, "minX": 1.0, "maxY": 28626.0, "series": [{"data": [[2.0, 298.0], [4.0, 356.0], [1.0, 309.5], [8.0, 1327.5], [9.0, 3867.0], [5.0, 639.5], [3.0, 298.0], [6.0, 1121.5], [7.0, 940.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[4.0, 28626.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 9.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 3867.0, "series": [{"data": [[2.0, 297.5], [4.0, 354.0], [1.0, 309.0], [8.0, 1327.5], [9.0, 3867.0], [5.0, 639.5], [3.0, 297.0], [6.0, 1121.5], [7.0, 933.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[4.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 9.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.72077006E12, "maxY": 2.783333333333333, "series": [{"data": [[1.72077126E12, 2.783333333333333], [1.72077156E12, 2.783333333333333], [1.72077186E12, 2.65], [1.72077024E12, 2.7666666666666666], [1.72077006E12, 0.13333333333333333], [1.72077036E12, 2.783333333333333], [1.72077066E12, 2.783333333333333], [1.72077096E12, 2.783333333333333], [1.72077078E12, 2.783333333333333], [1.72077108E12, 2.783333333333333], [1.72077138E12, 2.783333333333333], [1.72077168E12, 2.7666666666666666], [1.7207715E12, 2.7666666666666666], [1.7207718E12, 2.783333333333333], [1.72077018E12, 2.783333333333333], [1.72077048E12, 2.783333333333333], [1.7207703E12, 2.783333333333333], [1.7207706E12, 2.783333333333333], [1.7207709E12, 2.783333333333333], [1.7207712E12, 2.783333333333333], [1.72077102E12, 2.783333333333333], [1.72077132E12, 2.7666666666666666], [1.72077162E12, 2.783333333333333], [1.72077174E12, 2.783333333333333], [1.72077012E12, 2.7666666666666666], [1.72077042E12, 2.7666666666666666], [1.72077072E12, 2.7666666666666666], [1.72077054E12, 2.7666666666666666], [1.72077084E12, 2.7666666666666666], [1.72077114E12, 2.7666666666666666], [1.72077144E12, 2.783333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72077186E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.72077006E12, "maxY": 2.8, "series": [{"data": [[1.72077126E12, 2.783333333333333], [1.72077156E12, 2.7666666666666666], [1.72077186E12, 2.6666666666666665], [1.72077024E12, 2.7666666666666666], [1.72077006E12, 0.11666666666666667], [1.72077036E12, 2.783333333333333], [1.72077066E12, 2.783333333333333], [1.72077096E12, 2.7666666666666666], [1.72077078E12, 2.7666666666666666], [1.72077108E12, 2.7666666666666666], [1.72077138E12, 2.783333333333333], [1.72077168E12, 2.783333333333333], [1.7207715E12, 2.783333333333333], [1.7207718E12, 2.8], [1.72077018E12, 2.783333333333333], [1.72077048E12, 2.7666666666666666], [1.7207703E12, 2.783333333333333], [1.7207706E12, 2.7666666666666666], [1.7207709E12, 2.7666666666666666], [1.7207712E12, 2.783333333333333], [1.72077102E12, 2.8], [1.72077132E12, 2.7666666666666666], [1.72077162E12, 2.783333333333333], [1.72077174E12, 2.7333333333333334], [1.72077012E12, 2.7666666666666666], [1.72077042E12, 2.783333333333333], [1.72077072E12, 2.783333333333333], [1.72077054E12, 2.783333333333333], [1.72077084E12, 2.783333333333333], [1.72077114E12, 2.783333333333333], [1.72077144E12, 2.783333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.7207718E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72077186E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.72077006E12, "maxY": 2.8, "series": [{"data": [[1.72077126E12, 2.783333333333333], [1.72077156E12, 2.7666666666666666], [1.72077186E12, 2.6666666666666665], [1.72077024E12, 2.7666666666666666], [1.72077006E12, 0.11666666666666667], [1.72077036E12, 2.783333333333333], [1.72077066E12, 2.783333333333333], [1.72077096E12, 2.7666666666666666], [1.72077078E12, 2.7666666666666666], [1.72077108E12, 2.7666666666666666], [1.72077138E12, 2.783333333333333], [1.72077168E12, 2.783333333333333], [1.7207715E12, 2.783333333333333], [1.7207718E12, 2.8], [1.72077018E12, 2.783333333333333], [1.72077048E12, 2.7666666666666666], [1.7207703E12, 2.783333333333333], [1.7207706E12, 2.7666666666666666], [1.7207709E12, 2.7666666666666666], [1.7207712E12, 2.783333333333333], [1.72077102E12, 2.8], [1.72077132E12, 2.7666666666666666], [1.72077162E12, 2.783333333333333], [1.72077174E12, 2.7333333333333334], [1.72077012E12, 2.7666666666666666], [1.72077042E12, 2.783333333333333], [1.72077072E12, 2.783333333333333], [1.72077054E12, 2.783333333333333], [1.72077084E12, 2.783333333333333], [1.72077114E12, 2.783333333333333], [1.72077144E12, 2.783333333333333]], "isOverall": false, "label": "Demo_Capacity_Testing-success", "isController": false}, {"data": [[1.7207718E12, 0.016666666666666666]], "isOverall": false, "label": "Demo_Capacity_Testing-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72077186E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.72077006E12, "maxY": 2.8, "series": [{"data": [[1.72077126E12, 2.783333333333333], [1.72077156E12, 2.7666666666666666], [1.72077186E12, 2.6666666666666665], [1.72077024E12, 2.7666666666666666], [1.72077006E12, 0.11666666666666667], [1.72077036E12, 2.783333333333333], [1.72077066E12, 2.783333333333333], [1.72077096E12, 2.7666666666666666], [1.72077078E12, 2.7666666666666666], [1.72077108E12, 2.7666666666666666], [1.72077138E12, 2.783333333333333], [1.72077168E12, 2.783333333333333], [1.7207715E12, 2.783333333333333], [1.7207718E12, 2.8], [1.72077018E12, 2.783333333333333], [1.72077048E12, 2.7666666666666666], [1.7207703E12, 2.783333333333333], [1.7207706E12, 2.7666666666666666], [1.7207709E12, 2.7666666666666666], [1.7207712E12, 2.783333333333333], [1.72077102E12, 2.8], [1.72077132E12, 2.7666666666666666], [1.72077162E12, 2.783333333333333], [1.72077174E12, 2.7333333333333334], [1.72077012E12, 2.7666666666666666], [1.72077042E12, 2.783333333333333], [1.72077072E12, 2.783333333333333], [1.72077054E12, 2.783333333333333], [1.72077084E12, 2.783333333333333], [1.72077114E12, 2.783333333333333], [1.72077144E12, 2.783333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.7207718E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72077186E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

