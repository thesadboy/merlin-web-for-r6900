﻿/**/
var all_client_traffic_24 = new Array();
var all_client_traffic_7 = new Array();
var all_client_traffic_31 = new Array();
var all_app_traffic_24 = new Array();
var all_app_traffic_31 = new Array();
var all_app_traffic_7 = new Array();
var app_used_by_client_array_statistics_24 = new Array();
var app_used_by_client_array_statistics_31 = new Array();
var app_used_by_client_array_statistics_7 = new Array();
var client_used_app_array_statistics_24 = new Array();
var client_used_app_array_statistics_31 = new Array();
var client_used_app_array_statistics_7 = new Array();
all_client_traffic_24 = [["20:CF:30:0F:3E:77", 419149906, 809905340], ["5C:FF:35:84:5A:A8", 166506532, 281959559], ["7C:E9:D3:0A:8A:FB", 100197681, 175535533], ["54:26:96:D3:6D:91", 92743002, 376181909], ["60:FA:CD:49:B9:A2", 335137467, 652724712]];
all_client_traffic_31 = [["20:CF:30:0F:3E:77", 4191499060, 8099053400], ["5C:FF:35:84:5A:A8", 1665065020, 2819595590], ["7C:E9:D3:0A:8A:FB", 1001976810, 1755355330], ["54:26:96:D3:6D:91", 927430020, 3761819090], ["60:FA:CD:49:B9:A2", 3351374670, 6527247120]];
all_client_traffic_7 = [["20:CF:30:0F:3E:77", 4191499060, 809905340], ["5C:FF:35:84:5A:A8", 1665065020, 281959559], ["7C:E9:D3:0A:8A:FB", 1001976810, 175535533], ["54:26:96:D3:6D:91", 927430020, 376181909], ["60:FA:CD:49:B9:A2", 3351374670, 652724712]];
all_app_traffic_24 = [["Amazon", 87723945, 275324615], ["Android browser", 17823945, 240823945], ["Avira", 5576740, 185276740], ["Dropbox", 127499920, 2857679920], ["Facebook", 156284875, 269293875],["Flickr", 24682445,273282445], ["General", 208744565, 263744565], ["Gmail", 30332725, 268233025], ["Google Chrome", 30131705, 259231705], ["Google-analytics", 33948210, 202748210], ["Google-docs", 25430775, 339470775], ["Microsoft Internet Explorer", 14579230, 107159230], ["Microsoft.com", 126726510, 113505169], ["Twitter", 50451172, 321063965], ["Yahoo", 32568880, 92568880], ["Youtube", 26672805, 283672805]];
all_app_traffic_31 = [["Amazon", 877239450, 2753246150], ["Android browser", 178239450, 2408239450], ["Avira", 55767400, 1852767400], ["Dropbox", 1274999200, 28576799200], ["Facebook", 1562848750, 2692938750],["Flickr", 246824450,2732824450], ["General", 2087445650, 2637445650], ["Gmail", 303327250, 2682330250], ["Google Chrome", 301317050, 2592317050], ["Google-analytics", 339482100, 2027482100], ["Google-docs", 254307750, 3394707750], ["Microsoft Internet Explorer", 145792300, 1071592300], ["Microsoft.com", 1267265100, 1135051690], ["Twitter", 504511720, 3210639650], ["Yahoo", 325688800, 925688800], ["Youtube", 266728050, 2836728050]];
all_app_traffic_7 = [["Amazon", 877239450, 275324615], ["Android browser", 178239450, 240823945], ["Avira", 55767400, 185276740], ["Dropbox", 1274999200, 2857679920], ["Facebook", 1562848750, 269293875],["Flickr", 246824450,273282445], ["General", 2087445650, 263744565], ["Gmail", 303327250, 268233025], ["Google Chrome", 301317050, 259231705], ["Google-analytics", 339482100, 202748210], ["Google-docs", 254307750, 339470775], ["Microsoft Internet Explorer", 145792300, 107159230], ["Microsoft.com", 1267265100, 113505169], ["Twitter", 504511720, 321063965], ["Yahoo", 325688800, 92568880], ["Youtube", 266728050, 283672805]];
app_used_by_client_array_statistics_24 = ["Amazon", "Android browser", "Avira","Dropbox", "Facebook","Flickr", "General", "Gmail","Google Chrome","Google-analytics","Google-docs","Microsoft Internet Explorer","Microsoft.com","Twitter","Yahoo","Youtube"];
app_used_by_client_array_statistics_24["Amazon"] = [["20:CF:30:0F:3E:77", 14344789, 51464923], ["5C:FF:35:84:5A:A8", 12344789, 71464923], ["7C:E9:D3:0A:8A:FB", 22344789, 41464923], ["54:26:96:D3:6D:91", 31344789, 80464923], ["60:FA:CD:49:B9:A2", 7344789, 30464923]];
app_used_by_client_array_statistics_24["Android browser"] = [["20:CF:30:0F:3E:77", 4044789, 74344789], ["5C:FF:35:84:5A:A8", 1044789, 29344789], ["7C:E9:D3:0A:8A:FB", 7044789, 31444789], ["54:26:96:D3:6D:91", 1544789, 47344789], ["60:FA:CD:49:B9:A2", 4144789, 58344789]];
app_used_by_client_array_statistics_24["Avira"] = [["20:CF:30:0F:3E:77", 455348, 20455348], ["5C:FF:35:84:5A:A8", 1255348, 30455348], ["7C:E9:D3:0A:8A:FB", 955348, 21455348], ["54:26:96:D3:6D:91", 1555348, 35455348], ["60:FA:CD:49:B9:A2", 1355348, 77455348]];
app_used_by_client_array_statistics_24["Dropbox"] = [["20:CF:30:0F:3E:77", 41535984, 541535984], ["5C:FF:35:84:5A:A8", 20535984, 341535984], ["7C:E9:D3:0A:8A:FB", 33535984, 671535984], ["54:26:96:D3:6D:91", 12535984, 711535984], ["60:FA:CD:49:B9:A2", 19535984, 591535984]];
app_used_by_client_array_statistics_24["Facebook"] = [["20:CF:30:0F:3E:77", 72456975, 60456975], ["5C:FF:35:84:5A:A8", 8456975, 40456975], ["7C:E9:D3:0A:8A:FB", 23456975, 80456975], ["54:26:96:D3:6D:91", 32456975, 47456975], ["60:FA:CD:49:B9:A2", 19456975, 40456975]];
app_used_by_client_array_statistics_24["Flickr"] = [["20:CF:30:0F:3E:77", 2056489, 52056489], ["5C:FF:35:84:5A:A8", 1856489, 70056489], ["7C:E9:D3:0A:8A:FB", 4456489, 39056489], ["54:26:96:D3:6D:91", 7456489, 67056489], ["60:FA:CD:49:B9:A2", 8856489, 45056489]];
app_used_by_client_array_statistics_24["General"] = [["20:CF:30:0F:3E:77", 17748913, 32748913], ["5C:FF:35:84:5A:A8", 87748913, 72748913], ["7C:E9:D3:0A:8A:FB", 57748913, 92748913], ["54:26:96:D3:6D:91", 37748913, 42748913], ["60:FA:CD:49:B9:A2", 7748913, 22748913]];
app_used_by_client_array_statistics_24["Gmail"] = [["20:CF:30:0F:3E:77", 9846545, 7846545], ["5C:FF:35:84:5A:A8", 7446545, 51846545], ["7C:E9:D3:0A:8A:FB", 4546545, 87846545], ["54:26:96:D3:6D:91", 2346545, 64846545], ["60:FA:CD:49:B9:A2", 6146545, 55846545]];
app_used_by_client_array_statistics_24["Google Chrome"] = [["20:CF:30:0F:3E:77", 7846341, 77846341], ["5C:FF:35:84:5A:A8", 8746341, 27846341], ["7C:E9:D3:0A:8A:FB", 9946341, 47846341], ["54:26:96:D3:6D:91", 1246341, 67846341], ["60:FA:CD:49:B9:A2", 2346341, 37846341]];
app_used_by_client_array_statistics_24["Google-analytics"] = [["20:CF:30:0F:3E:77", 8749642, 88749642], ["5C:FF:35:84:5A:A8", 4749642, 7749642], ["7C:E9:D3:0A:8A:FB", 5849642, 28749642], ["54:26:96:D3:6D:91", 6649642, 58749642], ["60:FA:CD:49:B9:A2", 7949642, 18749642]];
app_used_by_client_array_statistics_24["Google-docs"] = [["20:CF:30:0F:3E:77", 7894155, 87894155], ["5C:FF:35:84:5A:A8", 1894155, 47894155], ["7C:E9:D3:0A:8A:FB", 9894155, 67894155], ["54:26:96:D3:6D:91", 5494155, 57894155], ["60:FA:CD:49:B9:A2", 254155, 77894155]];
app_used_by_client_array_statistics_24["Microsoft Internet Explorer"] = [["20:CF:30:0F:3E:77", 1231846, 18231846], ["5C:FF:35:84:5A:A8", 1431846, 4231846], ["7C:E9:D3:0A:8A:FB", 1451846, 18231846], ["54:26:96:D3:6D:91", 7231846, 28231846], ["60:FA:CD:49:B9:A2", 3231846, 38231846]];
app_used_by_client_array_statistics_24["Microsoft.com"] = [["20:CF:30:0F:3E:77", 4513456, 24513456], ["5C:FF:35:84:5A:A8", 1513456, 2451345], ["7C:E9:D3:0A:8A:FB", 513456, 7513456], ["54:26:96:D3:6D:91", 8513456, 44513456], ["60:FA:CD:49:B9:A2", 4513456, 34513456]];
app_used_by_client_array_statistics_24["Twitter"] = [["20:CF:30:0F:3E:77", 5612793, 35612793], ["5C:FF:35:84:5A:A8", 11612793, 47612793], ["7C:E9:D3:0A:8A:FB", 1212793, 95612793], ["54:26:96:D3:6D:91", 7612793, 70612793], ["60:FA:CD:49:B9:A2", 25612793, 71612793]];
app_used_by_client_array_statistics_24["Yahoo"] = [["20:CF:30:0F:3E:77", 8113776, 24113776], ["5C:FF:35:84:5A:A8", 1113776, 8113776], ["7C:E9:D3:0A:8A:FB", 12113776, 30113776], ["54:26:96:D3:6D:91", 5113776, 17113776], ["60:FA:CD:49:B9:A2", 6113776, 13113776]];
app_used_by_client_array_statistics_24["Youtube"] = [["20:CF:30:0F:3E:77", 8534561, 78534561], ["5C:FF:35:84:5A:A8", 2534561, 22534561], ["7C:E9:D3:0A:8A:FB", 5534561, 58534561], ["54:26:96:D3:6D:91", 8534561, 98534561], ["60:FA:CD:49:B9:A2", 1534561, 25534561]];
app_used_by_client_array_statistics_31 = ["Amazon", "Android browser", "Avira","Dropbox", "Facebook","Flickr", "General", "Gmail","Google Chrome","Google-analytics","Google-docs","Microsoft Internet Explorer","Microsoft.com","Twitter","Yahoo","Youtube"];
app_used_by_client_array_statistics_31["Amazon"] = [["20:CF:30:0F:3E:77", 143447890, 514649230], ["5C:FF:35:84:5A:A8", 123447890, 714649230], ["7C:E9:D3:0A:8A:FB", 223447890, 414649230], ["54:26:96:D3:6D:91", 313447890, 804649230], ["60:FA:CD:49:B9:A2", 73447890, 304649230]];
app_used_by_client_array_statistics_31["Android browser"] = [["20:CF:30:0F:3E:77", 40447890, 743447890], ["5C:FF:35:84:5A:A8", 10447890, 293447890], ["7C:E9:D3:0A:8A:FB", 70447890, 314447890], ["54:26:96:D3:6D:91", 15447890, 473447890], ["60:FA:CD:49:B9:A2", 41447890, 583447890]];
app_used_by_client_array_statistics_31["Avira"] = [["20:CF:30:0F:3E:77", 4553480, 204553480], ["5C:FF:35:84:5A:A8", 12553480, 304553480], ["7C:E9:D3:0A:8A:FB", 9553480, 214553480], ["54:26:96:D3:6D:91", 15553480, 354553480], ["60:FA:CD:49:B9:A2", 13553480, 774553480]];
app_used_by_client_array_statistics_31["Dropbox"] = [["20:CF:30:0F:3E:77", 415359840, 5415359840], ["5C:FF:35:84:5A:A8", 205359840, 3415359840], ["7C:E9:D3:0A:8A:FB", 335359840, 6715359840], ["54:26:96:D3:6D:91", 125359840, 7115359840], ["60:FA:CD:49:B9:A2", 195359840, 5915359840]];
app_used_by_client_array_statistics_31["Facebook"] = [["20:CF:30:0F:3E:77", 724569750, 604569750], ["5C:FF:35:84:5A:A8", 84569750, 404569750], ["7C:E9:D3:0A:8A:FB", 234569750, 804569750], ["54:26:96:D3:6D:91", 324569750, 474569750], ["60:FA:CD:49:B9:A2", 194569750, 404569750]];
app_used_by_client_array_statistics_31["Flickr"] = [["20:CF:30:0F:3E:77", 20564890, 520564890], ["5C:FF:35:84:5A:A8", 18564890, 700564890], ["7C:E9:D3:0A:8A:FB", 44564890, 390564890], ["54:26:96:D3:6D:91", 74564890, 670564890], ["60:FA:CD:49:B9:A2", 88564890, 450564890]];
app_used_by_client_array_statistics_31["General"] = [["20:CF:30:0F:3E:77", 177489130, 327489130], ["5C:FF:35:84:5A:A8", 877489130, 727489130], ["7C:E9:D3:0A:8A:FB", 577489130, 927489130], ["54:26:96:D3:6D:91", 377489130, 427489130], ["60:FA:CD:49:B9:A2", 77489130, 227489130]];
app_used_by_client_array_statistics_31["Gmail"] = [["20:CF:30:0F:3E:77", 98465450, 78465450], ["5C:FF:35:84:5A:A8", 74465450, 518465450], ["7C:E9:D3:0A:8A:FB", 45465450, 878465450], ["54:26:96:D3:6D:91", 23465450, 648465450], ["60:FA:CD:49:B9:A2", 61465450, 558465450]];
app_used_by_client_array_statistics_31["Google Chrome"] = [["20:CF:30:0F:3E:77", 78463410, 778463410], ["5C:FF:35:84:5A:A8", 87463410, 278463410], ["7C:E9:D3:0A:8A:FB", 99463410, 478463410], ["54:26:96:D3:6D:91", 12463410, 678463410], ["60:FA:CD:49:B9:A2", 23463410, 37846340]];
app_used_by_client_array_statistics_31["Google-analytics"] = [["20:CF:30:0F:3E:77", 87496420, 887496420], ["5C:FF:35:84:5A:A8", 47496420, 77496420], ["7C:E9:D3:0A:8A:FB", 58496420, 287496420], ["54:26:96:D3:6D:91", 66496420, 587496420], ["60:FA:CD:49:B9:A2", 79496420, 187496420]];
app_used_by_client_array_statistics_31["Google-docs"] = [["20:CF:30:0F:3E:77", 78941550, 878941550], ["5C:FF:35:84:5A:A8", 18941550, 478941550], ["7C:E9:D3:0A:8A:FB", 98941550, 678941550], ["54:26:96:D3:6D:91", 54941550, 578941550], ["60:FA:CD:49:B9:A2", 2541550, 778941550]];
app_used_by_client_array_statistics_31["Microsoft Internet Explorer"] = [["20:CF:30:0F:3E:77", 12318460, 182318460], ["5C:FF:35:84:5A:A8", 14318460, 42318460], ["7C:E9:D3:0A:8A:FB", 14518460, 182318460], ["54:26:96:D3:6D:91", 72318460, 282318460], ["60:FA:CD:49:B9:A2", 32318460, 382318460]];
app_used_by_client_array_statistics_31["Microsoft.com"] = [["20:CF:30:0F:3E:77", 45134560, 245134560], ["5C:FF:35:84:5A:A8", 15134560, 24513450], ["7C:E9:D3:0A:8A:FB", 5134560, 75134560], ["54:26:96:D3:6D:91", 85134560, 445134560], ["60:FA:CD:49:B9:A2", 45134560, 345134560]];
app_used_by_client_array_statistics_31["Twitter"] = [["20:CF:30:0F:3E:77", 56127930, 356127930], ["5C:FF:35:84:5A:A8", 116127930, 476127930], ["7C:E9:D3:0A:8A:FB", 12127930, 956127930], ["54:26:96:D3:6D:91", 76127930, 706127930], ["60:FA:CD:49:B9:A2", 256127930, 716127930]];
app_used_by_client_array_statistics_31["Yahoo"] = [["20:CF:30:0F:3E:77", 81137760, 241137760], ["5C:FF:35:84:5A:A8", 11137760, 81137760], ["7C:E9:D3:0A:8A:FB", 121137760, 301137760], ["54:26:96:D3:6D:91", 51137760, 171137760], ["60:FA:CD:49:B9:A2", 61137760, 131137760]];
app_used_by_client_array_statistics_31["Youtube"] = [["20:CF:30:0F:3E:77", 85345610, 785345610], ["5C:FF:35:84:5A:A8", 25345610, 225345610], ["7C:E9:D3:0A:8A:FB", 55345610, 585345610], ["54:26:96:D3:6D:91", 85345610, 985345610], ["60:FA:CD:49:B9:A2", 15345610, 255345610]];
app_used_by_client_array_statistics_7 = ["Amazon", "Android browser", "Avira","Dropbox", "Facebook","Flickr", "General", "Gmail","Google Chrome","Google-analytics","Google-docs","Microsoft Internet Explorer","Microsoft.com","Twitter","Yahoo","Youtube"];
app_used_by_client_array_statistics_7["Amazon"] = [["20:CF:30:0F:3E:77", 143447890, 51464923], ["5C:FF:35:84:5A:A8", 123447890, 71464923], ["7C:E9:D3:0A:8A:FB", 223447890, 41464923], ["54:26:96:D3:6D:91", 313447890, 80464923], ["60:FA:CD:49:B9:A2", 73447890, 30464923]];
app_used_by_client_array_statistics_7["Android browser"] = [["20:CF:30:0F:3E:77", 40447890, 74344789], ["5C:FF:35:84:5A:A8", 10447890, 29344789], ["7C:E9:D3:0A:8A:FB", 70447890, 31444789], ["54:26:96:D3:6D:91", 15447890, 47344789], ["60:FA:CD:49:B9:A2", 41447890, 58344789]];
app_used_by_client_array_statistics_7["Avira"] = [["20:CF:30:0F:3E:77", 4553480, 20455348], ["5C:FF:35:84:5A:A8", 12553480, 30455348], ["7C:E9:D3:0A:8A:FB", 9553480, 21455348], ["54:26:96:D3:6D:91", 15553480, 35455348], ["60:FA:CD:49:B9:A2", 13553480, 77455348]];
app_used_by_client_array_statistics_7["Dropbox"] = [["20:CF:30:0F:3E:77", 415359840, 541535984], ["5C:FF:35:84:5A:A8", 205359840, 341535984], ["7C:E9:D3:0A:8A:FB", 335359840, 671535984], ["54:26:96:D3:6D:91", 125359840, 711535984], ["60:FA:CD:49:B9:A2", 195359840, 591535984]];
app_used_by_client_array_statistics_7["Facebook"] = [["20:CF:30:0F:3E:77", 724569750, 60456975], ["5C:FF:35:84:5A:A8", 84569750, 40456975], ["7C:E9:D3:0A:8A:FB", 234569750, 80456975], ["54:26:96:D3:6D:91", 324569750, 47456975], ["60:FA:CD:49:B9:A2", 194569750, 40456975]];
app_used_by_client_array_statistics_7["Flickr"] = [["20:CF:30:0F:3E:77", 20564890, 52056489], ["5C:FF:35:84:5A:A8", 18564890, 70056489], ["7C:E9:D3:0A:8A:FB", 44564890, 39056489], ["54:26:96:D3:6D:91", 74564890, 67056489], ["60:FA:CD:49:B9:A2", 88564890, 45056489]];
app_used_by_client_array_statistics_7["General"] = [["20:CF:30:0F:3E:77", 177489130, 32748913], ["5C:FF:35:84:5A:A8", 877489130, 72748913], ["7C:E9:D3:0A:8A:FB", 577489130, 92748913], ["54:26:96:D3:6D:91", 377489130, 42748913], ["60:FA:CD:49:B9:A2", 77489130, 22748913]];
app_used_by_client_array_statistics_7["Gmail"] = [["20:CF:30:0F:3E:77", 98465450, 7846545], ["5C:FF:35:84:5A:A8", 74465450, 51846545], ["7C:E9:D3:0A:8A:FB", 45465450, 87846545], ["54:26:96:D3:6D:91", 23465450, 64846545], ["60:FA:CD:49:B9:A2", 61465450, 55846545]];
app_used_by_client_array_statistics_7["Google Chrome"] = [["20:CF:30:0F:3E:77", 78463410, 77846341], ["5C:FF:35:84:5A:A8", 87463410, 27846341], ["7C:E9:D3:0A:8A:FB", 99463410, 47846341], ["54:26:96:D3:6D:91", 12463410, 67846341], ["60:FA:CD:49:B9:A2", 23463410, 37846341]];
app_used_by_client_array_statistics_7["Google-analytics"] = [["20:CF:30:0F:3E:77", 87496420, 88749642], ["5C:FF:35:84:5A:A8", 47496420, 7749642], ["7C:E9:D3:0A:8A:FB", 58496420, 28749642], ["54:26:96:D3:6D:91", 66496420, 58749642], ["60:FA:CD:49:B9:A2", 79496420, 18749642]];
app_used_by_client_array_statistics_7["Google-docs"] = [["20:CF:30:0F:3E:77", 78941550, 87894155], ["5C:FF:35:84:5A:A8", 18941550, 47894155], ["7C:E9:D3:0A:8A:FB", 98941550, 67894155], ["54:26:96:D3:6D:91", 54941550, 57894155], ["60:FA:CD:49:B9:A2", 2541550, 77894155]];
app_used_by_client_array_statistics_7["Microsoft Internet Explorer"] = [["20:CF:30:0F:3E:77", 12318460, 18231846], ["5C:FF:35:84:5A:A8", 14318460, 4231846], ["7C:E9:D3:0A:8A:FB", 14518460, 18231846], ["54:26:96:D3:6D:91", 72318460, 28231846], ["60:FA:CD:49:B9:A2", 32318460, 38231846]];
app_used_by_client_array_statistics_7["Microsoft.com"] = [["20:CF:30:0F:3E:77", 45134560, 24513456], ["5C:FF:35:84:5A:A8", 15134560, 2451345], ["7C:E9:D3:0A:8A:FB", 5134560, 7513456], ["54:26:96:D3:6D:91", 85134560, 44513456], ["60:FA:CD:49:B9:A2", 45134560, 34513456]];
app_used_by_client_array_statistics_7["Twitter"] = [["20:CF:30:0F:3E:77", 56127930, 35612793], ["5C:FF:35:84:5A:A8", 116127930, 47612793], ["7C:E9:D3:0A:8A:FB", 12127930, 95612793], ["54:26:96:D3:6D:91", 76127930, 70612793], ["60:FA:CD:49:B9:A2", 256127930, 71612793]];
app_used_by_client_array_statistics_7["Yahoo"] = [["20:CF:30:0F:3E:77", 81137760, 24113776], ["5C:FF:35:84:5A:A8", 11137760, 8113776], ["7C:E9:D3:0A:8A:FB", 121137760, 30113776], ["54:26:96:D3:6D:91", 51137760, 17113776], ["60:FA:CD:49:B9:A2", 61137760, 13113776]];
app_used_by_client_array_statistics_7["Youtube"] = [["20:CF:30:0F:3E:77", 85345610, 78534561], ["5C:FF:35:84:5A:A8", 25345610, 22534561], ["7C:E9:D3:0A:8A:FB", 55345610, 58534561], ["54:26:96:D3:6D:91", 85345610, 98534561], ["60:FA:CD:49:B9:A2", 15345610, 25534561]];
client_used_app_array_statistics_24 = ["20:CF:30:0F:3E:77", "5C:FF:35:84:5A:A8", "7C:E9:D3:0A:8A:FB", "54:26:96:D3:6D:91", "60:FA:CD:49:B9:A2"];
client_used_app_array_statistics_24["20:CF:30:0F:3E:77"] = [["Youtube", 225455023, 399846523], ["Dropbox",56545023, 99084523], ["Googl Drive", 98455023, 199844523], ["Facebook", 17455023, 24984523], ["Gmail", 15455023, 79984652], ["Yahoo", 29981, 27945],["General", 4946736, 2956747],["Google Chrome", 437563, 1711361], ["Google-docs", 21307, 59157], ["Yahoo Authentication via SSL", 349204, 1405386]];
client_used_app_array_statistics_24["5C:FF:35:84:5A:A8"] = [["Youtube", 1255023, 10846523], ["Dropbox",16545023, 44084523], ["Googl Drive", 98455023, 199844523], ["Avira", 11619, 8676871], ["Gmail", 44455023, 12346523], ["Yahoo", 29981, 27945],["General", 4946736, 2956747],["Google Chrome", 437563, 1711361], ["Google-docs", 21307, 59157], ["Yahoo Authentication via SSL", 349204, 1405386]];
client_used_app_array_statistics_24["7C:E9:D3:0A:8A:FB"] = [["Amazon", 1655581, 155517], ["Android browser", 15444889, 12222873], ["Avira", 11619, 8871], ["Dropbox", 19555682, 36555774], ["Facebook", 19645411, 96567456], ["Flickr", 38565641, 25555981], ["General", 4946736, 2956747], ["Gmail", 15095, 65159], ["Google APIs(SSL)", 7823, 41769], ["Yahoo Authentication via SSL", 349204, 1405386]];
client_used_app_array_statistics_24["54:26:96:D3:6D:91"] = [["Google Chrome", 43744563, 174411361],["Google Drive", 2343296, 143435080], ["Google User Content(SSL)", 2296, 15080], ["Google(SSL)", 193772, 911659], ["Google-analytics", 21454531, 17195450], ["Google-docs", 21304547, 5914457], ["HTTP", 5128, 2363], ["ICMP", 2236, 5786], ["Imgur", 817, 24010], ["Microsoft Internet Explorer", 274491, 209192], ["Microsoft.com", 3414160, 34141242], ["Pinterest", 3165, 16229]];
client_used_app_array_statistics_24["60:FA:CD:49:B9:A2"] = [["SNMP", 97728, 0], ["SSL/TLS", 708042, 1160340], ["Skype", 124455300, 454562194], ["Secure Shell (SSH)", 7134, 5374], ["Twitter", 38070047, 16300454], ["Web File Transfer", 10060005, 54500048], ["Yahoo", 29980001, 2790045], ["Yahoo Authentication via SSL", 349204, 1405386], ["Youtube", 131410006, 122000871]];
client_used_app_array_statistics_31 = ["20:CF:30:0F:3E:77", "5C:FF:35:84:5A:A8", "7C:E9:D3:0A:8A:FB", "54:26:96:D3:6D:91", "60:FA:CD:49:B9:A2"];
client_used_app_array_statistics_31["20:CF:30:0F:3E:77"] = [["Youtube", 2254550230, 3998465230], ["Dropbox",565450230, 990845230], ["Googl Drive", 984550230, 1998445230], ["Facebook", 174550230, 249845230], ["Gmail", 154550230, 799846520], ["Yahoo", 299810, 279450],["General", 49467360, 29567470],["Google Chrome", 4375630, 17113610], ["Google-docs", 213070, 591570], ["Yahoo Authentication via SSL", 3492040, 14053860]];
client_used_app_array_statistics_31["5C:FF:35:84:5A:A8"] = [["Youtube", 12550230, 108465230], ["Dropbox",165450230, 440845230], ["Googl Drive", 984550230, 1998445230], ["Avira", 116190, 86768710], ["Gmail", 444550230, 123465230], ["Yahoo", 299810, 279450],["General", 49467360, 29567470],["Google Chrome", 4375630, 17113610], ["Google-docs", 213070, 591570], ["Yahoo Authentication via SSL", 3492040, 14053860]];
client_used_app_array_statistics_31["7C:E9:D3:0A:8A:FB"] = [["Amazon", 16555810, 1555170], ["Android browser", 154448890, 122228730], ["Avira", 116190, 88710], ["Dropbox", 195556820, 365557740], ["Facebook", 196454110, 965674560], ["Flickr", 385656410, 255559810], ["General", 49467360, 29567470], ["Gmail", 150950, 651590], ["Google APIs(SSL)", 78230, 417690], ["Yahoo Authentication via SSL", 3492040, 14053860]];
client_used_app_array_statistics_31["54:26:96:D3:6D:91"] = [["Google Chrome", 437445630, 1744113610],["Google Drive", 23432960, 1434350800], ["Google User Content(SSL)", 22960, 150800], ["Google(SSL)", 1937720, 9116590], ["Google-analytics", 214545310, 171954500], ["Google-docs", 213045470, 59144570], ["HTTP", 51280, 23630], ["ICMP", 22360, 57860], ["Imgur", 8170, 240100], ["Microsoft Internet Explorer", 2744910, 2091920], ["Microsoft.com", 34141600, 341412420], ["Pinterest", 31650, 162290]];
client_used_app_array_statistics_31["60:FA:CD:49:B9:A2"] = [["SNMP", 977280, 0], ["SSL/TLS", 7080420, 11603400], ["Skype", 1244553000, 4545621940], ["Secure Shell (SSH)", 71340, 53740], ["Twitter", 380700470, 163004540], ["Web File Transfer", 100600050, 545000480], ["Yahoo", 299800010, 27900450], ["Yahoo Authentication via SSL", 3492040, 14053860], ["Youtube", 1314100060, 1220008710]];
client_used_app_array_statistics_7 = ["20:CF:30:0F:3E:77", "5C:FF:35:84:5A:A8", "7C:E9:D3:0A:8A:FB", "54:26:96:D3:6D:91", "60:FA:CD:49:B9:A2"];
client_used_app_array_statistics_7["20:CF:30:0F:3E:77"] = [["Youtube", 2254550230, 399846523], ["Dropbox",565450230, 99084523], ["Googl Drive", 984550230, 199844523], ["Facebook", 174550230, 24984523], ["Gmail", 154550230, 79984652], ["Yahoo", 299810, 27945],["General", 49467360, 2956747],["Google Chrome", 4375630, 1711361], ["Google-docs", 213070, 59157], ["Yahoo Authentication via SSL", 3492040, 1405386]];
client_used_app_array_statistics_7["5C:FF:35:84:5A:A8"] = [["Youtube", 12550230, 10846523], ["Dropbox",165450230, 44084523], ["Googl Drive", 984550230, 199844523], ["Avira", 116190, 8676871], ["Gmail", 444550230, 12346523], ["Yahoo", 299810, 27945],["General", 49467360, 2956747],["Google Chrome", 4375630, 1711361], ["Google-docs", 213070, 59157], ["Yahoo Authentication via SSL", 3492040, 1405386]];
client_used_app_array_statistics_7["7C:E9:D3:0A:8A:FB"] = [["Amazon", 16555810, 155517], ["Android browser", 154448890, 12222873], ["Avira", 116190, 8871], ["Dropbox", 195556820, 36555774], ["Facebook", 196454110, 96567456], ["Flickr", 385656410, 25555981], ["General", 49467360, 2956747], ["Gmail", 150950, 65159], ["Google APIs(SSL)", 78230, 41769], ["Yahoo Authentication via SSL", 3492040, 1405386]];
client_used_app_array_statistics_7["54:26:96:D3:6D:91"] = [["Google Chrome", 437445630, 174411361], ["Google Drive", 23432960, 143435080], ["Google User Content(SSL)", 22960, 15080], ["Google(SSL)", 1937720, 911659], ["Google-analytics", 214545310, 17195450], ["Google-docs", 213045470, 5914457], ["HTTP", 51280, 2363], ["ICMP", 22360, 5786], ["Imgur", 8170, 24010], ["Microsoft Internet Explorer", 2744910, 209192], ["Microsoft.com", 34141600, 34141242], ["Pinterest", 31650, 16229]];
client_used_app_array_statistics_7["60:FA:CD:49:B9:A2"] = [["SNMP", 977280, 0], ["SSL/TLS", 7080420, 1160340], ["Skype", 1244553000, 454562194], ["Secure Shell (SSH)", 71340, 5374], ["Twitter", 380700470, 16300454], ["Web File Transfer", 100600050, 54500048], ["Yahoo", 299800010, 2790045], ["Yahoo Authentication via SSL", 3492040, 1405386], ["Youtube", 1314100060, 122000871]];

