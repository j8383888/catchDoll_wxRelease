var egret = window.egret;
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {};generateEUI.paths['resource/eui_skins/BagPanelSkin.exml'] = window.BagPanelSkin = (function (_super) {
	__extends(BagPanelSkin, _super);
	function BagPanelSkin() {
		_super.call(this);
		this.skinParts = ["switchBtn1","switchBtn2","switchBtn3","switchBtn4","bg","closeBtn","arrangeBtn"];
		
		this.elementsContent = [this._Group1_i(),this.bg_i(),this.closeBtn_i(),this.arrangeBtn_i()];
	}
	var _proto = BagPanelSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 454;
		t.y = 133.48;
		t.elementsContent = [this.switchBtn1_i(),this.switchBtn2_i(),this.switchBtn3_i(),this.switchBtn4_i()];
		return t;
	};
	_proto.switchBtn1_i = function () {
		var t = new eui.Group();
		this.switchBtn1 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scale9Grid = new egret.Rectangle(19,22,107,31);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bagPanel_10";
		t.width = 200;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bagPanel_2";
		t.x = 45;
		t.y = 13.52;
		return t;
	};
	_proto.switchBtn2_i = function () {
		var t = new eui.Group();
		this.switchBtn2 = t;
		t.x = 0;
		t.y = 85;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "bagPanel_8";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bagPanel_3";
		t.x = 23;
		t.y = 14;
		return t;
	};
	_proto.switchBtn3_i = function () {
		var t = new eui.Group();
		this.switchBtn3 = t;
		t.x = 0;
		t.y = 169;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "bagPanel_8";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bagPanel_11";
		t.x = 23;
		t.y = 14;
		return t;
	};
	_proto.switchBtn4_i = function () {
		var t = new eui.Group();
		this.switchBtn4 = t;
		t.x = 0;
		t.y = 255;
		t.elementsContent = [this._Image7_i(),this._Image8_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "bagPanel_8";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bagPanel_5";
		t.x = 23;
		t.y = 14;
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.source = "bagPanel_9";
		t.x = 0;
		t.y = 40;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.source = "functionPanel_4";
		t.x = 404;
		t.y = -11.52;
		return t;
	};
	_proto.arrangeBtn_i = function () {
		var t = new eui.Group();
		this.arrangeBtn = t;
		t.x = 308;
		t.y = 535.48;
		t.elementsContent = [this._Image9_i(),this._Image10_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "bagPanel_6";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "bagPanel_7";
		t.x = 28.5;
		t.y = 7.5;
		return t;
	};
	return BagPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/BattleEnterPanelSkin.exml'] = window.BattleEnterPanelSkin = (function (_super) {
	__extends(BattleEnterPanelSkin, _super);
	function BattleEnterPanelSkin() {
		_super.call(this);
		this.skinParts = ["bg","_startBtn","closeBtn","endPos"];
		
		this.width = 500;
		this.elementsContent = [this.bg_i(),this._startBtn_i(),this.closeBtn_i(),this._Image1_i(),this._Image2_i(),this.endPos_i()];
	}
	var _proto = BattleEnterPanelSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.source = "selectLevel_13";
		t.x = 0;
		return t;
	};
	_proto._startBtn_i = function () {
		var t = new eui.Image();
		this._startBtn = t;
		t.source = "selectLevel_12";
		t.x = 60;
		t.y = 439.99;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.source = "selectLevel_5";
		t.x = 406.66;
		t.y = 94.67;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "selectLevel_8";
		t.x = 243.35;
		t.y = 265;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "selectLevel_7";
		t.x = 119.96;
		t.y = 265;
		return t;
	};
	_proto.endPos_i = function () {
		var t = new eui.Rect();
		this.endPos = t;
		t.height = 0;
		t.width = 0;
		t.x = 266.67;
		t.y = 494.34;
		return t;
	};
	return BattleEnterPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/BattleSceneSkin.exml'] = window.BattleSceneSkin = (function (_super) {
	__extends(BattleSceneSkin, _super);
	function BattleSceneSkin() {
		_super.call(this);
		this.skinParts = ["curtain2","curtain1","_propBtn1","_propBtn2","prop1","prop2","prop3","prop4","propBox","_returnBtn","_rightBtn","_leftBtn","_middleBtn","_returnBtn0","timeLabel"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this.curtain2_i(),this.curtain1_i(),this._Image2_i(),this._propBtn1_i(),this.propBox_i(),this._returnBtn_i(),this._Image4_i(),this._Group1_i(),this._Group2_i()];
	}
	var _proto = BattleSceneSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "scene2_png";
		t.x = 0;
		t.y = -100;
		return t;
	};
	_proto.curtain2_i = function () {
		var t = new eui.Image();
		this.curtain2 = t;
		t.right = 0;
		t.source = "battle_20";
		t.top = 0;
		return t;
	};
	_proto.curtain1_i = function () {
		var t = new eui.Image();
		this.curtain1 = t;
		t.left = 0;
		t.source = "battle_21";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "battle_16";
		t.top = 0;
		return t;
	};
	_proto._propBtn1_i = function () {
		var t = new eui.Image();
		this._propBtn1 = t;
		t.scaleX = -1;
		t.source = "battle_19";
		t.x = 56;
		t.y = 570;
		return t;
	};
	_proto.propBox_i = function () {
		var t = new eui.Group();
		this.propBox = t;
		t.width = 203;
		t.x = -203;
		t.y = 380;
		t.elementsContent = [this._Image3_i(),this._propBtn2_i(),this.prop1_i(),this.prop2_i(),this.prop3_i(),this.prop4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "battle_18";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._propBtn2_i = function () {
		var t = new eui.Image();
		this._propBtn2 = t;
		t.anchorOffsetX = 37.5;
		t.anchorOffsetY = 37.5;
		t.source = "battle_19";
		t.x = 168;
		t.y = 226;
		return t;
	};
	_proto.prop1_i = function () {
		var t = new eui.Image();
		this.prop1 = t;
		t.anchorOffsetX = 54.5;
		t.anchorOffsetY = 50.5;
		t.source = "item_6";
		t.x = 72;
		t.y = 70;
		return t;
	};
	_proto.prop2_i = function () {
		var t = new eui.Image();
		this.prop2 = t;
		t.anchorOffsetX = 44;
		t.anchorOffsetY = 49.5;
		t.source = "item_5";
		t.x = 73;
		t.y = 175.67;
		return t;
	};
	_proto.prop3_i = function () {
		var t = new eui.Image();
		this.prop3 = t;
		t.anchorOffsetX = 43.5;
		t.anchorOffsetY = 53;
		t.source = "item_4";
		t.x = 73;
		t.y = 279.33;
		return t;
	};
	_proto.prop4_i = function () {
		var t = new eui.Image();
		this.prop4 = t;
		t.anchorOffsetX = 52.5;
		t.anchorOffsetY = 52;
		t.source = "item_7";
		t.x = 74;
		t.y = 390;
		return t;
	};
	_proto._returnBtn_i = function () {
		var t = new eui.Image();
		this._returnBtn = t;
		t.right = 0;
		t.source = "battle_12";
		t.top = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "repeat";
		t.source = "battle_17";
		t.x = -103.14;
		t.y = 202;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 1019.75;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this._rightBtn_i(),this._leftBtn_i(),this._middleBtn_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "battle_15";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "battle_22";
		t.x = 0;
		t.y = 34.05;
		return t;
	};
	_proto._rightBtn_i = function () {
		var t = new eui.Image();
		this._rightBtn = t;
		t.source = "battle_6";
		t.x = 246.97;
		t.y = 86.2;
		return t;
	};
	_proto._leftBtn_i = function () {
		var t = new eui.Image();
		this._leftBtn = t;
		t.source = "battle_8";
		t.x = 42.29;
		t.y = 88;
		return t;
	};
	_proto._middleBtn_i = function () {
		var t = new eui.Image();
		this._middleBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.source = "battle_7";
		t.x = 485.25;
		t.y = 54;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 2.02;
		t.elementsContent = [this._returnBtn0_i(),this.timeLabel_i()];
		return t;
	};
	_proto._returnBtn0_i = function () {
		var t = new eui.Image();
		this._returnBtn0 = t;
		t.source = "battle_9";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.timeLabel_i = function () {
		var t = new eui.Label();
		this.timeLabel = t;
		t.anchorOffsetX = 37;
		t.anchorOffsetY = 20;
		t.size = 40;
		t.text = "999";
		t.textAlign = "center";
		t.width = 74;
		t.x = 75.97;
		t.y = 74.68;
		return t;
	};
	return BattleSceneSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/BuyItemPanel/BuyItemPanelSkin.exml'] = window.BuyItemPanelSkin = (function (_super) {
	__extends(BuyItemPanelSkin, _super);
	function BuyItemPanelSkin() {
		_super.call(this);
		this.skinParts = ["bg","itemImg","closeBtn","_incBtn","_decBtn","itemName","numLabel","itemPrice","_buyBtn"];
		
		this.width = 636;
		this.elementsContent = [this.bg_i(),this._Image1_i(),this.itemImg_i(),this._Image2_i(),this._Image3_i(),this.closeBtn_i(),this._Image4_i(),this._Image5_i(),this._incBtn_i(),this._decBtn_i(),this.itemName_i(),this.numLabel_i(),this._buyBtn_i()];
	}
	var _proto = BuyItemPanelSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.source = "otherRes2_21";
		t.y = 62.66;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 141;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(19,19,66,66);
		t.source = "otherRes2_24";
		t.width = 141;
		t.y = 146;
		return t;
	};
	_proto.itemImg_i = function () {
		var t = new eui.Image();
		this.itemImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "item_7";
		t.y = 163.32;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "otherRes2_30";
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -4;
		t.source = "otherRes2_22";
		t.y = 22.67;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.horizontalCenter = 282;
		t.source = "functionPanel_4";
		t.y = 34.01;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "otherRes2_31";
		t.x = 216.36;
		t.y = 375.64;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "otherRes2_23";
		t.y = 423;
		return t;
	};
	_proto._incBtn_i = function () {
		var t = new eui.Image();
		this._incBtn = t;
		t.source = "otherRes2_25";
		t.x = 422.48;
		t.y = 452;
		return t;
	};
	_proto._decBtn_i = function () {
		var t = new eui.Image();
		this._decBtn = t;
		t.source = "otherRes2_26";
		t.x = 144;
		t.y = 452;
		return t;
	};
	_proto.itemName_i = function () {
		var t = new eui.Label();
		this.itemName = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "Label";
		t.textAlign = "center";
		t.width = 378;
		t.y = 300.35;
		return t;
	};
	_proto.numLabel_i = function () {
		var t = new eui.Label();
		this.numLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.size = 40;
		t.text = "X1";
		t.textAlign = "center";
		t.width = 98;
		t.x = 269.62;
		t.y = 463.06;
		return t;
	};
	_proto._buyBtn_i = function () {
		var t = new eui.Group();
		this._buyBtn = t;
		t.x = 212;
		t.y = 562;
		t.elementsContent = [this._Image6_i(),this.itemPrice_i(),this._Image7_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "otherRes2_20";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.itemPrice_i = function () {
		var t = new eui.Label();
		this.itemPrice = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.size = 40;
		t.text = "20";
		t.textAlign = "center";
		t.width = 98;
		t.x = 77.79;
		t.y = 23;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.source = "item_1";
		t.x = 12.84;
		t.y = 8.34;
		return t;
	};
	return BuyItemPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/FunctionUISkin.exml'] = window.FunctionUISkin = (function (_super) {
	__extends(FunctionUISkin, _super);
	function FunctionUISkin() {
		_super.call(this);
		this.skinParts = ["_leftBtn","_rightBtn","_taskBtn","_bagBtn","_registerBtn","_setUpBtn","bottomBtnGroup","bottomMenu","leftMenuBg","_shopBtn","_rankBtn","_turnTableBtn","_inventBtn","_furlBtn","leftMenu","diamond","money","_menuBtn","headImg"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._leftBtn_i(),this.bottomMenu_i(),this.leftMenu_i(),this._Group3_i(),this._Group4_i(),this._menuBtn_i(),this._Group5_i()];
	}
	var _proto = FunctionUISkin.prototype;

	_proto._leftBtn_i = function () {
		var t = new eui.Image();
		this._leftBtn = t;
		t.anchorOffsetX = 35.5;
		t.anchorOffsetY = 60.5;
		t.scaleX = -1;
		t.source = "functionUI_4";
		t.x = 686.08;
		t.y = 1193.7;
		return t;
	};
	_proto.bottomMenu_i = function () {
		var t = new eui.Group();
		this.bottomMenu = t;
		t.x = 0;
		t.y = 1092.03;
		t.elementsContent = [this._Image1_i(),this._Group1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scale9Grid = new egret.Rectangle(100,47,600,96);
		t.source = "functionUI_12";
		t.width = 871;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 137.52;
		t.y = 35.44;
		t.elementsContent = [this._rightBtn_i(),this._Scroller1_i()];
		return t;
	};
	_proto._rightBtn_i = function () {
		var t = new eui.Image();
		this._rightBtn = t;
		t.anchorOffsetX = 35.5;
		t.anchorOffsetY = 60.5;
		t.scaleX = 1;
		t.source = "functionUI_4";
		t.x = -87.96;
		t.y = 57.3;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 142;
		t.scaleX = 1;
		t.scaleY = 1;
		t.scrollPolicyV = "off";
		t.width = 590;
		t.x = -12.83;
		t.y = -16.08;
		t.viewport = this.bottomBtnGroup_i();
		return t;
	};
	_proto.bottomBtnGroup_i = function () {
		var t = new eui.Group();
		this.bottomBtnGroup = t;
		t.y = 20;
		t.elementsContent = [this._taskBtn_i(),this._bagBtn_i(),this._registerBtn_i(),this._setUpBtn_i()];
		return t;
	};
	_proto._taskBtn_i = function () {
		var t = new eui.Group();
		this._taskBtn = t;
		t.anchorOffsetX = 48.5;
		t.anchorOffsetY = 55;
		t.name = "btn1";
		t.scaleX = 1;
		t.x = 54.61;
		t.y = 60.92;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "functionUI_18";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "functionUI_1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "functionUI_2";
		t.x = -48.6;
		t.y = 39.33;
		return t;
	};
	_proto._bagBtn_i = function () {
		var t = new eui.Group();
		this._bagBtn = t;
		t.anchorOffsetX = 55;
		t.anchorOffsetY = 55;
		t.name = "btn2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 209.59;
		t.y = 73.52;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this._Image7_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "functionUI_18";
		t.x = -11.560000000000002;
		t.y = -14.519999999999982;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "functionUI_10";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "functionUI_11";
		t.x = -49.53;
		t.y = 32.81;
		return t;
	};
	_proto._registerBtn_i = function () {
		var t = new eui.Group();
		this._registerBtn = t;
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 56.5;
		t.name = "btn3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 352.33;
		t.y = 75.56;
		t.elementsContent = [this._Image8_i(),this._Image9_i(),this._Image10_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "functionUI_18";
		t.x = -18.33000000000004;
		t.y = -15.059999999999945;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.source = "functionUI_8";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "functionUI_20";
		t.x = 8.55;
		t.y = 47.71;
		return t;
	};
	_proto._setUpBtn_i = function () {
		var t = new eui.Group();
		this._setUpBtn = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 50;
		t.name = "btn4";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 500.33;
		t.y = 73.52;
		t.elementsContent = [this._Image11_i(),this._Image12_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "functionUI_18";
		t.x = -35.379999999999995;
		t.y = -19.519999999999982;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "functionUI_13";
		t.x = -15;
		t.y = 0;
		return t;
	};
	_proto.leftMenu_i = function () {
		var t = new eui.Group();
		this.leftMenu = t;
		t.scaleY = 1;
		t.x = 545;
		t.y = 288.18;
		t.elementsContent = [this.leftMenuBg_i(),this._Scroller2_i(),this._furlBtn_i()];
		return t;
	};
	_proto.leftMenuBg_i = function () {
		var t = new eui.Image();
		this.leftMenuBg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.source = "functionUI_26";
		t.x = 17.57;
		t.y = 0;
		return t;
	};
	_proto._Scroller2_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 436;
		t.scrollPolicyH = "off";
		t.width = 145.33;
		t.x = 20.65;
		t.y = 88.98;
		t.viewport = this._Group2_i();
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.layout = this._BasicLayout1_i();
		t.elementsContent = [this._shopBtn_i(),this._rankBtn_i(),this._turnTableBtn_i(),this._inventBtn_i()];
		return t;
	};
	_proto._BasicLayout1_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto._shopBtn_i = function () {
		var t = new eui.Group();
		this._shopBtn = t;
		t.anchorOffsetX = 70;
		t.anchorOffsetY = 70;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 75.86;
		t.y = 69.78;
		t.elementsContent = [this._Image13_i(),this._Image14_i(),this._Image15_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "functionUI_18";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "functionUI_22";
		t.x = 6.65;
		t.y = 6.65;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "functionUI_23";
		t.x = -32.23;
		t.y = 49.46;
		return t;
	};
	_proto._rankBtn_i = function () {
		var t = new eui.Group();
		this._rankBtn = t;
		t.anchorOffsetX = 70;
		t.anchorOffsetY = 70;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 77.86;
		t.y = 219.37;
		t.elementsContent = [this._Image16_i(),this._Image17_i(),this._Image18_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "functionUI_18";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "functionUI_19";
		t.x = 17.34;
		t.y = 17.64;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.source = "functionUI_3";
		t.x = -34.94;
		t.y = 54.76;
		return t;
	};
	_proto._turnTableBtn_i = function () {
		var t = new eui.Group();
		this._turnTableBtn = t;
		t.anchorOffsetX = 70;
		t.anchorOffsetY = 70;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 77.86;
		t.y = 373.01;
		t.elementsContent = [this._Image19_i(),this._Image20_i(),this._Image21_i()];
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "functionUI_18";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "functionUI_14";
		t.x = 12;
		t.y = 12;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.source = "functionUI_21";
		t.x = -27.6;
		t.y = 42.44;
		return t;
	};
	_proto._inventBtn_i = function () {
		var t = new eui.Group();
		this._inventBtn = t;
		t.anchorOffsetX = 80;
		t.anchorOffsetY = 64;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 84.76;
		t.y = 527.64;
		t.elementsContent = [this._Image22_i(),this._Image23_i(),this._Image24_i()];
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "functionUI_18";
		t.x = 5.530000000000086;
		t.y = -12.970000000000027;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.source = "functionUI_17";
		t.x = 22.2;
		t.y = 0;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.source = "functionUI_15";
		t.x = 0;
		t.y = 47.91;
		return t;
	};
	_proto._furlBtn_i = function () {
		var t = new eui.Image();
		this._furlBtn = t;
		t.anchorOffsetX = 57;
		t.anchorOffsetY = 57;
		t.rotation = 90;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "functionUI_25";
		t.x = 96.78;
		t.y = 43.25;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 388.58;
		t.y = 52.24;
		t.elementsContent = [this._Image25_i(),this._Image26_i(),this._Image27_i(),this.diamond_i()];
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.source = "selectLevel_14";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.rotation = 45;
		t.source = "functionPanel_5";
		t.x = 130;
		t.y = -12;
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.source = "functionUI_7";
		t.x = -26;
		t.y = -8;
		return t;
	};
	_proto.diamond_i = function () {
		var t = new eui.Label();
		this.diamond = t;
		t.anchorOffsetX = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "0";
		t.textAlign = "right";
		t.width = 90;
		t.x = 6;
		t.y = 8;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.x = 171.85;
		t.y = 52.24;
		t.elementsContent = [this._Image28_i(),this._Image29_i(),this._Image30_i(),this.money_i()];
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.source = "selectLevel_14";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.rotation = 45;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "functionPanel_5";
		t.x = 130;
		t.y = -12;
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		t.source = "functionUI_16";
		t.x = -26;
		t.y = -8;
		return t;
	};
	_proto.money_i = function () {
		var t = new eui.Label();
		this.money = t;
		t.anchorOffsetX = 0;
		t.text = "0";
		t.textAlign = "right";
		t.width = 90;
		t.x = 6;
		t.y = 9;
		return t;
	};
	_proto._menuBtn_i = function () {
		var t = new eui.Image();
		this._menuBtn = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "functionUI_9";
		t.x = 588.29;
		t.y = 25.75;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.headImg_i(),this._Image31_i()];
		return t;
	};
	_proto.headImg_i = function () {
		var t = new eui.Image();
		this.headImg = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "otherRes1_3";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image31_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "otherRes1_6";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return FunctionUISkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Illustrations/illstationsClipItemSkin.exml'] = window.illstationsClipItemSkin = (function (_super) {
	__extends(illstationsClipItemSkin, _super);
	function illstationsClipItemSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 300;
		this.width = 400;
	}
	var _proto = illstationsClipItemSkin.prototype;

	return illstationsClipItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Illustrations/illstationsDollItemSkin.exml'] = window.illstationsDollItemSkin = (function (_super) {
	__extends(illstationsDollItemSkin, _super);
	function illstationsDollItemSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Label1_i()];
	}
	var _proto = illstationsDollItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "otherRes2_9";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "monster_1";
		t.x = 30.86;
		t.y = 28.52;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "otherRes2_1";
		t.x = 6.72;
		t.y = 137.16;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.text = "Label";
		t.x = 50;
		t.y = 144;
		return t;
	};
	return illstationsDollItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Illustrations/illustrationsPanelSkin.exml'] = window.illustrationsPanelSkin = (function (_super) {
	__extends(illustrationsPanelSkin, _super);
	function illustrationsPanelSkin() {
		_super.call(this);
		this.skinParts = ["bg","closeBtn","switchBtn1","switchBtn2","itemGroup","nameLabel","fragmentNum","UnlockBtn","hasNum"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.bg_i(),this.closeBtn_i(),this._Image1_i(),this.switchBtn1_i(),this.switchBtn2_i(),this._Group1_i(),this.itemGroup_i(),this._Group3_i(),this._Group4_i()];
	}
	var _proto = illustrationsPanelSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.source = "otherRes2_19";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.right = 0;
		t.source = "battle_12";
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "otherRes2_12";
		t.x = 6.48;
		t.y = 675.48;
		return t;
	};
	_proto.switchBtn1_i = function () {
		var t = new eui.Group();
		this.switchBtn1 = t;
		t.x = 43.78;
		t.y = 710;
		t.elementsContent = [this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "otherRes2_6";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "otherRes2_16";
		t.x = 25.79;
		t.y = 7.6;
		return t;
	};
	_proto.switchBtn2_i = function () {
		var t = new eui.Group();
		this.switchBtn2 = t;
		t.x = 205.28;
		t.y = 710;
		t.elementsContent = [this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "otherRes2_5";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "otherRes2_14";
		t.x = 25.79;
		t.y = 7.6;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 535.96;
		t.y = 711.03;
		t.elementsContent = [this._Image6_i(),this._Image7_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "otherRes2_4";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "otherRes2_7";
		t.x = 15.85;
		t.y = 10.59;
		return t;
	};
	_proto.itemGroup_i = function () {
		var t = new eui.Group();
		this.itemGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 401.52;
		t.width = 580.3;
		t.x = 65.83;
		t.y = 797.75;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 217;
		t.y = 240.59;
		t.elementsContent = [this._Group2_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this.fragmentNum_i(),this.UnlockBtn_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 100.15;
		t.y = 9.88;
		t.elementsContent = [this.nameLabel_i(),this._Image8_i()];
		return t;
	};
	_proto.nameLabel_i = function () {
		var t = new eui.Label();
		this.nameLabel = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.text = "小太阳";
		t.textColor = 0xFFA066;
		t.verticalAlign = "justify";
		t.x = 25.2;
		t.y = 16;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "otherRes2_29";
		t.x = -54.57;
		t.y = 1.52;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "otherRes2_2";
		t.x = 18.8;
		t.y = 185.91;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "fragment_1";
		t.x = 66.27;
		t.y = 249;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "fragment_101";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "monster_1";
		t.x = 47.8;
		t.y = 71.88;
		return t;
	};
	_proto.fragmentNum_i = function () {
		var t = new eui.Label();
		this.fragmentNum = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.text = "0/30";
		t.textColor = 0xffa066;
		t.verticalAlign = "justify";
		t.x = 123.22;
		t.y = 259.52;
		return t;
	};
	_proto.UnlockBtn_i = function () {
		var t = new eui.Group();
		this.UnlockBtn = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 52.420000000000016;
		t.y = 302.71;
		t.elementsContent = [this._Image13_i(),this._Image14_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "otherRes2_3";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "otherRes2_28";
		t.x = 32.44;
		t.y = 9.44;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.x = 380.38;
		t.y = 721.57;
		t.elementsContent = [this._Image15_i(),this.hasNum_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "otherRes2_17";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.hasNum_i = function () {
		var t = new eui.Label();
		this.hasNum = t;
		t.text = "0/50";
		t.x = 71.54;
		t.y = 2.58;
		return t;
	};
	return illustrationsPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PawsSkin.exml'] = window.PawsSkin = (function (_super) {
	__extends(PawsSkin, _super);
	function PawsSkin() {
		_super.call(this);
		this.skinParts = ["rope","headImg","pawsHead","pawBox"];
		
		this.elementsContent = [this.pawBox_i()];
	}
	var _proto = PawsSkin.prototype;

	_proto.pawBox_i = function () {
		var t = new eui.Group();
		this.pawBox = t;
		t.anchorOffsetX = 90;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.rope_i(),this._Group1_i(),this.pawsHead_i()];
		return t;
	};
	_proto.rope_i = function () {
		var t = new eui.Image();
		this.rope = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "repeat";
		t.height = 40;
		t.scaleY = 1;
		t.source = "battle_3";
		t.x = 88;
		t.y = 84.66;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.x = 41.98;
		t.y = 0;
		t.elementsContent = [this.headImg_i(),this._Image1_i()];
		return t;
	};
	_proto.headImg_i = function () {
		var t = new eui.Image();
		this.headImg = t;
		t.fillMode = "scale";
		t.source = "otherRes1_3";
		t.x = 16.66;
		t.y = 16.66;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.fillMode = "scale";
		t.source = "otherRes1_6";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pawsHead_i = function () {
		var t = new eui.Group();
		this.pawsHead = t;
		t.height = 180;
		t.width = 180;
		t.x = 0;
		t.y = 69.67;
		t.elementsContent = [this._Image2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.fillMode = "scale";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "clip_1";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return PawsSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RankList/RankItemItem.exml'] = window.RankItemItem = (function (_super) {
	__extends(RankItemItem, _super);
	function RankItemItem() {
		_super.call(this);
		this.skinParts = ["rankBg1","rankLabel","rankBg2","nameLabel","scoreLabel"];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.rankBg1_i(),this.rankBg2_i(),this.nameLabel_i(),this.scoreLabel_i()];
	}
	var _proto = RankItemItem.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "rankingList_8";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "rankingList_4";
		t.x = 14;
		t.y = 14.5;
		return t;
	};
	_proto.rankBg1_i = function () {
		var t = new eui.Image();
		this.rankBg1 = t;
		t.source = "rankingList_10";
		t.visible = false;
		t.x = 323;
		t.y = 4;
		return t;
	};
	_proto.rankBg2_i = function () {
		var t = new eui.Group();
		this.rankBg2 = t;
		t.x = 346;
		t.y = 47;
		t.elementsContent = [this._Image3_i(),this.rankLabel_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "rankingList_9";
		t.x = 2;
		t.y = 0;
		return t;
	};
	_proto.rankLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.rankLabel = t;
		t.font = "rankFont_fnt";
		t.text = "9";
		t.textAlign = "center";
		t.width = 60;
		t.x = 0;
		t.y = 12;
		return t;
	};
	_proto.nameLabel_i = function () {
		var t = new eui.Label();
		this.nameLabel = t;
		t.anchorOffsetX = 0;
		t.text = "Name";
		t.textColor = 0x591111;
		t.width = 167;
		t.x = 149;
		t.y = 35;
		return t;
	};
	_proto.scoreLabel_i = function () {
		var t = new eui.Label();
		this.scoreLabel = t;
		t.anchorOffsetX = 0;
		t.text = "Score";
		t.textColor = 0x591111;
		t.width = 179;
		t.x = 149;
		t.y = 89;
		return t;
	};
	return RankItemItem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RankList/RankPanelSkin.exml'] = window.RankPanelSkin = (function (_super) {
	__extends(RankPanelSkin, _super);
	function RankPanelSkin() {
		_super.call(this);
		this.skinParts = ["bg","closeBtn","switchBtn1","switchBtn2","listGroup"];
		
		this.elementsContent = [this.bg_i(),this.closeBtn_i(),this._Image1_i(),this.switchBtn1_i(),this.switchBtn2_i(),this._Scroller1_i()];
	}
	var _proto = RankPanelSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.source = "rankingList_6";
		t.x = 0;
		t.y = 40;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.source = "functionPanel_4";
		t.x = 437;
		t.y = 27;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "rankingList_7";
		t.x = 161.5;
		t.y = 3;
		return t;
	};
	_proto.switchBtn1_i = function () {
		var t = new eui.Group();
		this.switchBtn1 = t;
		t.x = 84;
		t.y = 109;
		t.elementsContent = [this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "rankingList_3";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "rankingList_5";
		t.x = 30;
		t.y = 10;
		return t;
	};
	_proto.switchBtn2_i = function () {
		var t = new eui.Group();
		this.switchBtn2 = t;
		t.x = 282;
		t.y = 109;
		t.elementsContent = [this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "rankingList_2";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "rankingList_1";
		t.x = 30;
		t.y = 13;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 664;
		t.width = 450;
		t.x = 41.51;
		t.y = 186.35;
		t.viewport = this.listGroup_i();
		return t;
	};
	_proto.listGroup_i = function () {
		var t = new eui.Group();
		this.listGroup = t;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 10;
		return t;
	};
	return RankPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RegisterPanelSkin.exml'] = window.RegisterPanelSkin = (function (_super) {
	__extends(RegisterPanelSkin, _super);
	function RegisterPanelSkin() {
		_super.call(this);
		this.skinParts = ["bg","item1","item2","item3","item4","item5","item6","item7","closeBtn","getBtn"];
		
		this.elementsContent = [this.bg_i(),this._Group1_i(),this._Image1_i(),this.closeBtn_i(),this.getBtn_i()];
	}
	var _proto = RegisterPanelSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.source = "functionPanel_15";
		t.y = 61.67;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 63.32;
		t.y = 104.35;
		t.elementsContent = [this.item1_i(),this.item2_i(),this.item3_i(),this.item4_i(),this.item5_i(),this.item6_i(),this.item7_i()];
		return t;
	};
	_proto.item1_i = function () {
		var t = new eui.Image();
		this.item1 = t;
		t.source = "functionPanel_14";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.item2_i = function () {
		var t = new eui.Image();
		this.item2 = t;
		t.source = "functionPanel_14";
		t.x = 123.31;
		t.y = 0;
		return t;
	};
	_proto.item3_i = function () {
		var t = new eui.Image();
		this.item3 = t;
		t.source = "functionPanel_14";
		t.x = 246.33;
		t.y = 0;
		return t;
	};
	_proto.item4_i = function () {
		var t = new eui.Image();
		this.item4 = t;
		t.source = "functionPanel_14";
		t.x = 370;
		t.y = 0;
		return t;
	};
	_proto.item5_i = function () {
		var t = new eui.Image();
		this.item5 = t;
		t.source = "functionPanel_14";
		t.x = 62.02;
		t.y = 157.68;
		return t;
	};
	_proto.item6_i = function () {
		var t = new eui.Image();
		this.item6 = t;
		t.source = "functionPanel_14";
		t.x = 188.36;
		t.y = 157.68;
		return t;
	};
	_proto.item7_i = function () {
		var t = new eui.Image();
		this.item7 = t;
		t.source = "functionPanel_14";
		t.x = 315.37;
		t.y = 157.68;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "functionPanel_16";
		t.y = 0;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.horizontalCenter = 276;
		t.source = "functionPanel_4";
		t.y = 15.65;
		return t;
	};
	_proto.getBtn_i = function () {
		var t = new eui.Image();
		this.getBtn = t;
		t.horizontalCenter = 0;
		t.source = "functionPanel_21";
		t.y = 423.68;
		return t;
	};
	return RegisterPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/SettlePanelSkin.exml'] = window.SettlePanelSkin = (function (_super) {
	__extends(SettlePanelSkin, _super);
	function SettlePanelSkin() {
		_super.call(this);
		this.skinParts = ["rope2","rope1","star1","starBox1","star3","starBox3","star2","starBox2","closeBtn","itemGroup","switchBtn1","switchBtn2","_pullDownBox"];
		
		this.elementsContent = [this._Group3_i(),this._pullDownBox_i()];
	}
	var _proto = SettlePanelSkin.prototype;

	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 39.42;
		t.y = -4;
		t.elementsContent = [this.rope2_i(),this.rope1_i(),this._Image1_i(),this.starBox1_i(),this.starBox3_i(),this.starBox2_i(),this._Image5_i(),this._Image6_i(),this.closeBtn_i(),this._Image7_i(),this.itemGroup_i(),this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto.rope2_i = function () {
		var t = new eui.Image();
		this.rope2 = t;
		t.fillMode = "scale";
		t.source = "settlePanel_3";
		t.x = 435.27;
		t.y = 593;
		return t;
	};
	_proto.rope1_i = function () {
		var t = new eui.Image();
		this.rope1 = t;
		t.fillMode = "scale";
		t.source = "settlePanel_3";
		t.x = 111.93;
		t.y = 593;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.fillMode = "scale";
		t.source = "settlePanel_8";
		t.x = 0;
		t.y = 88.48;
		return t;
	};
	_proto.starBox1_i = function () {
		var t = new eui.Group();
		this.starBox1 = t;
		t.x = 60.02;
		t.y = 30;
		t.elementsContent = [this._Image2_i(),this.star1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.fillMode = "scale";
		t.source = "settlePanel_22";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.star1_i = function () {
		var t = new eui.Image();
		this.star1 = t;
		t.anchorOffsetX = 75;
		t.anchorOffsetY = 75;
		t.fillMode = "scale";
		t.source = "settlePanel_25";
		t.x = 75;
		t.y = 75;
		return t;
	};
	_proto.starBox3_i = function () {
		var t = new eui.Group();
		this.starBox3 = t;
		t.x = 208.02;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this.star3_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.fillMode = "scale";
		t.source = "settlePanel_21";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.star3_i = function () {
		var t = new eui.Image();
		this.star3 = t;
		t.anchorOffsetX = 100;
		t.anchorOffsetY = 100;
		t.fillMode = "scale";
		t.source = "settlePanel_24";
		t.x = 100;
		t.y = 100;
		return t;
	};
	_proto.starBox2_i = function () {
		var t = new eui.Group();
		this.starBox2 = t;
		t.x = 400.02;
		t.y = 30;
		t.elementsContent = [this._Image4_i(),this.star2_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.fillMode = "scale";
		t.source = "settlePanel_20";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.star2_i = function () {
		var t = new eui.Image();
		this.star2 = t;
		t.anchorOffsetX = 75;
		t.anchorOffsetY = 75;
		t.fillMode = "scale";
		t.source = "settlePanel_23";
		t.x = 87;
		t.y = 75;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.fillMode = "scale";
		t.source = "settlePanel_11";
		t.x = 217;
		t.y = 378.29;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.fillMode = "scale";
		t.source = "settlePanel_6";
		t.x = 117;
		t.y = 201;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.fillMode = "scale";
		t.source = "functionPanel_4";
		t.x = 554.23;
		t.y = 61.04;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.fillMode = "scale";
		t.source = "settlePanel_4";
		t.x = 74.9;
		t.y = 434.02;
		return t;
	};
	_proto.itemGroup_i = function () {
		var t = new eui.Group();
		this.itemGroup = t;
		t.anchorOffsetX = 0;
		t.width = 393.27;
		t.x = 117.43;
		t.y = 458.48;
		t.layout = this._BasicLayout1_i();
		t.elementsContent = [this._Image8_i(),this._Image9_i()];
		return t;
	};
	_proto._BasicLayout1_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.fillMode = "scale";
		t.source = "settlePanel_17";
		t.x = 0;
		t.y = -8;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.fillMode = "scale";
		t.source = "settlePanel_17";
		t.x = 131.2;
		t.y = -8;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 327.5;
		t.y = 597.5;
		t.elementsContent = [this._Image10_i(),this._Image11_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.fillMode = "scale";
		t.source = "settlePanel_2";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.fillMode = "scale";
		t.source = "settlePanel_5";
		t.x = 50.8;
		t.y = 21.82;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 94.94;
		t.y = 597.5;
		t.elementsContent = [this._Image12_i(),this._Image13_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.fillMode = "scale";
		t.source = "settlePanel_15";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.fillMode = "scale";
		t.source = "settlePanel_26";
		t.x = 40.01;
		t.y = 23.34;
		return t;
	};
	_proto._pullDownBox_i = function () {
		var t = new eui.Group();
		this._pullDownBox = t;
		t.x = 21.05;
		t.y = 759.6;
		t.elementsContent = [this._Image14_i(),this.switchBtn1_i(),this.switchBtn2_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.fillMode = "scale";
		t.source = "settlePanel_12";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.switchBtn1_i = function () {
		var t = new eui.Group();
		this.switchBtn1 = t;
		t.x = 19.68;
		t.y = 11.9;
		t.elementsContent = [this._Image15_i(),this._Image16_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.fillMode = "scale";
		t.source = "settlePanel_13";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.fillMode = "scale";
		t.source = "settlePanel_7";
		t.x = 12.52;
		t.y = 7;
		return t;
	};
	_proto.switchBtn2_i = function () {
		var t = new eui.Group();
		this.switchBtn2 = t;
		t.x = 184.18;
		t.y = 11.9;
		t.elementsContent = [this._Image17_i(),this._Image18_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.fillMode = "scale";
		t.source = "settlePanel_16";
		t.x = 12.52;
		t.y = 7;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.fillMode = "scale";
		t.source = "settlePanel_14";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return SettlePanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/SetUpSkin.exml'] = window.SetUpSkin = (function (_super) {
	__extends(SetUpSkin, _super);
	function SetUpSkin() {
		_super.call(this);
		this.skinParts = ["bg","closeBtn"];
		
		this.elementsContent = [this.bg_i(),this._Image1_i(),this._Image2_i(),this.closeBtn_i()];
	}
	var _proto = SetUpSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.source = "functionPanel_19";
		t.y = 51;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "functionPanel_6";
		t.x = 151.33;
		t.y = 169.19;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "functionPanel_20";
		t.x = 319.95;
		t.y = 169.85;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.source = "functionPanel_4";
		t.top = 2;
		t.x = 472.66;
		return t;
	};
	return SetUpSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Shop/ShopItemSkin.exml'] = window.ShopItemSkin = (function (_super) {
	__extends(ShopItemSkin, _super);
	function ShopItemSkin() {
		_super.call(this);
		this.skinParts = ["itemImg","_buyBtn","hotFlag","price"];
		
		this.height = 134;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this._buyBtn_i(),this.hotFlag_i(),this._Group2_i()];
	}
	var _proto = ShopItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopPanel_28";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 12.03;
		t.y = 50;
		t.elementsContent = [this._Image2_i(),this.itemImg_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopPanel_14";
		t.x = 0;
		t.y = 34;
		return t;
	};
	_proto.itemImg_i = function () {
		var t = new eui.Image();
		this.itemImg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "item_6";
		t.x = 16.67;
		t.y = -37.33;
		return t;
	};
	_proto._buyBtn_i = function () {
		var t = new eui.Group();
		this._buyBtn = t;
		t.x = 320.58;
		t.y = 32.66;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopPanel_18";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopPanel_26";
		t.x = 31.34;
		t.y = 15.35;
		return t;
	};
	_proto.hotFlag_i = function () {
		var t = new eui.Image();
		this.hotFlag = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopPanel_15";
		t.x = 4.01;
		t.y = 2.68;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 163.98;
		t.y = 35.99;
		t.elementsContent = [this._Image5_i(),this.price_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopPanel_25";
		t.x = 0;
		t.y = 9.34;
		return t;
	};
	_proto.price_i = function () {
		var t = new eui.Label();
		this.price = t;
		t.text = "X5";
		t.x = 65.66;
		t.y = 23.32;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "functionUI_7";
		t.x = 0;
		t.y = 5.35;
		return t;
	};
	return ShopItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Shop/ShopPanelSkin.exml'] = window.ShopPanelSkin = (function (_super) {
	__extends(ShopPanelSkin, _super);
	function ShopPanelSkin() {
		_super.call(this);
		this.skinParts = ["bg","closeBtn","switchBtn2","switchBtn1","diamondBox","itemBox"];
		
		this.elementsContent = [this.bg_i(),this._Image1_i(),this.closeBtn_i(),this.switchBtn2_i(),this.switchBtn1_i(),this._Scroller1_i()];
	}
	var _proto = ShopPanelSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.source = "shopPanel_1";
		t.x = 0;
		t.y = 36;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "shopPanel_27";
		t.x = 234.28;
		t.y = 92;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.horizontalCenter = 251.5;
		t.source = "functionPanel_4";
		t.y = -0.82;
		return t;
	};
	_proto.switchBtn2_i = function () {
		var t = new eui.Group();
		this.switchBtn2 = t;
		t.x = 258.37;
		t.y = 195.15;
		t.elementsContent = [this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "shopPanel_11";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "shopPanel_20";
		t.x = 32;
		t.y = 8;
		return t;
	};
	_proto.switchBtn1_i = function () {
		var t = new eui.Group();
		this.switchBtn1 = t;
		t.x = 89.15;
		t.y = 195.15;
		t.elementsContent = [this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "shopPanel_12";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "shopPanel_16";
		t.x = 32;
		t.y = 15;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 583.64;
		t.width = 469;
		t.x = 75.28;
		t.y = 283.36;
		t.viewport = this._Group17_i();
		return t;
	};
	_proto._Group17_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.diamondBox_i(),this.itemBox_i()];
		return t;
	};
	_proto.diamondBox_i = function () {
		var t = new eui.Group();
		this.diamondBox = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Group4_i(),this._Group8_i(),this._Group12_i(),this._Group16_i()];
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Group1_i(),this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopPanel_28";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopPanel_15";
		t.x = 6.67;
		t.y = 8;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 12.03;
		t.y = 50;
		t.elementsContent = [this._Image8_i(),this._Image9_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopPanel_14";
		t.x = 0;
		t.y = 34;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopPanel_24";
		t.x = 28.63;
		t.y = 2.66;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 320.58;
		t.y = 32.66;
		t.elementsContent = [this._Image10_i(),this._Image11_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopPanel_18";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopPanel_26";
		t.x = 31.34;
		t.y = 15.35;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 153.31;
		t.y = 34.66;
		t.elementsContent = [this._Image12_i(),this._Image13_i(),this._Image14_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopPanel_13";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopPanel_4";
		t.x = 26.01;
		t.y = 14.01;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopPanel_10";
		t.x = 103.99;
		t.y = 14.67;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 142.97;
		t.elementsContent = [this._Image15_i(),this._Group5_i(),this._Group6_i(),this._Group7_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopPanel_28";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.x = 12.03;
		t.y = 50;
		t.elementsContent = [this._Image16_i(),this._Image17_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopPanel_14";
		t.x = 0;
		t.y = 34;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopPanel_22";
		t.x = 21.19;
		t.y = -32.02;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.x = 320.58;
		t.y = 32.66;
		t.elementsContent = [this._Image18_i(),this._Image19_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopPanel_18";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopPanel_26";
		t.x = 31.34;
		t.y = 15.35;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.x = 153.31;
		t.y = 34.66;
		t.elementsContent = [this._Image20_i(),this._Image21_i(),this._Image22_i()];
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopPanel_13";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopPanel_10";
		t.x = 103.99;
		t.y = 14.67;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopPanel_3";
		t.x = 26.01;
		t.y = 14.01;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 287;
		t.elementsContent = [this._Image23_i(),this._Group9_i(),this._Group10_i(),this._Group11_i()];
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopPanel_28";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.x = 12.03;
		t.y = 50;
		t.elementsContent = [this._Image24_i(),this._Image25_i()];
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopPanel_14";
		t.x = 0;
		t.y = 34;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopPanel_23";
		t.x = 23.31;
		t.y = -36;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.x = 320.58;
		t.y = 32.66;
		t.elementsContent = [this._Image26_i(),this._Image27_i()];
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopPanel_18";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopPanel_26";
		t.x = 31.34;
		t.y = 15.35;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.x = 153.31;
		t.y = 34.66;
		t.elementsContent = [this._Image28_i(),this._Image29_i(),this._Image30_i()];
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopPanel_13";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopPanel_10";
		t.x = 103.99;
		t.y = 14.67;
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopPanel_8";
		t.x = 26.01;
		t.y = 14.01;
		return t;
	};
	_proto._Group16_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 429.99;
		t.elementsContent = [this._Image31_i(),this._Group13_i(),this._Group14_i(),this._Group15_i()];
		return t;
	};
	_proto._Image31_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopPanel_28";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.x = 12.03;
		t.y = 50;
		t.elementsContent = [this._Image32_i(),this._Image33_i()];
		return t;
	};
	_proto._Image32_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopPanel_14";
		t.x = 0;
		t.y = 34;
		return t;
	};
	_proto._Image33_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopPanel_17";
		t.x = 9.95;
		t.y = -39.99;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.x = 320.58;
		t.y = 32.66;
		t.elementsContent = [this._Image34_i(),this._Image35_i()];
		return t;
	};
	_proto._Image34_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopPanel_18";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image35_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopPanel_26";
		t.x = 31.34;
		t.y = 15.35;
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.x = 153.31;
		t.y = 34.66;
		t.elementsContent = [this._Image36_i(),this._Image37_i(),this._Image38_i()];
		return t;
	};
	_proto._Image36_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopPanel_13";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image37_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopPanel_10";
		t.x = 103.99;
		t.y = 14.67;
		return t;
	};
	_proto._Image38_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopPanel_2";
		t.x = 11.35;
		t.y = 15.34;
		return t;
	};
	_proto.itemBox_i = function () {
		var t = new eui.Group();
		this.itemBox = t;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 10;
		return t;
	};
	return ShopPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/StartSceneSkin.exml'] = window.StartSceneSkin = (function (_super) {
	__extends(StartSceneSkin, _super);
	function StartSceneSkin() {
		_super.call(this);
		this.skinParts = ["_startBtn"];
		
		this.elementsContent = [this._Image1_i(),this._startBtn_i()];
	}
	var _proto = StartSceneSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "startBg_png";
		t.x = 0;
		return t;
	};
	_proto._startBtn_i = function () {
		var t = new eui.Image();
		this._startBtn = t;
		t.anchorOffsetX = 100;
		t.anchorOffsetY = 50;
		t.source = "start_1";
		t.x = 360;
		t.y = 899.99;
		return t;
	};
	return StartSceneSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Task/TaskItemSkin.exml'] = window.TaskItemSkin = (function (_super) {
	__extends(TaskItemSkin, _super);
	function TaskItemSkin() {
		_super.call(this);
		this.skinParts = ["taskDec","btnLabel","_getBtn","starBox"];
		
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this.taskDec_i(),this._getBtn_i(),this.starBox_i()];
	}
	var _proto = TaskItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "otherRes2_40";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 21;
		t.y = 60.97;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "otherRes2_37";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "chipBg_3";
		t.x = 1.33;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "monster_2";
		t.x = 13.77;
		t.y = 17.52;
		return t;
	};
	_proto.taskDec_i = function () {
		var t = new eui.Label();
		this.taskDec = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 112.67;
		t.size = 25;
		t.text = "taskDec";
		t.width = 328.67;
		t.x = 165.01;
		t.y = 42.67;
		return t;
	};
	_proto._getBtn_i = function () {
		var t = new eui.Group();
		this._getBtn = t;
		t.x = 359;
		t.y = 166.32;
		t.elementsContent = [this._Image5_i(),this.btnLabel_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "otherRes2_50";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btnLabel_i = function () {
		var t = new eui.Label();
		this.btnLabel = t;
		t.fontFamily = "Microsoft YaHei";
		t.text = "领取";
		t.x = 38.84;
		t.y = 10.17;
		return t;
	};
	_proto.starBox_i = function () {
		var t = new eui.Group();
		this.starBox = t;
		t.anchorOffsetY = 0;
		t.height = 29.33;
		t.width = 120;
		t.x = 22.33;
		t.y = 20.99;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		return t;
	};
	return TaskItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Task/TaskPanelSkin.exml'] = window.TaskPanelSkin = (function (_super) {
	__extends(TaskPanelSkin, _super);
	function TaskPanelSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","switchBtn2","switchBtn1","treasureBox","taskBox"];
		
		this.width = 660;
		this.elementsContent = [this._Image1_i(),this.closeBtn_i(),this.switchBtn2_i(),this.switchBtn1_i(),this._Group1_i(),this._Group2_i(),this.treasureBox_i(),this.taskBox_i()];
	}
	var _proto = TaskPanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "otherRes2_44";
		t.x = 0;
		t.y = 131.97;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.horizontalCenter = 291;
		t.source = "functionPanel_4";
		t.y = 90.18;
		return t;
	};
	_proto.switchBtn2_i = function () {
		var t = new eui.Group();
		this.switchBtn2 = t;
		t.x = 400;
		t.y = 66;
		t.elementsContent = [this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "otherRes2_35";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "otherRes2_33";
		t.verticalCenter = -1;
		return t;
	};
	_proto.switchBtn1_i = function () {
		var t = new eui.Group();
		this.switchBtn1 = t;
		t.x = 38;
		t.y = 0;
		t.elementsContent = [this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "otherRes2_38";
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 1;
		t.source = "otherRes2_42";
		t.verticalCenter = 2.5;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 440.64;
		t.y = 1073.39;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Label1_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "taskPanel_14";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "item_10";
		t.x = 20;
		t.y = 12;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.size = 20;
		t.text = "X2";
		t.width = 64;
		t.x = 56;
		t.y = 28;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 253.9;
		t.y = 1052.05;
		t.elementsContent = [this._Image8_i(),this._Image9_i(),this._Label2_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "otherRes2_41";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "otherRes2_45";
		t.x = 86.01;
		t.y = 16.52;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.stroke = 2;
		t.text = "02:00";
		t.x = 92.04;
		t.y = 45;
		return t;
	};
	_proto.treasureBox_i = function () {
		var t = new eui.Group();
		this.treasureBox = t;
		t.height = 737.33;
		t.width = 507;
		t.x = 70.33;
		t.y = 215;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 30;
		return t;
	};
	_proto.taskBox_i = function () {
		var t = new eui.Group();
		this.taskBox = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 737.33;
		t.width = 507;
		t.x = 70.33;
		t.y = 215;
		t.layout = this._VerticalLayout2_i();
		return t;
	};
	_proto._VerticalLayout2_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 30;
		return t;
	};
	return TaskPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Task/TaskTreasureItemSkin.exml'] = window.TaskTreasureItemSkin = (function (_super) {
	__extends(TaskTreasureItemSkin, _super);
	function TaskTreasureItemSkin() {
		_super.call(this);
		this.skinParts = ["treasureImg","taskDec","btnLabel","_getBtn","starBox"];
		
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this.taskDec_i(),this._getBtn_i(),this.starBox_i()];
	}
	var _proto = TaskTreasureItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "otherRes2_40";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 21;
		t.y = 60.97;
		t.elementsContent = [this._Image2_i(),this.treasureImg_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "otherRes2_37";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.treasureImg_i = function () {
		var t = new eui.Image();
		this.treasureImg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "treasureBox_3";
		t.x = 25.77;
		t.y = 33.52;
		return t;
	};
	_proto.taskDec_i = function () {
		var t = new eui.Label();
		this.taskDec = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 112.67;
		t.size = 25;
		t.text = "taskDec";
		t.width = 328.67;
		t.x = 165.01;
		t.y = 42.67;
		return t;
	};
	_proto._getBtn_i = function () {
		var t = new eui.Group();
		this._getBtn = t;
		t.x = 359;
		t.y = 166.32;
		t.elementsContent = [this._Image3_i(),this.btnLabel_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "otherRes2_50";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btnLabel_i = function () {
		var t = new eui.Label();
		this.btnLabel = t;
		t.fontFamily = "Microsoft YaHei";
		t.text = "领取";
		t.x = 38.84;
		t.y = 10.17;
		return t;
	};
	_proto.starBox_i = function () {
		var t = new eui.Group();
		this.starBox = t;
		t.anchorOffsetY = 0;
		t.height = 29.33;
		t.width = 120;
		t.x = 22.33;
		t.y = 20.99;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		return t;
	};
	return TaskTreasureItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TurnTable/TurntableGainPanelSkin.exml'] = window.TurntableGainPanelSkin = (function (_super) {
	__extends(TurntableGainPanelSkin, _super);
	function TurntableGainPanelSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","awardImg","awardDec"];
		
		this.elementsContent = [this._Image1_i(),this.closeBtn_i(),this.awardImg_i(),this.awardDec_i()];
	}
	var _proto = TurntableGainPanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "Turntable_json.Turntable_3";
		t.x = 0;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.source = "Turntable_json.Turntable_2";
		t.x = 423;
		t.y = 59;
		return t;
	};
	_proto.awardImg_i = function () {
		var t = new eui.Image();
		this.awardImg = t;
		t.source = "Turntable_json.Turntable_7";
		t.x = 200;
		t.y = 275;
		return t;
	};
	_proto.awardDec_i = function () {
		var t = new eui.Label();
		this.awardDec = t;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.size = 40;
		t.stroke = 1;
		t.strokeColor = 0xffffff;
		t.text = "获得1枚游戏币";
		t.textColor = 0x000000;
		t.x = 117;
		t.y = 399;
		return t;
	};
	return TurntableGainPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TurnTable/TurntableSkin.exml'] = window.TurntableSkin = (function (_super) {
	__extends(TurntableSkin, _super);
	function TurntableSkin() {
		_super.call(this);
		this.skinParts = ["bg","closeBtn","turnTableBody","getFont","_startBtn"];
		
		this.elementsContent = [this.bg_i(),this.closeBtn_i(),this.turnTableBody_i(),this._Image9_i(),this._startBtn_i()];
	}
	var _proto = TurntableSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.anchorOffsetX = 0;
		t.source = "Turntable_13";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.source = "functionPanel_4";
		t.x = 534.66;
		t.y = 19.15;
		return t;
	};
	_proto.turnTableBody_i = function () {
		var t = new eui.Group();
		this.turnTableBody = t;
		t.anchorOffsetX = 319.5;
		t.anchorOffsetY = 319;
		t.rotation = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = true;
		t.x = 334;
		t.y = 352;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Group1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 320;
		t.anchorOffsetY = 320;
		t.rotation = 0;
		t.source = "Turntable_json.Turntable_4";
		t.x = 318.01;
		t.y = 317.98;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.rotation = 0;
		t.source = "Turntable_json.Turntable_7";
		t.x = 273.35;
		t.y = 78.57;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.rotation = 60;
		t.source = "Turntable_json.Turntable_8";
		t.x = 501.62;
		t.y = 163.26;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.rotation = 120;
		t.source = "Turntable_json.Turntable_9";
		t.x = 551.62;
		t.y = 393.74;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.rotation = 180;
		t.source = "Turntable_json.Turntable_11";
		t.x = 373.35;
		t.y = 557.49;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.rotation = 300;
		t.source = "Turntable_json.Turntable_10";
		t.x = 66.68;
		t.y = 248.97;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.rotation = 240;
		t.x = 129.2;
		t.y = 496.24;
		t.elementsContent = [this._Image7_i(),this._Image8_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "Turntable_json.Turntable_11";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "Turntable_json.Turntable_11";
		t.x = 53;
		t.y = 25;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.source = "Turntable_14";
		t.touchEnabled = false;
		t.x = 8;
		t.y = 25;
		return t;
	};
	_proto._startBtn_i = function () {
		var t = new eui.Group();
		this._startBtn = t;
		t.x = 240;
		t.y = 214;
		t.elementsContent = [this._Image10_i(),this.getFont_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "Turntable_json.Turntable_1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.getFont_i = function () {
		var t = new eui.Image();
		this.getFont = t;
		t.anchorOffsetX = 55;
		t.anchorOffsetY = 30;
		t.source = "Turntable_12";
		t.x = 90;
		t.y = 140.74;
		return t;
	};
	return TurntableSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/WorldMapSkin.exml'] = window.WorldMapSkin = (function (_super) {
	__extends(WorldMapSkin, _super);
	function WorldMapSkin() {
		_super.call(this);
		this.skinParts = ["_illustrationsBtn","_battleBtn"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this._illustrationsBtn_i(),this._Group1_i(),this._battleBtn_i(),this._Group2_i()];
	}
	var _proto = WorldMapSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "otherRes1_14";
		t.y = -2;
		return t;
	};
	_proto._illustrationsBtn_i = function () {
		var t = new eui.Group();
		this._illustrationsBtn = t;
		t.x = -1.5;
		t.y = 318;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "otherRes1_15";
		t.x = 56.5;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "otherRes1_18";
		t.x = 0;
		t.y = 99;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "otherRes1_17";
		t.x = 94;
		t.y = 117;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 298.5;
		t.y = 332;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this._Image7_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "otherRes1_16";
		t.x = 25.5;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "otherRes1_18";
		t.x = 0;
		t.y = 72;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "otherRes1_22";
		t.x = 71.5;
		t.y = 91;
		return t;
	};
	_proto._battleBtn_i = function () {
		var t = new eui.Group();
		this._battleBtn = t;
		t.x = 321.35;
		t.y = 713;
		t.elementsContent = [this._Image8_i(),this._Image9_i(),this._Image10_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "otherRes1_20";
		t.x = 4;
		t.y = 0;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "otherRes1_18";
		t.x = 0;
		t.y = 185.66;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "otherRes1_19";
		t.x = 65.15;
		t.y = 203.82;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 4;
		t.y = 752;
		t.elementsContent = [this._Image11_i(),this._Image12_i(),this._Image13_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "otherRes1_23";
		t.x = 31;
		t.y = 0;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "otherRes1_18";
		t.x = 0;
		t.y = 108.5;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "otherRes1_21";
		t.x = 62.5;
		t.y = 128.5;
		return t;
	};
	return WorldMapSkin;
})(eui.Skin);