var egret = window.egret;var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * 游戏对象基类
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var GameObject = (function (_super) {
        __extends(GameObject, _super);
        function GameObject() {
            var _this = _super.call(this) || this;
            /**
             * uid
             */
            _this.uID = NaN;
            /**
             * 携带参数
             */
            _this.varsData = null;
            /**
             * 是否可以被释放
             */
            _this.canDispose = false;
            /**
             * 引用计数
             */
            _this.refCount = 0;
            return _this;
        }
        /**
         * 设置数据
         */
        GameObject.prototype.setData = function (sign, uID, varsData, layerType) {
            if (layerType === void 0) { layerType = 4 /* MONSTER */; }
            this.sign = sign;
            this.uID = uID;
            this.varsData = varsData;
            this.layerType = layerType;
        };
        /**
         * 释放
         */
        GameObject.prototype.dispose = function () {
            this.varsData = null;
        };
        return GameObject;
    }(egret.DisplayObjectContainer));
    catchDoll.GameObject = GameObject;
    __reflect(GameObject.prototype, "catchDoll.GameObject");
})(catchDoll || (catchDoll = {}));
/**
 * 游戏物体渲染对象
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var GameObjectRender = (function (_super) {
        __extends(GameObjectRender, _super);
        function GameObjectRender() {
            var _this = _super.call(this) || this;
            /**
             * 渲染对象
             */
            _this._imagePlayer = null;
            /**
             * 渲染对象
             */
            _this._moviePlayer = null;
            /**
             * 龙骨
             */
            _this._dragonBones = null;
            /**
             * 是否在视图内
             */
            _this.isInView = false;
            return _this;
        }
        Object.defineProperty(GameObjectRender.prototype, "imagePlayer", {
            get: function () {
                return this._imagePlayer;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 加载资源
         */
        GameObjectRender.prototype.loadConfigAsset = function (assetData) {
            var imageAry = assetData.imageAry;
            if (imageAry) {
                this._imagePlayer = new ImagePlayer();
                for (var i = 0; i < imageAry.length; i++) {
                    this._imagePlayer.push(imageAry[i]);
                }
                this.addChild(this._imagePlayer);
            }
            var movieClipAry = assetData.movieClipAry;
            if (movieClipAry) {
                this._moviePlayer = new MoviePlayer();
                for (var i = 0; i < movieClipAry.length; i++) {
                    this._moviePlayer.push(movieClipAry[i]);
                }
                this.addChild(this._moviePlayer);
            }
            if (assetData.dragonBonesName) {
                this._dragonBones = UIUtil.creatDragonbones(assetData.dragonBonesName);
                this.addChild(this._dragonBones);
            }
        };
        /**
         * 加载配置
         */
        GameObjectRender.prototype.loadConfigData = function (initOnce) {
        };
        /**
          * 只初始化一次（在loadConfig之后调用）
          */
        GameObjectRender.prototype.initOther = function () {
        };
        /**
         * 初始化
         */
        GameObjectRender.prototype.initialize = function () {
            if (this.varsData.bornX) {
                this.x = this.varsData.bornX;
            }
            else {
                this.x = -1000;
            }
            if (this.varsData.bornY) {
                this.y = this.varsData.bornY;
            }
            else {
                this.y = -1000;
            }
            if (this.varsData.rotation) {
                this.rotation = this.varsData.rotation;
            }
            catchDoll.LayerManager.instance.addToLayer(this, this.layerType);
            this.isInView = true;
        };
        /**
         * 反初始化
         */
        GameObjectRender.prototype.uninitialize = function () {
            if (this._moviePlayer) {
                this._moviePlayer.stop();
            }
            if (this._dragonBones) {
                this._dragonBones.animation.stop();
            }
            catchDoll.LayerManager.instance.removeFromLayer(this);
            this.isInView = false;
        };
        /**
         * 释放
         */
        GameObjectRender.prototype.dispose = function () {
            if (this._moviePlayer) {
                this._moviePlayer.dispose();
                this._moviePlayer = null;
            }
            if (this._imagePlayer) {
                this._imagePlayer.dispose();
                this._imagePlayer = null;
            }
            if (this._dragonBones) {
                this._dragonBones.dispose();
                this._dragonBones = null;
            }
            _super.prototype.dispose.call(this);
        };
        return GameObjectRender;
    }(catchDoll.GameObject));
    catchDoll.GameObjectRender = GameObjectRender;
    __reflect(GameObjectRender.prototype, "catchDoll.GameObjectRender");
})(catchDoll || (catchDoll = {}));
/**
* 代理逻辑交互对象
* @author suo
*/
var InteractiveObject = (function () {
    function InteractiveObject(root) {
        /*callback function*/
        this._mouseDownHandler = null;
        this._mouseUpHandler = null;
        this._mouseOutsideHandler = null;
        this._mouseDownAndMoveHandler = null;
        this._mouseClickHandler = null;
        this._touchCancleHandler = null;
        if (root == null) {
            console.assert(false, "请检查传入参数是否为egret.DisplayObject!");
        }
        this._root = root;
        this._root.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onMouseDown, this);
        this._root.addEventListener(egret.TouchEvent.TOUCH_END, this.onMouseUp, this);
        this._root.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onMouseOustide, this);
        this._root.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMouseDownAndMove, this);
        this._root.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMouseClick, this);
        this._root.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onTouchCancle, this);
    }
    /*鼠标按下事件*/
    InteractiveObject.prototype.onMouseDown = function (e, data) {
        if (data === void 0) { data = null; }
        if (this._mouseDownHandler != null) {
            this._mouseDownHandler.runWith(e);
        }
    };
    /*鼠标抬起事件*/
    InteractiveObject.prototype.onMouseUp = function (e) {
        if (this._mouseUpHandler != null) {
            this._mouseUpHandler.runWith(e);
        }
    };
    /**
     * 取消触摸
     */
    InteractiveObject.prototype.onTouchCancle = function (e) {
        if (this._touchCancleHandler) {
            this._touchCancleHandler.runWith(e);
        }
    };
    /*鼠标OutSide事件*/
    InteractiveObject.prototype.onMouseOustide = function (e) {
        if (this._mouseOutsideHandler != null) {
            this._mouseOutsideHandler.runWith(e);
        }
    };
    /*鼠标悬浮事件*/
    InteractiveObject.prototype.onMouseDownAndMove = function (e) {
        if (this._mouseDownAndMoveHandler != null) {
            this._mouseDownAndMoveHandler.runWith(e);
        }
    };
    /*鼠标点击事件*/
    InteractiveObject.prototype.onMouseClick = function (e) {
        if (this._mouseClickHandler != null) {
            this._mouseClickHandler.runWith(e);
        }
    };
    /*释放*/
    InteractiveObject.prototype.dispose = function () {
        this._root.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onMouseDown, this);
        this._root.removeEventListener(egret.TouchEvent.TOUCH_END, this.onMouseUp, this);
        this._root.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onMouseOustide, this);
        this._root.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMouseDownAndMove, this);
        this._root.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onMouseClick, this);
        this._root.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onTouchCancle, this);
        if (this._mouseDownHandler != null) {
            this._mouseDownHandler.recover();
            this._mouseDownHandler = null;
        }
        if (this._mouseUpHandler) {
            this._mouseUpHandler.recover();
            this._mouseUpHandler = null;
        }
        if (this._mouseOutsideHandler) {
            this._mouseOutsideHandler.recover();
            this._mouseOutsideHandler = null;
        }
        if (this._mouseDownAndMoveHandler) {
            this._mouseDownAndMoveHandler.recover();
            this._mouseDownAndMoveHandler = null;
        }
        if (this._touchCancleHandler) {
            this._touchCancleHandler.recover();
            this._touchCancleHandler = null;
        }
        if (this._root instanceof egret.MovieClip) {
            this._root.stop();
        }
        this._root = null;
    };
    Object.defineProperty(InteractiveObject.prototype, "mouseDownHandler", {
        set: function (value) {
            this._mouseDownHandler = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InteractiveObject.prototype, "mouseUpHandler", {
        set: function (value) {
            this._mouseUpHandler = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InteractiveObject.prototype, "mouseOutsideHandler", {
        set: function (value) {
            this._mouseOutsideHandler = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InteractiveObject.prototype, "mouseDownAndMoveHandler", {
        set: function (value) {
            this._mouseDownAndMoveHandler = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InteractiveObject.prototype, "mouseClickHandler", {
        set: function (value) {
            this._mouseClickHandler = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InteractiveObject.prototype, "touchCancleHandler", {
        set: function (value) {
            this._touchCancleHandler = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InteractiveObject.prototype, "root", {
        get: function () {
            return this._root;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InteractiveObject.prototype, "visible", {
        /**
         * 设置是否可见
         */
        set: function (value) {
            this._root.visible = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InteractiveObject.prototype, "x", {
        /**
         * 获得x坐标
         */
        get: function () {
            return this._root.x;
        },
        /**
         * 设置x坐标
         */
        set: function (value) {
            this._root.x = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InteractiveObject.prototype, "y", {
        /**
         * 获得y坐标
         */
        get: function () {
            return this._root.y;
        },
        /**
         * 设置y坐标
         */
        set: function (value) {
            this._root.y = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InteractiveObject.prototype, "width", {
        /**
         * 获得宽
         */
        get: function () {
            return this._root.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InteractiveObject.prototype, "height", {
        /**
         * 获得高
         */
        get: function () {
            return this._root.height;
        },
        enumerable: true,
        configurable: true
    });
    return InteractiveObject;
}());
__reflect(InteractiveObject.prototype, "InteractiveObject");
/**
 * 原作者 momo
 * @author suo
 */
var BaseUIManager = (function () {
    function BaseUIManager() {
        this.id = 0;
        this._resDatas = new Array();
        this._onInitedCallBack = null;
        this._loadedCount = 0;
        this._dataCenter = null;
        this._viewCenter = null;
        this._controlCenter = null;
        this._dataCenter = new UIDataCenter();
        this._viewCenter = new UIViewCenter();
        this._controlCenter = new UIControlCenter(this, this._dataCenter, this._viewCenter);
    }
    BaseUIManager.prototype.dispose = function () {
        if (this._controlCenter != null) {
            this._controlCenter.dispose();
            this._controlCenter = null;
        }
        if (this._viewCenter != null) {
            this._viewCenter.dispose();
            this._viewCenter = null;
        }
        if (this._dataCenter != null) {
            this._dataCenter.dispose();
            this._dataCenter = null;
        }
    };
    BaseUIManager.prototype.open = function (onInitCallBack, param) {
        if (null == this._dataCenter ||
            this._dataCenter.isLoading ||
            this._dataCenter.isOpened) {
            if (this._controlCenter != null) {
                this._controlCenter.onOpenAgain();
            }
            return;
        }
        this._onInitedCallBack = onInitCallBack;
        this._dataCenter.openParam = param;
        if (this._dataCenter.isLoaded) {
            this.doOpen();
        }
        else {
            this.doLoad();
        }
    };
    BaseUIManager.prototype.close = function () {
        if (null == this._dataCenter ||
            this._dataCenter.isLoading ||
            !this._dataCenter.isOpened) {
            return;
        }
        this.doHide();
    };
    BaseUIManager.prototype.hide = function () {
        if (null == this._dataCenter ||
            this._dataCenter.isLoading ||
            !this._dataCenter.isOpened) {
            return;
        }
        this.doHide();
    };
    BaseUIManager.prototype.addControl = function (className) {
        if (className == null) {
            return;
        }
        this._controlCenter.addControl(className);
    };
    BaseUIManager.prototype.getControl = function (className) {
        if (null == this._controlCenter) {
            return null;
        }
        return this._controlCenter.getControl(className);
    };
    BaseUIManager.prototype.addData = function (className) {
        if (this._dataCenter == null) {
            return;
        }
        this._dataCenter.addData(className);
    };
    BaseUIManager.prototype.getData = function (className) {
        if (this._dataCenter == null) {
            return null;
        }
        return this._dataCenter.getData(className);
    };
    BaseUIManager.prototype.addView = function (className) {
        if (this._viewCenter == null) {
            return;
        }
        this._viewCenter.addView(className);
    };
    BaseUIManager.prototype.getView = function (className) {
        if (this._viewCenter == null) {
            return null;
        }
        return this._viewCenter.getView(className);
    };
    BaseUIManager.prototype.addResData = function (data) {
        this._resDatas.push(data);
    };
    Object.defineProperty(BaseUIManager.prototype, "isOpened", {
        get: function () {
            if (this._dataCenter || !this._dataCenter.isOpened) {
                return false;
            }
            return true;
        },
        enumerable: true,
        configurable: true
    });
    BaseUIManager.prototype.setOpenParam = function (param) {
        if (this._dataCenter == null) {
            return;
        }
        this._dataCenter.openParam = param;
    };
    BaseUIManager.prototype.getOpenParam = function () {
        if (this._dataCenter != null) {
            return this._dataCenter.openParam;
        }
        return null;
    };
    BaseUIManager.prototype.doLoad = function () {
        if (this._dataCenter == null) {
            return;
        }
        this._dataCenter.isLoading = true;
        this._loadedCount = 0;
        if (this._resDatas.length <= 0) {
            this.loadComplete();
        }
        else {
            for (var i = 0; i < this._resDatas.length; i++) {
                var resData = this._resDatas[i];
                if (resData != null) {
                    RES.getResByUrl(resData.url, this.loadComplete, this, resData.resType);
                }
            }
        }
    };
    BaseUIManager.prototype.loadComplete = function () {
        this._loadedCount++;
        if (this._loadedCount >= this._resDatas.length) {
            if (this._dataCenter == null ||
                this._viewCenter == null || this._controlCenter == null) {
                return;
            }
            this._dataCenter.isLoading = false;
            this._dataCenter.isLoaded = true;
            this.doOpen();
        }
    };
    BaseUIManager.prototype.doOpen = function () {
        if (this._dataCenter == null || this._viewCenter == null || this._controlCenter == null) {
            return;
        }
        this._dataCenter.onInit();
        this._viewCenter.onInit();
        this._controlCenter.onInit();
        this._dataCenter.isOpened = true;
        this._dataCenter.onShow();
        this._viewCenter.onShow();
        this._controlCenter.onShow();
        if (this._onInitedCallBack != null) {
            this._onInitedCallBack.call(this._onInitedCallBack, this.id);
        }
    };
    BaseUIManager.prototype.doHide = function () {
        if (this._dataCenter == null || this._viewCenter == null || this._controlCenter == null) {
            return;
        }
        this._controlCenter.onHide();
        this._viewCenter.onHide();
        this._dataCenter.onHide();
        this._dataCenter.isOpened = false;
    };
    return BaseUIManager;
}());
__reflect(BaseUIManager.prototype, "BaseUIManager");
/**
 * 原作者 momo
 * @author suo
 */
var BaseUICenter = (function () {
    function BaseUICenter() {
        /*管理器集合*/
        this._managers = new Map();
        /*已经打开的UI面板*/
        this._openingUI = new Array();
    }
    BaseUICenter.prototype.addManager = function (id, className) {
        if (className == null) {
            return;
        }
        var manager = new className();
        manager.id = id;
        this._managers.addValue(id, manager);
    };
    BaseUICenter.prototype.getManager = function (id) {
        if (this._managers == null) {
            return null;
        }
        return this._managers.getValueByKey(id);
    };
    BaseUICenter.prototype.isExist = function (id) {
        if (this._managers == null) {
            return false;
        }
        return this._managers.isExist(id);
    };
    BaseUICenter.prototype.getOpenParam = function (id) {
        var manager = this.getManager(id);
        if (manager != null) {
            return manager.getOpenParam();
        }
        return null;
    };
    BaseUICenter.prototype.setOpenParam = function (id, param) {
        var manager = this.getManager(id);
        if (manager != null) {
            return manager.setOpenParam(param);
        }
        return null;
    };
    BaseUICenter.prototype.isOpen = function (id) {
        var manager = this.getManager(id);
        if (manager != null) {
            return manager.isOpened;
        }
        return true;
    };
    BaseUICenter.prototype.openUI = function (id, param) {
        if (param === void 0) { param = null; }
        var manager = this.getManager(id);
        if (manager != null) {
            this._openingUI.push(id);
            manager.open(this.onUIinitCallBack, param);
        }
    };
    BaseUICenter.prototype.closeUI = function (id) {
        var manager = this.getManager(id);
        if (manager != null) {
            manager.close();
            var index = this._openingUI.indexOf(id);
            if (index != -1) {
                this._openingUI.splice(index, 1);
            }
        }
    };
    BaseUICenter.prototype.closeAll = function () {
        var index = -1;
        while (this._openingUI.length != 0) {
            index = this._openingUI.pop();
            var manager = this.getManager(index);
            if (manager != null) {
                manager.close();
            }
        }
    };
    BaseUICenter.prototype.onUIinitCallBack = function (id) {
        if (this._openingUI != null) {
            this._openingUI.push(id);
        }
        else {
            this._openingUI = new Array();
            this._openingUI.push(id);
        }
    };
    BaseUICenter.prototype.dispose = function () {
        if (this._managers != null) {
            for (var i = 0; i < this._managers.length; i++) {
                var manager = this._managers.getValueByIndex(i);
                if (manager != null) {
                    manager.dispose();
                    manager = null;
                }
            }
            this._managers.dispose();
            this._managers = null;
        }
        if (this._openingUI != null) {
            this._openingUI.splice(0, this._openingUI.length);
            this._openingUI = null;
        }
    };
    return BaseUICenter;
}());
__reflect(BaseUICenter.prototype, "BaseUICenter");
/**
 * 原作者 momo
 * @author suo
 */
var BaseUIControl = (function () {
    function BaseUIControl() {
        this._dataCenter = null;
        this._viewCenter = null;
    }
    BaseUIControl.prototype.init = function (dataCenter, viewCenter) {
        this._dataCenter = dataCenter;
        this._viewCenter = viewCenter;
    };
    BaseUIControl.prototype.onInit = function () {
    };
    BaseUIControl.prototype.onShow = function () {
    };
    BaseUIControl.prototype.onOpenAgain = function () {
    };
    BaseUIControl.prototype.onHide = function () {
    };
    BaseUIControl.prototype.dispose = function () {
        this._viewCenter = null;
        this._dataCenter = null;
    };
    return BaseUIControl;
}());
__reflect(BaseUIControl.prototype, "BaseUIControl");
/**
 * 带碰撞器的物体对象
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var GameObjectCollider = (function (_super) {
        __extends(GameObjectCollider, _super);
        function GameObjectCollider() {
            var _this = _super.call(this) || this;
            /**
             * 碰撞器
             */
            _this.colliderAry = [];
            /**
             * 是否已经发生碰撞
             */
            _this.isCollided = false;
            return _this;
        }
        /**
         * 初始化一次
         */
        GameObjectCollider.prototype.loadConfigData = function (data) {
            for (var i = 0; i < data.colliderAry.length; i++) {
                var colliderData = data.colliderAry[i];
                var collider = catchDoll.Collider.creat(colliderData.posX, colliderData.posY, colliderData.radius);
                collider.setParent(this);
                this.colliderAry.push(collider);
            }
        };
        /**
         * 反初始化
         */
        GameObjectCollider.prototype.uninitialize = function () {
            this.isCollided = false;
            _super.prototype.uninitialize.call(this);
        };
        /**
         * 释放
         */
        GameObjectCollider.prototype.dispose = function () {
            if (this.colliderAry.length != 0) {
                for (var i = 0; i < this.colliderAry.length; i++) {
                    this.colliderAry[i].recover();
                }
                this.colliderAry.length = 0;
            }
            _super.prototype.dispose.call(this);
        };
        return GameObjectCollider;
    }(catchDoll.GameObjectRender));
    catchDoll.GameObjectCollider = GameObjectCollider;
    __reflect(GameObjectCollider.prototype, "catchDoll.GameObjectCollider");
})(catchDoll || (catchDoll = {}));
/**
 * 操作控制器基类
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var BaseOperation = (function () {
        function BaseOperation() {
        }
        /**
         * 帧循环
         */
        BaseOperation.prototype.enterFrame = function () {
        };
        return BaseOperation;
    }());
    catchDoll.BaseOperation = BaseOperation;
    __reflect(BaseOperation.prototype, "catchDoll.BaseOperation");
})(catchDoll || (catchDoll = {}));
/**
* 单帧按钮
* @author suo
*/
var Button = (function (_super) {
    __extends(Button, _super);
    function Button(root, soundName, canExpand, isOffset) {
        if (soundName === void 0) { soundName = null; }
        if (canExpand === void 0) { canExpand = false; }
        if (isOffset === void 0) { isOffset = false; }
        var _this = _super.call(this, root) || this;
        /*是否可以点击*/
        _this._enabled = true;
        /*声音源*/
        _this._soundName = null;
        /*点击会放大*/
        _this._canExpand = false;
        /*携带数据*/
        _this.data = null;
        if (root instanceof egret.DisplayObjectContainer) {
            root.touchChildren = false;
        }
        _this._canExpand = canExpand;
        if (isOffset) {
            if (root instanceof eui.Image) {
                root.once(egret.Event.RENDER, function () {
                    _this._root.anchorOffsetX = _this.width / 2;
                    _this._root.anchorOffsetY = _this.height / 2;
                    _this._root.x += _this.width / 2;
                    _this._root.y += _this.height / 2;
                }, null);
            }
            else {
                _this._root.anchorOffsetX = _this.width / 2;
                _this._root.anchorOffsetY = _this.height / 2;
                _this._root.x += _this.width / 2;
                _this._root.y += _this.height / 2;
            }
        }
        _this.setSound(soundName);
        return _this;
    }
    /**
     * 设置文本
     */
    Button.prototype.setLabel = function (str, size, OffsetX, offsetY) {
        if (OffsetX === void 0) { OffsetX = 0; }
        if (offsetY === void 0) { offsetY = 0; }
        var label = new eui.Label();
        label.text = str;
        label.size = size;
        if (this._root instanceof egret.DisplayObjectContainer) {
            this._root.addChild(label);
            label.x = (this._root.width - label.width) / 2 + OffsetX;
            label.y = (this._root.height - label.height) / 2 + offsetY;
        }
        else if (this._root.parent) {
            this._root.parent.addChild(label);
            label.x = (this._root.width - label.width) / 2 + this._root.x + OffsetX;
            label.y = (this._root.height - label.height) / 2 + this._root.y + offsetY;
        }
    };
    // /**
    //  * 取消触摸
    //  */
    // protected onTouchCancle(e:egret.Event):void{
    // 	super.onTouchCancle(e);
    // 	this.changeStatus(BTN_STATE.STATUS_DEFAULT);
    // }
    /**
     * 设置声音
     */
    Button.prototype.setSound = function (name) {
        this._soundName = name;
    };
    /**
     * 鼠标OutSide事件
     */
    Button.prototype.onMouseOustide = function (e) {
        _super.prototype.onMouseOustide.call(this, e);
        this.changeStatus(BTN_STATE.STATUS_DEFAULT);
        if (this._canExpand) {
            this._root.scaleX = this._root.scaleY = 1;
        }
    };
    /**
     * 鼠标按下函数
     */
    Button.prototype.onMouseDown = function (e) {
        _super.prototype.onMouseDown.call(this, e);
        this.changeStatus(BTN_STATE.STATUS_HIGH_LIGHT);
        // if (this._soundName != null) {
        // 	SoundManager.instance.playSoundByName(this._soundName);
        // }
        if (this._canExpand) {
            this._root.scaleX = this._root.scaleY = 1.1;
        }
    };
    /**
     * 鼠标抬起函数
     */
    Button.prototype.onMouseUp = function (e) {
        _super.prototype.onMouseUp.call(this, e);
        this.changeStatus(BTN_STATE.STATUS_DEFAULT);
        if (this._canExpand) {
            this._root.scaleX = this._root.scaleY = 1;
        }
    };
    /**
     * 鼠标点击函数
     */
    Button.prototype.onMouseClick = function (e) {
        if (this._mouseClickHandler != null) {
            this._mouseClickHandler.runWith(this);
        }
    };
    /**
     * 释放
     */
    Button.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
    };
    Object.defineProperty(Button.prototype, "enabled", {
        /**
         * 获得按钮鼠标state
         */
        get: function () {
            return this._enabled;
        },
        /**
         * 设置鼠标事件是否启用
         */
        set: function (value) {
            if (this._enabled != value) {
                this._enabled = value;
                this._root.touchEnabled = value;
                if (this._enabled) {
                    this.changeStatus(BTN_STATE.STATUS_DEFAULT);
                }
                else {
                    this.changeStatus(BTN_STATE.STATUS_GRAY);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 改变按钮状态
     */
    Button.prototype.changeStatus = function (status) {
        var matrix;
        var stateFilter;
        switch (status) {
            case BTN_STATE.STATUS_DEFAULT:
                stateFilter = null;
                break;
            case BTN_STATE.STATUS_HIGH_LIGHT:
                matrix =
                    [1, 0, 0, 0, 0xff * 0.2,
                        0, 1, 0, 0, 0xe0 * 0.2,
                        0, 0, 1, 0, 0x8d * 0.2,
                        0, 0, 0, 1, 0]; // alpha
                stateFilter = new egret.ColorMatrixFilter(matrix);
                break;
            case BTN_STATE.STATUS_DOWN:
                matrix =
                    [1, 0, 0, 0, -30,
                        0, 1, 0, 0, -30,
                        0, 0, 1, 0, -30,
                        0, 0, 0, 1, 0]; // alpha
                stateFilter = new egret.ColorMatrixFilter(matrix);
                break;
            case BTN_STATE.STATUS_GRAY:
                matrix = [0.3086, 0.6094, 0.0820, 0, 0,
                    0.3086, 0.6094, 0.0820, 0, 0,
                    0.3086, 0.6094, 0.0820, 0, 0,
                    0, 0, 0, 1, 0]; // alpha
                stateFilter = new egret.ColorMatrixFilter(matrix);
                break;
        }
        if (null == stateFilter) {
            this._root.filters = [];
        }
        else {
            this._root.filters = [stateFilter];
        }
    };
    return Button;
}(InteractiveObject));
__reflect(Button.prototype, "Button");
var BTN_STATE;
(function (BTN_STATE) {
    BTN_STATE[BTN_STATE["STATUS_DEFAULT"] = 0] = "STATUS_DEFAULT";
    BTN_STATE[BTN_STATE["STATUS_HIGH_LIGHT"] = 1] = "STATUS_HIGH_LIGHT";
    BTN_STATE[BTN_STATE["STATUS_DOWN"] = 2] = "STATUS_DOWN";
    BTN_STATE[BTN_STATE["STATUS_GRAY"] = 3] = "STATUS_GRAY";
})(BTN_STATE || (BTN_STATE = {}));
/**
 *  <code>DictionaryFast</code>是一个字典型的数据存取类。
 * 	与Dictionary相比更为高效，但键值仅只能为string类型
 * 	由于string类型的键值已能满足大部分需求 所以单独写成一个类
 *  @author suo
 */
var SimpleMap = (function () {
    function SimpleMap() {
    }
    Object.defineProperty(SimpleMap.prototype, "keys", {
        get: function () {
            return Object.getOwnPropertyNames(this);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 给指定的键名设置值。
     * @param	key 键名。
     * @param	value 值。
     */
    SimpleMap.prototype.set = function (key, value) {
        this[key] = value;
    };
    /**
     * 返回指定键名的值。
     * @param	key 键名对象。
     * @return 指定键名的值。
     */
    SimpleMap.prototype.get = function (key) {
        if (this.isExist(key)) {
            return this[key];
        }
        else {
            return null;
        }
    };
    /**
     * 返回指定键名的值。
     * @param	key 键索引。
     * @return 指定键名的值。
     */
    SimpleMap.prototype.getByKeyIndex = function (index) {
        return this[this.keys[index]];
    };
    /**
     * 是否存在该键
     */
    SimpleMap.prototype.isExist = function (key) {
        var result = this[key];
        if (result === void 0) {
            return false;
        }
        else {
            return true;
        }
    };
    Object.defineProperty(SimpleMap.prototype, "length", {
        /**
         * 获得字典长度
         */
        get: function () {
            return this.keys.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 移除指定键名的值。
     * @param	key 键名对象。
     * @return 是否成功移除。
     */
    SimpleMap.prototype.remove = function (key) {
        if (this.isExist(key)) {
            delete this[key];
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * 清理
     */
    SimpleMap.prototype.clear = function () {
        var keys = this.keys.slice();
        for (var i = 0; i < keys.length; i++) {
            delete this[keys[i]];
        }
    };
    /**
     * 回收
     */
    SimpleMap.prototype.recover = function () {
        this.clear();
        Pool.recover("simpleMap", this);
    };
    /**
     * 拷贝字典
     */
    SimpleMap.prototype.copy = function () {
        var map = Pool.getItemByClass("simpleMap", SimpleMap);
        var keys = this.keys.slice();
        for (var i = 0; i < keys.length; i++) {
            map.set(keys[i], this[keys[i]]);
        }
        return map;
    };
    return SimpleMap;
}());
__reflect(SimpleMap.prototype, "SimpleMap");
/**
 * 弹出面板基类
 * @author suo
 * 2018.4.4
 */
var catchDoll;
(function (catchDoll) {
    var Shape = egret.Shape;
    var BasePopPanel = (function (_super) {
        __extends(BasePopPanel, _super);
        function BasePopPanel(enterEff, blackBg, alpha) {
            if (enterEff === void 0) { enterEff = 1 /* CENTER */; }
            if (blackBg === void 0) { blackBg = false; }
            if (alpha === void 0) { alpha = 0.5; }
            var _this = _super.call(this) || this;
            _this._blakBG = new Shape();
            _this._drawBar = new Shape();
            _this._posX = -1;
            _this._posY = -1;
            _this._hasBlackBg = false;
            _this._alpha = 0.5;
            _this._lastPointX = -1;
            _this._lastPointY = -1;
            _this._panelWidth = -1;
            _this._panelHeight = -1;
            _this._panelX = 0;
            _this._panelY = 0;
            /*通用关闭按钮*/
            _this.commonCloseBtn = null;
            _this._alpha = alpha;
            _this._hasBlackBg = blackBg;
            _this._enterEff = enterEff;
            _this.once(eui.UIEvent.CREATION_COMPLETE, _this._creationComplete, _this);
            return _this;
        }
        /**
         * 添加到舞台
         */
        BasePopPanel.prototype.addToStage = function (layer) {
            if (layer === void 0) { layer = 6 /* POP */; }
            catchDoll.LayerManager.instance.addToLayer(this, layer);
        };
        /**
         * 加载完毕并放置到舞台上
         */
        BasePopPanel.prototype._creationComplete = function (e) {
            this._selfAdaption();
            this.showEnterEff();
            this._showBlackBg();
            this._drawDragRect();
        };
        Object.defineProperty(BasePopPanel.prototype, "blackBgHandler", {
            /**
             * 设置黑色背景点击函数
             */
            set: function (value) {
                this._blackBgHandler = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 自适应
         */
        BasePopPanel.prototype._selfAdaption = function () {
            if (this.skin["bg"] != null) {
                this._panelWidth = this.skin["bg"].width;
                this._panelHeight = this.skin["bg"].height;
                this._panelX = this.skin["bg"].x;
                this._panelY = this.skin["bg"].y;
            }
            else {
                this._panelWidth = this.width;
                this._panelHeight = this.height;
            }
            this._posX = (catchDoll.GameCenter.stageW - this._panelWidth) / 2 - this._panelX;
            this._posY = (catchDoll.GameCenter.stageH - this._panelHeight) / 2 - this._panelY;
        };
        Object.defineProperty(BasePopPanel.prototype, "closeBtnHandler", {
            /**
             * 设置关闭按钮
             */
            set: function (cb) {
                if (this.skin["closeBtn"] != null) {
                    this.commonCloseBtn = new Button(this.skin["closeBtn"]);
                    this.commonCloseBtn.mouseClickHandler = Handler.create(this, this.showCloseEff, [cb], true);
                }
                if (this._hasBlackBg) {
                    this._blackBgHandler = Handler.create(this, this.showCloseEff, [cb], true);
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 绘制拖动栏（不需要就重写此方法）
         */
        BasePopPanel.prototype._drawDragRect = function () {
            // this._drawBar.graphics.beginFill(ColorUtil.COLOR_BLACK, 0);
            // this._drawBar.graphics.drawRect(0, 0, this._panelWidth, 50);
            // this._drawBar.graphics.endFill();
            // this._drawBar.x = this._panelX;
            // this._drawBar.y = this._panelY;
            // this._drawBar.touchEnabled = true;
            // this.addChildAt(this._drawBar, 1);
            // this._drawBar.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this._starDrag, this);
            // this._drawBar.addEventListener(egret.TouchEvent.TOUCH_END, this._endDrag, this);
            // this._drawBar.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this._outsideDrag, this);
        };
        /**
         * 开始拖动
         */
        BasePopPanel.prototype._starDrag = function (e) {
            egret.MainContext.instance.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this._onDrag, this);
            this._lastPointX = e.stageX;
            this._lastPointY = e.stageY;
        };
        /**
         * 拖到屏幕外
         */
        BasePopPanel.prototype._outsideDrag = function (e) {
            egret.MainContext.instance.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this._onDrag, this);
            this._lastPointX = e.stageX;
            this._lastPointY = e.stageY;
        };
        /**
         * 正在拖动
         */
        BasePopPanel.prototype._onDrag = function (e) {
            var stepX = e.stageX - this._lastPointX;
            var stepY = e.stageY - this._lastPointY;
            this.x += stepX;
            this.y += stepY;
            this._lastPointX = e.stageX;
            this._lastPointY = e.stageY;
        };
        /**
         * 拖动结束
         */
        BasePopPanel.prototype._endDrag = function (e) {
            egret.MainContext.instance.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this._onDrag, this);
            this._lastPointX = e.stageX;
            this._lastPointY = e.stageY;
        };
        /**
         * 绘制黑色背景
         */
        BasePopPanel.prototype._showBlackBg = function () {
            if (this._hasBlackBg) {
                this._blakBG.graphics.beginFill(0x000000, this._alpha);
                this._blakBG.graphics.drawRect(0, 0, catchDoll.GameCenter.stageW, catchDoll.GameCenter.stageH);
                this._blakBG.graphics.endFill();
                this._blakBG.touchEnabled = true;
                this._blakBG.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onClickBlackBg, this);
                catchDoll.LayerManager.instance.addToLayer(this._blakBG, 5 /* BLACK_BG */);
            }
        };
        /**
         * 点击黑色背景
         */
        BasePopPanel.prototype._onClickBlackBg = function () {
            if (this._blackBgHandler) {
                this._blackBgHandler.run();
            }
        };
        /**
         * 释放(子类请super.dipose())
         */
        BasePopPanel.prototype.dispose = function () {
            // this._drawBar.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this._starDrag, this);
            // this._drawBar.removeEventListener(egret.TouchEvent.TOUCH_END, this._endDrag, this);
            // this._drawBar.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this._outsideDrag, this);
            // egret.MainContext.instance.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this._onDrag, this);
            catchDoll.LayerManager.instance.removeFromLayer(this);
            if (this._enterEff != 0 /* NORMAL */) {
                egret.Tween.removeTweens(this);
            }
            if (this._hasBlackBg) {
                this._blakBG.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onClickBlackBg, this);
                catchDoll.LayerManager.instance.removeFromLayer(this._blakBG);
                this._blakBG = null;
                if (this._blackBgHandler) {
                    this._blackBgHandler.recover();
                    this._blackBgHandler = null;
                }
            }
            if (this.commonCloseBtn) {
                this.commonCloseBtn.dispose();
                this.commonCloseBtn = null;
            }
        };
        /**
         * 显示关闭面板特效
         */
        BasePopPanel.prototype.showCloseEff = function (cb) {
            var _this = this;
            var targetX = this._posX + this._panelWidth / 4;
            var targetY = this._posY + this._panelHeight / 4;
            catchDoll.LayerManager.instance.removeFromLayer(this._blakBG);
            if (cb) {
                egret.Tween.get(this).to({ alpha: 0, scaleX: 0.5, scaleY: 0.5, x: targetX, y: targetY }, 400, egret.Ease.backOut).call(this._closePanel, this, [cb]);
            }
            else {
                egret.Tween.get(this).to({ alpha: 0, scaleX: 0.5, scaleY: 0.5, x: targetX, y: targetY }, 400, egret.Ease.backOut).call(function () {
                    _this.visible = false;
                });
            }
        };
        /**
         * 关闭面板
         */
        BasePopPanel.prototype._closePanel = function (cb) {
            cb.run();
        };
        /**
         * 入场动画
         */
        BasePopPanel.prototype.showEnterEff = function () {
            if (this._enterEff != 0 /* NORMAL */) {
                egret.Tween.removeTweens(this);
            }
            switch (this._enterEff) {
                case 0 /* NORMAL */:
                    this.x = this._posX;
                    this.y = this._posY;
                    break;
                case 1 /* CENTER */:
                    this.alpha = 0;
                    this.scaleX = 0.5;
                    this.scaleY = 0.5;
                    this.x = this._posX + this._panelWidth / 4;
                    this.y = this._posY + this._panelHeight / 4;
                    egret.Tween.get(this).to({ alpha: 1, scaleX: 1, scaleY: 1, x: this._posX, y: this._posY }, 300, egret.Ease.backOut);
                    break;
                case 2 /* CENTER_FIERCE */:
                    this.alpha = 0;
                    this.scaleX = 0.5;
                    this.scaleY = 0.5;
                    this.x = this._posX + this._panelWidth / 4;
                    this.y = this._posY + this._panelHeight / 4;
                    egret.Tween.get(this).to({ alpha: 1, scaleX: 1, scaleY: 1, x: this._posX, y: this._posY }, 600, egret.Ease.elasticOut);
                    break;
                case 3 /* LEFT_TO_RIGHT */:
                    this.x = -this._panelWidth;
                    egret.Tween.get(this).to({ x: this._posX }, 300, egret.Ease.cubicOut);
                    break;
                case 4 /* RIGHT_TO_LEFT */:
                    this.x = this._panelWidth;
                    egret.Tween.get(this).to({ x: this._posX }, 300, egret.Ease.cubicOut);
                    break;
                case 5 /* TOP_TO_BOTTOM */:
                    this.y = -this._panelHeight;
                    egret.Tween.get(this).to({ y: this._posY }, 300, egret.Ease.cubicOut);
                    break;
                case 6 /* BOTTOM_TO_TOP */:
                    this.y = this._panelHeight;
                    egret.Tween.get(this).to({ y: this._posY }, 300, egret.Ease.cubicOut);
                    break;
            }
        };
        return BasePopPanel;
    }(eui.Component));
    catchDoll.BasePopPanel = BasePopPanel;
    __reflect(BasePopPanel.prototype, "catchDoll.BasePopPanel");
})(catchDoll || (catchDoll = {}));
/**
 * <code>Dictionary</code> 是一个字典型的数据存取类。
 * 原作者 LayaBox
 * author suo(修改部分源码 添加数组常用方法)
 */
var Dictionary = (function () {
    function Dictionary() {
        this._values = [];
        this._keys = [];
    }
    Object.defineProperty(Dictionary.prototype, "values", {
        /**
         * 获取所有的子元素列表。
         */
        get: function () {
            return this._values;
        },
        /**
         * 设置所有的子元素列表。
         */
        set: function (value) {
            this._values = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dictionary.prototype, "keys", {
        /**
         * 获取所有的子元素键名列表。
         */
        get: function () {
            return this._keys;
        },
        /**
         * 设置所有的子元素键名列表。
         */
        set: function (value) {
            this._keys = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 给指定的键名设置值。
     * @param	key 键名。
     * @param	value 值。
     */
    Dictionary.prototype.set = function (key, value) {
        var index = this.indexOf(key);
        if (index >= 0) {
            this._values[index] = value;
            return;
        }
        this._keys.push(key);
        this._values.push(value);
    };
    /**
     * 获取指定对象的键名索引。
     * @param	key 键名对象。
     * @return 键名索引。
     */
    Dictionary.prototype.indexOf = function (key) {
        return this._keys.indexOf(key);
    };
    /**
     * 返回指定键名的值。
     * @param	key 键名对象。
     * @return 指定键名的值。
     */
    Dictionary.prototype.get = function (key) {
        var index = this.indexOf(key);
        return index < 0 ? null : this._values[index];
    };
    /**
     * 移除指定键名的值。
     * @param	key 键名对象。
     * @return 是否成功移除。
     */
    Dictionary.prototype.remove = function (key) {
        var index = this.indexOf(key);
        if (index >= 0) {
            this._keys.splice(index, 1);
            this._values.splice(index, 1);
            return true;
        }
        return false;
    };
    /**
     * 清除此对象的键名列表和键值列表。
     */
    Dictionary.prototype.clear = function () {
        this._values.length = 0;
        this._keys.length = 0;
    };
    Object.defineProperty(Dictionary.prototype, "length", {
        /**
         * 获得字典长度
         */
        get: function () {
            return this._values.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 拷贝字典
     */
    Dictionary.prototype.copy = function (start, end) {
        if (start === void 0) { start = 0; }
        if (end === void 0) { end = Number.MAX_VALUE; }
        var dic = new Dictionary;
        dic.values = this._values.slice(start, end);
        dic.keys = this._keys.slice(start, end);
        return dic;
    };
    /**
     * 根据值找键（心里有点B数再用）
     */
    Dictionary.prototype.getKeyByValue = function (value) {
        var index = this._values.indexOf(value);
        return index < 0 ? null : this._keys[index];
    };
    /**
     * 是否存在
     */
    Dictionary.prototype.isExist = function (key) {
        return this.indexOf(key) != -1;
    };
    return Dictionary;
}());
__reflect(Dictionary.prototype, "Dictionary");
/**
 * 管理器模板
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var BattleSceneManager = (function (_super) {
        __extends(BattleSceneManager, _super);
        function BattleSceneManager() {
            var _this = _super.call(this) || this;
            _this.addControl(catchDoll.BattleSceneControl);
            _this.addView(catchDoll.BattleSceneView);
            return _this;
        }
        return BattleSceneManager;
    }(BaseUIManager));
    catchDoll.BattleSceneManager = BattleSceneManager;
    __reflect(BattleSceneManager.prototype, "catchDoll.BattleSceneManager");
})(catchDoll || (catchDoll = {}));
/**
 * 视图模板
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var BattleSceneView = (function (_super) {
        __extends(BattleSceneView, _super);
        function BattleSceneView() {
            var _this = _super.call(this) || this;
            _this.skinName = "BattleSceneSkin";
            return _this;
        }
        /**
         * 初始化
         */
        BattleSceneView.prototype.onInit = function () {
            this.rightBtn = new Button(this.skin["_rightBtn"]);
            this.leftBtn = new Button(this.skin["_leftBtn"]);
            this.middleBtn = new Button(this.skin["_middleBtn"]);
            this.returnBtn = new Button(this.skin["_returnBtn"]);
            this.propBtn1 = new Button(this.skin["_propBtn1"]);
            this.propBtn2 = new Button(this.skin["_propBtn2"]);
            this.curtainEffL = UIUtil.creatMovieClip("curtainEff");
            // this.curtainEffL.gotoAndPlay(1, 1);
            // this.curtainEffL.scaleY = 1.2
            // this.curtainEffL.scaleX = - 1.2
            // this.addChild(this.curtainEffL);
            // this.curtainEffR = UIUtil.creatMovieClip("curtainEff");
            // this.curtainEffR.gotoAndPlay(1, 1);
            // this.curtainEffR.scaleX = this.curtainEffR.scaleY = 1.2
            // this.addChild(this.curtainEffR);
        };
        /**
         * 展示时
         */
        BattleSceneView.prototype.onShow = function () {
            this.addToStage(3 /* BATTLE */);
        };
        /**
         * 清除
         */
        BattleSceneView.prototype.clear = function () {
        };
        /**
         * 隐藏时
         */
        BattleSceneView.prototype.onHide = function () {
        };
        /**
         * 释放时
         */
        BattleSceneView.prototype.dispose = function () {
            this.rightBtn.dispose();
            this.rightBtn = null;
            this.leftBtn.dispose();
            this.leftBtn = null;
            this.middleBtn.dispose();
            this.middleBtn = null;
            this.returnBtn.dispose();
            this.returnBtn = null;
            this.propBtn1.dispose();
            this.propBtn1 = null;
            this.propBtn2.dispose();
            this.propBtn2 = null;
            _super.prototype.dispose.call(this);
        };
        return BattleSceneView;
    }(catchDoll.BasePopPanel));
    catchDoll.BattleSceneView = BattleSceneView;
    __reflect(BattleSceneView.prototype, "catchDoll.BattleSceneView", ["BaseUIView"]);
})(catchDoll || (catchDoll = {}));
/**
 * 控制器模板
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var FunctionUIControl = (function (_super) {
        __extends(FunctionUIControl, _super);
        function FunctionUIControl() {
            return _super.call(this) || this;
        }
        /**
         * 初始化
         */
        FunctionUIControl.prototype.onInit = function () {
            this._view = this._viewCenter.getView(catchDoll.FunctionUIView);
        };
        /**
         * 显示时
         */
        FunctionUIControl.prototype.onShow = function () {
            var _this = this;
            this._view.turnTableBtn.mouseClickHandler = Handler.create(this, this._onClicTurnTable);
            this._view.registerBtn.mouseClickHandler = Handler.create(this, this._onClicRegister);
            this._view.setUpBtn.mouseUpHandler = Handler.create(this, this._onClicSetUp);
            this._view.rankBtn.mouseClickHandler = Handler.create(null, function () {
                catchDoll.SimpleUICenter.instance.openUI(3 /* rankPanel */);
            });
            this._view.taskBtn.mouseClickHandler = Handler.create(null, function () {
                catchDoll.SimpleUICenter.instance.openUI(1 /* taskPanel */);
            });
            this._view.shopBtn.mouseClickHandler = Handler.create(null, function () {
                catchDoll.SimpleUICenter.instance.openUI(0 /* ShopPanel */);
            });
            this._view.bagBtn.mouseClickHandler = Handler.create(null, function () {
                catchDoll.SimpleUICenter.instance.openUI(2 /* bagPanel */);
            });
            this._view.inventBtn.mouseClickHandler = Handler.create(null, function () {
                catchDoll.SimpleUICenter.instance.openUI(4 /* SettlePanel */, { starNum: 3, itemID: 1 });
            });
            this._view.furlBtn.mouseClickHandler = Handler.create(null, function () {
                egret.Tween.removeTweens(_this._view.leftMenu);
                if (_this._view.furlBtn.root.scaleX == 0.6) {
                    _this._view.furlBtn.root.scaleX = -0.6;
                    egret.Tween.get(_this._view.shopBtn.root, null, null, true).to({ scaleX: 0, scaleY: 0 }, 500, egret.Ease.quadIn);
                    egret.Tween.get(_this._view.rankBtn.root, null, null, true).to({ scaleX: 0, scaleY: 0 }, 500, egret.Ease.quadIn);
                    egret.Tween.get(_this._view.turnTableBtn.root, null, null, true).to({ scaleX: 0, scaleY: 0 }, 500, egret.Ease.quadIn);
                    egret.Tween.get(_this._view.leftMenuBg).to({ height: 140 }, 500, egret.Ease.quadIn);
                }
                else {
                    _this._view.furlBtn.root.scaleX = 0.6;
                    egret.Tween.get(_this._view.leftMenuBg).to({ height: 600 }, 500, egret.Ease.quadIn).call(function () {
                        egret.Tween.get(_this._view.shopBtn.root, null, null, true).to({ scaleX: 1, scaleY: 1 }, 500, egret.Ease.quadIn);
                        egret.Tween.get(_this._view.rankBtn.root, null, null, true).to({ scaleX: 1, scaleY: 1 }, 500, egret.Ease.quadIn);
                        egret.Tween.get(_this._view.turnTableBtn.root, null, null, true).to({ scaleX: 1, scaleY: 1 }, 500, egret.Ease.quadIn);
                    });
                }
            });
            this._view.rightBtn.mouseClickHandler = Handler.create(null, function () {
                egret.Tween.get(_this._view.bottomMenu, null, null, true).to({ x: catchDoll.GameCenter.stageW }, 500, egret.Ease.quadIn).call(function () {
                    _this._view.leftBtn.visible = true;
                });
            });
            this._view.leftBtn.mouseClickHandler = Handler.create(null, function () {
                _this._view.leftBtn.visible = false;
                _this._view.rightBtn.root.scaleX = _this._view.rightBtn.root.scaleY = 0;
                var len = _this._view.bottomBtnGroup.numChildren;
                for (var i = 0; i < len; i++) {
                    var index = i + 1;
                    var item = _this._view.bottomBtnGroup.getChildByName("btn" + index);
                    item.scaleX = item.scaleY = 0;
                }
                egret.Tween.get(_this._view.bottomMenu, null, null, true).to({ x: 0 }, 500, egret.Ease.quadIn).call(function () {
                    egret.Tween.get(_this._view.rightBtn.root).to({ scaleX: 1, scaleY: 1 }, 500, egret.Ease.backOut);
                    for (var i = 0; i < len; i++) {
                        var btnIndex = i + 1;
                        var btn = _this._view.bottomBtnGroup.getChildByName("btn" + btnIndex);
                        egret.Tween.get(btn).wait(i * 200).to({ scaleX: 1, scaleY: 1 }, 800, egret.Ease.backOut);
                    }
                });
            });
        };
        /**
         * 点击设置按钮
         */
        FunctionUIControl.prototype._onClicSetUp = function () {
            UICenter.instance.openUI(7 /* SetUpPanel */);
        };
        /**
         * 点击签到按钮
         */
        FunctionUIControl.prototype._onClicRegister = function () {
            UICenter.instance.openUI(5 /* RegisterPanel */);
        };
        /**
         * 点击转盘按钮
         */
        FunctionUIControl.prototype._onClicTurnTable = function () {
            UICenter.instance.openUI(2 /* TurnTable */);
        };
        /**
         * 释放
         */
        FunctionUIControl.prototype.dispose = function () {
            this._view = null;
            _super.prototype.dispose.call(this);
        };
        return FunctionUIControl;
    }(BaseUIControl));
    catchDoll.FunctionUIControl = FunctionUIControl;
    __reflect(FunctionUIControl.prototype, "catchDoll.FunctionUIControl");
})(catchDoll || (catchDoll = {}));
/**
 * 管理器模板
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var FunctionUIManager = (function (_super) {
        __extends(FunctionUIManager, _super);
        function FunctionUIManager() {
            var _this = _super.call(this) || this;
            _this.addControl(catchDoll.FunctionUIControl);
            _this.addView(catchDoll.FunctionUIView);
            return _this;
        }
        return FunctionUIManager;
    }(BaseUIManager));
    catchDoll.FunctionUIManager = FunctionUIManager;
    __reflect(FunctionUIManager.prototype, "catchDoll.FunctionUIManager");
})(catchDoll || (catchDoll = {}));
/**
 * 视图模板
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var FunctionUIView = (function (_super) {
        __extends(FunctionUIView, _super);
        function FunctionUIView() {
            var _this = _super.call(this) || this;
            _this.skinName = "FunctionUISkin";
            return _this;
        }
        /**
         * 初始化
         */
        FunctionUIView.prototype.onInit = function () {
            var item = this.skin["_menuBtn"];
            this.menuBtn = new Button(this.skin["_menuBtn"]);
            this.registerBtn = new Button(this.skin["_registerBtn"]);
            this.turnTableBtn = new Button(this.skin["_turnTableBtn"]);
            this.setUpBtn = new Button(this.skin["_setUpBtn"]);
            this.leftBtn = new Button(this.skin["_leftBtn"]);
            this.rightBtn = new Button(this.skin["_rightBtn"]);
            this.shopBtn = new Button(this.skin["_shopBtn"]);
            this.taskBtn = new Button(this.skin["_taskBtn"]);
            this.bagBtn = new Button(this.skin["_bagBtn"]);
            this.rankBtn = new Button(this.skin["_rankBtn"]);
            this.inventBtn = new Button(this.skin["_inventBtn"]);
            this.furlBtn = new Button(this.skin["_furlBtn"]);
            this.bottomMenu.x = 720;
            EventManager.registerEvent(3 /* UPDATE_MONEY */, Handler.create(this, this._updateMoney));
        };
        /**
         * 更新钱
         */
        FunctionUIView.prototype._updateMoney = function () {
            this.money.text = catchDoll.GlobeTool.getProp(catchDoll.ITEM_ID.MONEY).toString();
        };
        /**
         * 展示时
         */
        FunctionUIView.prototype.onShow = function () {
            this.diamond.text = catchDoll.GlobeTool.getProp(catchDoll.ITEM_ID.DIMOND).toString();
            this.money.text = catchDoll.GlobeTool.getProp(catchDoll.ITEM_ID.MONEY).toString();
            this.addToStage(2 /* UI */);
        };
        /**
         * 清除
         */
        FunctionUIView.prototype.clear = function () {
        };
        /**
         * 隐藏时
         */
        FunctionUIView.prototype.onHide = function () {
        };
        /**
         * 释放时
         */
        FunctionUIView.prototype.dispose = function () {
            EventManager.unregisterEvent(3 /* UPDATE_MONEY */, this, this._updateMoney);
            this.turnTableBtn.dispose();
            this.turnTableBtn = null;
            this.menuBtn.dispose();
            this.menuBtn = null;
            this.registerBtn.dispose();
            this.registerBtn = null;
            this.setUpBtn.dispose();
            this.setUpBtn = null;
            this.leftBtn.dispose();
            this.leftBtn = null;
            this.rightBtn.dispose();
            this.rightBtn = null;
            this.shopBtn.dispose();
            this.shopBtn = null;
            this.bagBtn.dispose();
            this.bagBtn = null;
            this.taskBtn.dispose();
            this.taskBtn = null;
            this.rankBtn.dispose();
            this.rankBtn = null;
            this.inventBtn.dispose();
            this.inventBtn = null;
            this.furlBtn.dispose();
            this.furlBtn = null;
            _super.prototype.dispose.call(this);
        };
        return FunctionUIView;
    }(catchDoll.BasePopPanel));
    catchDoll.FunctionUIView = FunctionUIView;
    __reflect(FunctionUIView.prototype, "catchDoll.FunctionUIView", ["BaseUIView"]);
})(catchDoll || (catchDoll = {}));
/**
 *
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var IllustrationsPanel = (function (_super) {
        __extends(IllustrationsPanel, _super);
        function IllustrationsPanel() {
            var _this = _super.call(this) || this;
            _this.skinName = "illustrationsPanelSkin";
            return _this;
        }
        /**
         * 初始化
         */
        IllustrationsPanel.prototype.onInit = function () {
        };
        /**
         * 显示时
         */
        IllustrationsPanel.prototype.onShow = function () {
            this.addToStage();
            this.closeBtnHandler = Handler.create(null, function () {
                catchDoll.SimpleUICenter.instance.closeUI(5 /* illustrations */);
            }, null, true);
        };
        /**
         * 隐藏时
         */
        IllustrationsPanel.prototype.onHide = function () {
        };
        /**
         * 释放
         */
        IllustrationsPanel.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
        };
        return IllustrationsPanel;
    }(catchDoll.BasePopPanel));
    catchDoll.IllustrationsPanel = IllustrationsPanel;
    __reflect(IllustrationsPanel.prototype, "catchDoll.IllustrationsPanel", ["IBaseSimpleUI"]);
})(catchDoll || (catchDoll = {}));
/**
 * 排行项
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var RankItem = (function (_super) {
        __extends(RankItem, _super);
        function RankItem() {
            var _this = _super.call(this) || this;
            _this.skinName = "RankItemItem";
            return _this;
        }
        /**
         * 设置数据
         */
        RankItem.prototype.setData = function (name, score, rankNum) {
            if (rankNum == 1) {
                this.rankBg1.source = "rankingList_10";
                this.rankBg1.visible = true;
                this.rankBg2.visible = false;
            }
            else if (rankNum == 2) {
                this.rankBg1.source = "rankingList_12";
                this.rankBg1.visible = true;
                this.rankBg2.visible = false;
            }
            else if (rankNum == 3) {
                this.rankBg1.source = "rankingList_11";
                this.rankBg1.visible = true;
                this.rankBg2.visible = false;
            }
            else {
                this.rankBg1.visible = false;
                this.rankBg2.visible = true;
                this.rankLabel.text = rankNum.toString();
            }
            this.nameLabel.text = name;
            this.scoreLabel.text = score.toString();
        };
        return RankItem;
    }(eui.Component));
    catchDoll.RankItem = RankItem;
    __reflect(RankItem.prototype, "catchDoll.RankItem");
})(catchDoll || (catchDoll = {}));
/**
 * 排行版
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var RankPanel = (function (_super) {
        __extends(RankPanel, _super);
        function RankPanel() {
            var _this = _super.call(this, 1 /* CENTER */, true) || this;
            /**
             * 最大项数
             */
            _this.MAX_NUM = 10;
            _this.skinName = "RankPanelSkin";
            return _this;
        }
        /**
         * 初始化
         */
        RankPanel.prototype.onInit = function () {
            for (var i = 0; i < this.MAX_NUM; i++) {
                var item = new catchDoll.RankItem();
                item.setData("玩家名字", 999999, i + 1);
                this.listGroup.addChild(item);
            }
        };
        /**
         * 显示时
         */
        RankPanel.prototype.onShow = function () {
            this.addToStage(6 /* POP */);
            this.closeBtnHandler = Handler.create(null, function () { catchDoll.SimpleUICenter.instance.closeUI(3 /* rankPanel */); }, null, true);
        };
        /**
         * 隐藏时
         */
        RankPanel.prototype.onHide = function () {
        };
        /**
         * 释放
         */
        RankPanel.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
        };
        return RankPanel;
    }(catchDoll.BasePopPanel));
    catchDoll.RankPanel = RankPanel;
    __reflect(RankPanel.prototype, "catchDoll.RankPanel", ["IBaseSimpleUI"]);
})(catchDoll || (catchDoll = {}));
/**
 * 控制器模板
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var RegisterPanelControl = (function (_super) {
        __extends(RegisterPanelControl, _super);
        function RegisterPanelControl() {
            return _super.call(this) || this;
        }
        /**
         * 初始化
         */
        RegisterPanelControl.prototype.onInit = function () {
            this._view = this._viewCenter.getView(catchDoll.RegisterPanelView);
        };
        /**
         * 显示时
         */
        RegisterPanelControl.prototype.onShow = function () {
        };
        /**
         * 释放
         */
        RegisterPanelControl.prototype.dispose = function () {
            this._view = null;
            _super.prototype.dispose.call(this);
        };
        return RegisterPanelControl;
    }(BaseUIControl));
    catchDoll.RegisterPanelControl = RegisterPanelControl;
    __reflect(RegisterPanelControl.prototype, "catchDoll.RegisterPanelControl");
})(catchDoll || (catchDoll = {}));
/**
 * 管理器模板
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var RegisterPanelManager = (function (_super) {
        __extends(RegisterPanelManager, _super);
        function RegisterPanelManager() {
            var _this = _super.call(this) || this;
            _this.addControl(catchDoll.RegisterPanelControl);
            _this.addView(catchDoll.RegisterPanelView);
            return _this;
        }
        return RegisterPanelManager;
    }(BaseUIManager));
    catchDoll.RegisterPanelManager = RegisterPanelManager;
    __reflect(RegisterPanelManager.prototype, "catchDoll.RegisterPanelManager");
})(catchDoll || (catchDoll = {}));
/**
 * 视图模板
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var RegisterPanelView = (function (_super) {
        __extends(RegisterPanelView, _super);
        function RegisterPanelView() {
            var _this = _super.call(this, 1 /* CENTER */, true) || this;
            _this.skinName = "RegisterPanelSkin";
            return _this;
        }
        /**
         * 初始化
         */
        RegisterPanelView.prototype.onInit = function () {
        };
        /**
         * 展示时
         */
        RegisterPanelView.prototype.onShow = function () {
            this.addToStage(6 /* POP */);
            this.closeBtnHandler = Handler.create(null, function () { UICenter.instance.closeUI(5 /* RegisterPanel */); }, null, true);
        };
        /**
         * 清除
         */
        RegisterPanelView.prototype.clear = function () {
        };
        /**
         * 隐藏时
         */
        RegisterPanelView.prototype.onHide = function () {
        };
        /**
         * 释放时
         */
        RegisterPanelView.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
        };
        return RegisterPanelView;
    }(catchDoll.BasePopPanel));
    catchDoll.RegisterPanelView = RegisterPanelView;
    __reflect(RegisterPanelView.prototype, "catchDoll.RegisterPanelView", ["BaseUIView"]);
})(catchDoll || (catchDoll = {}));
/**
 * 控制器模板
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var WorldMapControl = (function (_super) {
        __extends(WorldMapControl, _super);
        function WorldMapControl() {
            return _super.call(this) || this;
        }
        /**
         * 初始化
         */
        WorldMapControl.prototype.onInit = function () {
            this._view = this._viewCenter.getView(catchDoll.WorldMapView);
        };
        /**
         * 点击选择关卡按钮
         */
        WorldMapControl.prototype._onClickLevelBtn = function () {
            UICenter.instance.openUI(4 /* BattleEnterPanel */);
        };
        /**
         * 显示时
         */
        WorldMapControl.prototype.onShow = function () {
            var view = UICenter.instance.getManager(6 /* FunctionUI */).getView(catchDoll.FunctionUIView);
            view.visible = true;
            this._view.illustrationsBtn.mouseClickHandler = Handler.create(null, function () {
                catchDoll.SimpleUICenter.instance.openUI(5 /* illustrations */);
            });
            this._view.battleBtn.mouseClickHandler = Handler.create(null, function () {
                UICenter.instance.openUI(4 /* BattleEnterPanel */);
            });
        };
        /**
         * 释放
         */
        WorldMapControl.prototype.dispose = function () {
            var view = UICenter.instance.getManager(6 /* FunctionUI */).getView(catchDoll.FunctionUIView);
            view.visible = false;
            this._view = null;
            _super.prototype.dispose.call(this);
        };
        return WorldMapControl;
    }(BaseUIControl));
    catchDoll.WorldMapControl = WorldMapControl;
    __reflect(WorldMapControl.prototype, "catchDoll.WorldMapControl");
})(catchDoll || (catchDoll = {}));
/**
 * 选择视图管理器
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var WorldMapManager = (function (_super) {
        __extends(WorldMapManager, _super);
        function WorldMapManager() {
            var _this = _super.call(this) || this;
            _this.addControl(catchDoll.WorldMapControl);
            _this.addView(catchDoll.WorldMapView);
            return _this;
        }
        return WorldMapManager;
    }(BaseUIManager));
    catchDoll.WorldMapManager = WorldMapManager;
    __reflect(WorldMapManager.prototype, "catchDoll.WorldMapManager");
})(catchDoll || (catchDoll = {}));
/**
 * 选择关卡视图
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var WorldMapView = (function (_super) {
        __extends(WorldMapView, _super);
        function WorldMapView() {
            var _this = _super.call(this) || this;
            _this.skinName = "WorldMapSkin";
            return _this;
        }
        /**
         * 初始化
         */
        WorldMapView.prototype.onInit = function () {
            this.battleBtn = new Button(this.skin["_battleBtn"]);
            this.illustrationsBtn = new Button(this.skin["_illustrationsBtn"]);
        };
        /**
         * 展示时
         */
        WorldMapView.prototype.onShow = function () {
            this.addToStage(1 /* SCENE */);
        };
        /**
         * 清除
         */
        WorldMapView.prototype.clear = function () {
        };
        /**
         * 隐藏时
         */
        WorldMapView.prototype.onHide = function () {
        };
        /**
         * 释放时
         */
        WorldMapView.prototype.dispose = function () {
            this.battleBtn.dispose();
            this.battleBtn = null;
            this.illustrationsBtn.dispose();
            this.illustrationsBtn = null;
            _super.prototype.dispose.call(this);
        };
        return WorldMapView;
    }(catchDoll.BasePopPanel));
    catchDoll.WorldMapView = WorldMapView;
    __reflect(WorldMapView.prototype, "catchDoll.WorldMapView", ["BaseUIView"]);
})(catchDoll || (catchDoll = {}));
/**
 * 控制器模板
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var SetUpPanelControl = (function (_super) {
        __extends(SetUpPanelControl, _super);
        function SetUpPanelControl() {
            return _super.call(this) || this;
        }
        /**
         * 初始化
         */
        SetUpPanelControl.prototype.onInit = function () {
            this._view = this._viewCenter.getView(catchDoll.SetUpPanelView);
        };
        /**
         * 显示时
         */
        SetUpPanelControl.prototype.onShow = function () {
        };
        /**
         * 释放
         */
        SetUpPanelControl.prototype.dispose = function () {
            this._view = null;
            _super.prototype.dispose.call(this);
        };
        return SetUpPanelControl;
    }(BaseUIControl));
    catchDoll.SetUpPanelControl = SetUpPanelControl;
    __reflect(SetUpPanelControl.prototype, "catchDoll.SetUpPanelControl");
})(catchDoll || (catchDoll = {}));
/**
 * 管理器模板
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var SetUpPanelManager = (function (_super) {
        __extends(SetUpPanelManager, _super);
        function SetUpPanelManager() {
            var _this = _super.call(this) || this;
            _this.addControl(catchDoll.SetUpPanelControl);
            _this.addView(catchDoll.SetUpPanelView);
            return _this;
        }
        return SetUpPanelManager;
    }(BaseUIManager));
    catchDoll.SetUpPanelManager = SetUpPanelManager;
    __reflect(SetUpPanelManager.prototype, "catchDoll.SetUpPanelManager");
})(catchDoll || (catchDoll = {}));
/**
 * 视图模板
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var SetUpPanelView = (function (_super) {
        __extends(SetUpPanelView, _super);
        function SetUpPanelView() {
            var _this = _super.call(this, 1 /* CENTER */, true) || this;
            _this.skinName = "SetUpSkin";
            return _this;
        }
        /**
         * 初始化
         */
        SetUpPanelView.prototype.onInit = function () {
        };
        /**
         * 展示时
         */
        SetUpPanelView.prototype.onShow = function () {
            this.addToStage();
            this.closeBtnHandler = Handler.create(null, function () { UICenter.instance.closeUI(7 /* SetUpPanel */); });
        };
        /**
         * 清除
         */
        SetUpPanelView.prototype.clear = function () {
        };
        /**
         * 隐藏时
         */
        SetUpPanelView.prototype.onHide = function () {
        };
        /**
         * 释放时
         */
        SetUpPanelView.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
        };
        return SetUpPanelView;
    }(catchDoll.BasePopPanel));
    catchDoll.SetUpPanelView = SetUpPanelView;
    __reflect(SetUpPanelView.prototype, "catchDoll.SetUpPanelView", ["BaseUIView"]);
})(catchDoll || (catchDoll = {}));
/**
 * 商品项
 */
var catchDoll;
(function (catchDoll) {
    var ShopItem = (function (_super) {
        __extends(ShopItem, _super);
        function ShopItem() {
            var _this = _super.call(this) || this;
            _this.itemID = 0;
            _this.skinName = "ShopItemSkin";
            return _this;
        }
        /**
         * 设置数据
         */
        ShopItem.prototype.setData = function (id, isHot) {
            var _this = this;
            this.itemID = id;
            var data = catchDoll.TableCenter.instance.getPropDataByID(id);
            this.hotFlag.visible = isHot;
            this.itemImg.source = data.source;
            this.price.text = "X" + data.price.toString();
            this.buyBtn = new Button(this.skin["_buyBtn"]);
            this.buyBtn.mouseClickHandler = Handler.create(null, function () {
                catchDoll.SimpleUICenter.instance.openUI(6 /* buyItemPanel */, _this.itemID);
            });
        };
        /**
         * 释放
         */
        ShopItem.prototype.dispose = function () {
            this.buyBtn.dispose();
            this.buyBtn = null;
        };
        return ShopItem;
    }(eui.Component));
    catchDoll.ShopItem = ShopItem;
    __reflect(ShopItem.prototype, "catchDoll.ShopItem");
})(catchDoll || (catchDoll = {}));
/**
 * 商店
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var ShopPanel = (function (_super) {
        __extends(ShopPanel, _super);
        function ShopPanel() {
            var _this = _super.call(this, 1 /* CENTER */, true) || this;
            /**
             * 切换按钮组
             */
            _this._toggleButtonGroup = new ToggleButtonGroup();
            /**
             * 选中背景
             */
            _this.SELECT_BG_SOURCE = "shopPanel_12";
            /**
             * 未选中背景
             */
            _this.UN_SELECT_BG_SOURCE = "shopPanel_11";
            /**
             * 按钮组
             */
            _this.buyBtnGroup = [];
            /**
             * 道具组
             */
            _this.itemList = [];
            _this.skinName = "ShopPanelSkin";
            return _this;
        }
        /**
         * 初始化
         */
        ShopPanel.prototype.onInit = function () {
            var _this = this;
            var toggle1 = new ToggleButton(this.skin["switchBtn1"]);
            var toggle2 = new ToggleButton(this.skin["switchBtn2"]);
            toggle1.selectHandler = Handler.create(null, function () {
                _this._getSwitchBtnBG(toggle1).source = _this.SELECT_BG_SOURCE;
                _this.diamondBox.visible = true;
            });
            toggle1.cancelHanlder = Handler.create(null, function () {
                _this._getSwitchBtnBG(toggle1).source = _this.UN_SELECT_BG_SOURCE;
                _this.diamondBox.visible = false;
            });
            toggle2.selectHandler = Handler.create(null, function () {
                _this._getSwitchBtnBG(toggle2).source = _this.SELECT_BG_SOURCE;
                _this.itemBox.visible = true;
            });
            toggle2.cancelHanlder = Handler.create(null, function () {
                _this._getSwitchBtnBG(toggle2).source = _this.UN_SELECT_BG_SOURCE;
                _this.itemBox.visible = false;
            });
            this._toggleButtonGroup.push(toggle1);
            this._toggleButtonGroup.push(toggle2);
            var table = catchDoll.TableCenter.instance.ShopTable;
            for (var _i = 0, table_1 = table; _i < table_1.length; _i++) {
                var item = table_1[_i];
                var shopitem = new catchDoll.ShopItem();
                shopitem.setData(item.itemID, Boolean(item.isHot));
                this.itemBox.addChild(shopitem);
                this.itemList.push(shopitem);
            }
        };
        /**
         * 获得切换按钮背景
         */
        ShopPanel.prototype._getSwitchBtnBG = function (btn) {
            return btn.root.getChildAt(0);
        };
        /**
         * 展示时
         */
        ShopPanel.prototype.onShow = function () {
            this.addToStage(6 /* POP */);
            this._toggleButtonGroup.clickByIndex = 0;
            this.closeBtnHandler = Handler.create(null, function () { catchDoll.SimpleUICenter.instance.closeUI(0 /* ShopPanel */); }, null, true);
        };
        /**
         * 隐藏时
         */
        ShopPanel.prototype.onHide = function () {
        };
        /**
         * 释放时
         */
        ShopPanel.prototype.dispose = function () {
            for (var _i = 0, _a = this.itemList; _i < _a.length; _i++) {
                var item = _a[_i];
                item.dispose();
                item = null;
            }
            this.itemList.length = 0;
            this.itemList = null;
            this._toggleButtonGroup.dispose();
            this._toggleButtonGroup = null;
            _super.prototype.dispose.call(this);
        };
        return ShopPanel;
    }(catchDoll.BasePopPanel));
    catchDoll.ShopPanel = ShopPanel;
    __reflect(ShopPanel.prototype, "catchDoll.ShopPanel", ["IBaseSimpleUI"]);
})(catchDoll || (catchDoll = {}));
/**
 * 控制器模板
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var StartSceneControl = (function (_super) {
        __extends(StartSceneControl, _super);
        function StartSceneControl() {
            return _super.call(this) || this;
        }
        /**
         * 初始化
         */
        StartSceneControl.prototype.onInit = function () {
            this._view = this._viewCenter.getView(catchDoll.StartSceneView);
            EventManager.registerEvent(4 /* SERVE_COMPLETE */, Handler.create(this, this._serveComplete), 1 /* ONCE */);
        };
        /**
         * 显示时
         */
        StartSceneControl.prototype.onShow = function () {
            this._view.startBtn.mouseClickHandler = Handler.create(null, function () {
                UICenter.instance.closeUI(3 /* StartScene */);
                UICenter.instance.openUI(6 /* FunctionUI */);
                UICenter.instance.openUI(1 /* SelectLevel */);
            });
        };
        /**
         * 服务器数据同步完毕
         */
        StartSceneControl.prototype._serveComplete = function () {
            this._view.startBtn.enabled = true;
            egret.Tween.get(this._view.startBtn.root, { loop: true }).to({ scaleX: 1.2, scaleY: 1.2 }, 600 * 1.5).
                to({ scaleX: 0.9, scaleY: 0.9 }, 900 * 1.5).to({ scaleX: 1, scaleY: 1 }, 300 * 1.5);
        };
        /**
         * 释放
         */
        StartSceneControl.prototype.dispose = function () {
            egret.Tween.removeTweens(this._view.startBtn.root);
            this._view = null;
            _super.prototype.dispose.call(this);
        };
        return StartSceneControl;
    }(BaseUIControl));
    catchDoll.StartSceneControl = StartSceneControl;
    __reflect(StartSceneControl.prototype, "catchDoll.StartSceneControl");
})(catchDoll || (catchDoll = {}));
/**
 * 管理器模板
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var StartSceneManager = (function (_super) {
        __extends(StartSceneManager, _super);
        function StartSceneManager() {
            var _this = _super.call(this) || this;
            _this.addControl(catchDoll.StartSceneControl);
            _this.addView(catchDoll.StartSceneView);
            return _this;
        }
        return StartSceneManager;
    }(BaseUIManager));
    catchDoll.StartSceneManager = StartSceneManager;
    __reflect(StartSceneManager.prototype, "catchDoll.StartSceneManager");
})(catchDoll || (catchDoll = {}));
/**
 * 视图模板
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var StartSceneView = (function (_super) {
        __extends(StartSceneView, _super);
        function StartSceneView() {
            var _this = _super.call(this) || this;
            _this.skinName = "StartSceneSkin";
            return _this;
        }
        /**
         * 初始化
         */
        StartSceneView.prototype.onInit = function () {
            this.startBtn = new Button(this.skin["_startBtn"]);
            this.startBtn.enabled = false;
        };
        /**
         * 展示时
         */
        StartSceneView.prototype.onShow = function () {
            this.addToStage(1 /* SCENE */);
        };
        /**
         * 清除
         */
        StartSceneView.prototype.clear = function () {
        };
        /**
         * 隐藏时
         */
        StartSceneView.prototype.onHide = function () {
        };
        /**
         * 释放时
         */
        StartSceneView.prototype.dispose = function () {
            this.startBtn.dispose();
            this.startBtn = null;
            _super.prototype.dispose.call(this);
        };
        return StartSceneView;
    }(catchDoll.BasePopPanel));
    catchDoll.StartSceneView = StartSceneView;
    __reflect(StartSceneView.prototype, "catchDoll.StartSceneView", ["BaseUIView"]);
})(catchDoll || (catchDoll = {}));
/**
 * 详细任务面板
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var TaskItem = (function (_super) {
        __extends(TaskItem, _super);
        function TaskItem() {
            var _this = _super.call(this) || this;
            _this.skinName = "TaskItemSkin";
            return _this;
        }
        /**
         * 设置数据
         */
        TaskItem.prototype.setData = function (id, state) {
            var data = ConfigParse.getWholeByProperty(catchDoll.TableCenter.instance.TaskTable, "id", id.toString());
            for (var i = 0; i < data.taskLevel; i++) {
                var img = new eui.Image();
                img.source = "otherRes2_47";
                this.starBox.addChild(img);
            }
            this.taskDec.text = data.taskContent;
            this.getBtn = new Button(this.skin["_getBtn"]);
        };
        /**
         * 释放
         */
        TaskItem.prototype.dispose = function () {
            this.getBtn.dispose();
            this.getBtn = null;
        };
        return TaskItem;
    }(eui.Component));
    catchDoll.TaskItem = TaskItem;
    __reflect(TaskItem.prototype, "catchDoll.TaskItem");
})(catchDoll || (catchDoll = {}));
/**
 * 任务面板
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var TaskPanel = (function (_super) {
        __extends(TaskPanel, _super);
        function TaskPanel() {
            var _this = _super.call(this, 1 /* CENTER */, true) || this;
            /**
             * 切换按钮组
             */
            _this._toggleButtonGroup = new ToggleButtonGroup();
            /**
             * itemList
             */
            _this.itemList = [];
            /**
             * treasureItemList
             */
            _this.treasureItemList = [];
            _this.skinName = "TaskPanelSkin";
            return _this;
        }
        /**
         * 初始化
         */
        TaskPanel.prototype.onInit = function () {
            var _this = this;
            var toggle1 = new ToggleButton(this.skin["switchBtn1"]);
            var toggle2 = new ToggleButton(this.skin["switchBtn2"]);
            toggle1.selectHandler = Handler.create(null, function () {
                _this._getSwitchBtnBG(toggle1).source = "otherRes2_38";
                _this._getSwitchBtnBG2(toggle1).source = "otherRes2_42";
                _this.taskBox.visible = true;
                toggle1.x = 38;
                toggle1.y = 0;
            });
            toggle1.cancelHanlder = Handler.create(null, function () {
                _this._getSwitchBtnBG(toggle1).source = "otherRes2_39";
                _this._getSwitchBtnBG2(toggle1).source = "otherRes2_43";
                _this.taskBox.visible = false;
                toggle1.x = 38;
                toggle1.y = 66;
            });
            toggle2.selectHandler = Handler.create(null, function () {
                _this._getSwitchBtnBG(toggle2).source = "otherRes2_34";
                _this._getSwitchBtnBG2(toggle2).source = "otherRes2_32";
                toggle2.x = 300;
                toggle2.y = 0;
                _this.treasureBox.visible = true;
            });
            toggle2.cancelHanlder = Handler.create(null, function () {
                _this._getSwitchBtnBG(toggle2).source = "otherRes2_35";
                _this._getSwitchBtnBG2(toggle2).source = "otherRes2_33";
                toggle2.x = 400;
                toggle2.y = 66;
                _this.treasureBox.visible = false;
            });
            this._toggleButtonGroup.push(toggle1);
            this._toggleButtonGroup.push(toggle2);
            var data = catchDoll.TableCenter.instance.TaskTable;
            for (var i = 0; i < 3; i++) {
                var item = new catchDoll.TaskItem();
                item.setData(data[i].id);
                this.taskBox.addChild(item);
                this.itemList.push(item);
            }
            var data2 = catchDoll.TableCenter.instance.treasureTable;
            for (var i = 0; i < 3; i++) {
                var item = new catchDoll.TaskTreasureItem();
                item.setData(data2[i].id);
                this.treasureBox.addChild(item);
                this.treasureItemList.push(item);
            }
        };
        /**
         * 获得切换按钮背景
         */
        TaskPanel.prototype._getSwitchBtnBG = function (btn) {
            return btn.root.getChildAt(0);
        };
        /**
         * 获得切换按钮背景
         */
        TaskPanel.prototype._getSwitchBtnBG2 = function (btn) {
            return btn.root.getChildAt(1);
        };
        /**
         * 显示时
         */
        TaskPanel.prototype.onShow = function () {
            this._toggleButtonGroup.clickByIndex = 0;
            this.addToStage();
            this.closeBtnHandler = Handler.create(null, function () { catchDoll.SimpleUICenter.instance.closeUI(1 /* taskPanel */); }, null, false);
        };
        /**
         * 隐藏时
         */
        TaskPanel.prototype.onHide = function () {
        };
        /**
         * 释放
         */
        TaskPanel.prototype.dispose = function () {
            for (var _i = 0, _a = this.itemList; _i < _a.length; _i++) {
                var item = _a[_i];
                item.dispose();
                item = null;
            }
            this.itemList.length = 0;
            this.itemList = null;
            for (var _b = 0, _c = this.treasureItemList; _b < _c.length; _b++) {
                var item = _c[_b];
                item.dispose();
                item = null;
            }
            this.treasureItemList.length = 0;
            this.treasureItemList = null;
            _super.prototype.dispose.call(this);
        };
        return TaskPanel;
    }(catchDoll.BasePopPanel));
    catchDoll.TaskPanel = TaskPanel;
    __reflect(TaskPanel.prototype, "catchDoll.TaskPanel", ["IBaseSimpleUI"]);
})(catchDoll || (catchDoll = {}));
/**
 * 详细任务面板
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var TaskTreasureItem = (function (_super) {
        __extends(TaskTreasureItem, _super);
        function TaskTreasureItem() {
            var _this = _super.call(this) || this;
            _this.skinName = "TaskTreasureItemSkin";
            return _this;
        }
        /**
         * 设置数据
         */
        TaskTreasureItem.prototype.setData = function (id, state) {
            var data = ConfigParse.getWholeByProperty(catchDoll.TableCenter.instance.treasureTable, "id", id.toString());
            for (var i = 0; i < data.level; i++) {
                var img = new eui.Image();
                img.source = "otherRes2_47";
                this.starBox.addChild(img);
            }
            this.treasureImg.source = data.render[0];
            this.taskDec.text = data.condition;
            this.getBtn = new Button(this.skin["_getBtn"]);
        };
        /**
         * 释放
         */
        TaskTreasureItem.prototype.dispose = function () {
            this.getBtn.dispose();
            this.getBtn = null;
        };
        return TaskTreasureItem;
    }(eui.Component));
    catchDoll.TaskTreasureItem = TaskTreasureItem;
    __reflect(TaskTreasureItem.prototype, "catchDoll.TaskTreasureItem");
})(catchDoll || (catchDoll = {}));
/**
 *
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var SimpleUITemplet = (function (_super) {
        __extends(SimpleUITemplet, _super);
        function SimpleUITemplet() {
            var _this = _super.call(this) || this;
            _this.skinName = "";
            return _this;
        }
        /**
         * 初始化
         */
        SimpleUITemplet.prototype.onInit = function () {
        };
        /**
         * 显示时
         */
        SimpleUITemplet.prototype.onShow = function () {
        };
        /**
         * 隐藏时
         */
        SimpleUITemplet.prototype.onHide = function () {
        };
        /**
         * 释放
         */
        SimpleUITemplet.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
        };
        return SimpleUITemplet;
    }(catchDoll.BasePopPanel));
    catchDoll.SimpleUITemplet = SimpleUITemplet;
    __reflect(SimpleUITemplet.prototype, "catchDoll.SimpleUITemplet", ["IBaseSimpleUI"]);
})(catchDoll || (catchDoll = {}));
/**
 * 控制器模板
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var TempletControl = (function (_super) {
        __extends(TempletControl, _super);
        function TempletControl() {
            return _super.call(this) || this;
        }
        /**
         * 初始化
         */
        TempletControl.prototype.onInit = function () {
            this._view = this._viewCenter.getView("");
        };
        /**
         * 初始化
         */
        TempletControl.prototype.onShow = function () {
        };
        /**
         * 释放
         */
        TempletControl.prototype.dispose = function () {
            this._view = null;
            _super.prototype.dispose.call(this);
        };
        return TempletControl;
    }(BaseUIControl));
    catchDoll.TempletControl = TempletControl;
    __reflect(TempletControl.prototype, "catchDoll.TempletControl");
})(catchDoll || (catchDoll = {}));
/**
 * 管理器模板
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var TempletManager = (function (_super) {
        __extends(TempletManager, _super);
        function TempletManager() {
            return _super.call(this) || this;
            // this.addControl();
            // this.addView();
        }
        return TempletManager;
    }(BaseUIManager));
    catchDoll.TempletManager = TempletManager;
    __reflect(TempletManager.prototype, "catchDoll.TempletManager");
})(catchDoll || (catchDoll = {}));
/**
 * 视图模板
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var TempletView = (function (_super) {
        __extends(TempletView, _super);
        function TempletView() {
            var _this = _super.call(this) || this;
            _this.skinName = "";
            return _this;
        }
        /**
         * 初始化
         */
        TempletView.prototype.onInit = function () {
        };
        /**
         * 展示时
         */
        TempletView.prototype.onShow = function () {
        };
        /**
         * 清除
         */
        TempletView.prototype.clear = function () {
        };
        /**
         * 隐藏时
         */
        TempletView.prototype.onHide = function () {
        };
        /**
         * 释放时
         */
        TempletView.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
        };
        return TempletView;
    }(catchDoll.BasePopPanel));
    catchDoll.TempletView = TempletView;
    __reflect(TempletView.prototype, "catchDoll.TempletView", ["BaseUIView"]);
})(catchDoll || (catchDoll = {}));
/**
 * 控制器模板
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var TurntableControl = (function (_super) {
        __extends(TurntableControl, _super);
        function TurntableControl() {
            return _super.call(this) || this;
        }
        /**
         * 初始化
         */
        TurntableControl.prototype.onInit = function () {
            this._view = this._viewCenter.getView(catchDoll.TurntableView);
            this._gainView = this._viewCenter.getView(catchDoll.TurntableGainPanelView);
            this._view.startBtn.mouseClickHandler = Handler.create(this, this._onClickStartBtn);
        };
        /**
         * 点击开始按钮
         */
        TurntableControl.prototype._onClickStartBtn = function () {
            var _this = this;
            this._view.showEff();
            egret.Tween.removeTweens(this._view.getFont);
            this._view.commonCloseBtn.enabled = false;
            this._view.startBtn.enabled = false;
            var award = MathUtil.random(catchDoll.TURNTABLE_AWARD.COIN_1, catchDoll.TURNTABLE_AWARD.COIN_15);
            var roundNum = 30;
            var endRotation = 360 * roundNum + catchDoll.TurntableData.awardMap.get(award).rotation;
            egret.Tween.get(this._view.eff).to({ frameRate: 60 }, roundNum * 100, egret.Ease.quadIn).to({ frameRate: 5 }, roundNum * 100, egret.Ease.quadOut);
            egret.Tween.get(this._view.turnTableBody).to({ rotation: endRotation }, roundNum * 200, egret.Ease.cubicInOut).wait(800).call(function () {
                _this._view.hideEff();
                _this._view.showCloseEff(Handler.create(null, function () {
                    _this._gainView.addToStage();
                    _this._gainView.showResult(award);
                }));
            });
        };
        /**
         * 显示时
         */
        TurntableControl.prototype.onShow = function () {
        };
        /**
         * 释放
         */
        TurntableControl.prototype.dispose = function () {
            this._view = null;
            this._gainView = null;
            _super.prototype.dispose.call(this);
        };
        return TurntableControl;
    }(BaseUIControl));
    catchDoll.TurntableControl = TurntableControl;
    __reflect(TurntableControl.prototype, "catchDoll.TurntableControl");
})(catchDoll || (catchDoll = {}));
/**
 * 转盘数据
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var TurntableData = (function () {
        function TurntableData() {
        }
        TurntableData.init = function () {
            var table = catchDoll.TableCenter.instance.TurnTable;
            for (var _i = 0, table_2 = table; _i < table_2.length; _i++) {
                var item = table_2[_i];
                TurntableData.awardMap.set(item.id, item);
            }
        };
        /**
         * 释放
         */
        TurntableData.prototype.dispose = function () {
            TurntableData.awardMap.clear();
        };
        /**
         * 奖项字典
         */
        TurntableData.awardMap = new Dictionary();
        return TurntableData;
    }());
    catchDoll.TurntableData = TurntableData;
    __reflect(TurntableData.prototype, "catchDoll.TurntableData");
    var TURNTABLE_AWARD;
    (function (TURNTABLE_AWARD) {
        TURNTABLE_AWARD[TURNTABLE_AWARD["COIN_1"] = 0] = "COIN_1";
        TURNTABLE_AWARD[TURNTABLE_AWARD["COIN_2"] = 1] = "COIN_2";
        TURNTABLE_AWARD[TURNTABLE_AWARD["COIN_4"] = 2] = "COIN_4";
        TURNTABLE_AWARD[TURNTABLE_AWARD["COIN_8"] = 3] = "COIN_8";
        TURNTABLE_AWARD[TURNTABLE_AWARD["COIN_12"] = 4] = "COIN_12";
        TURNTABLE_AWARD[TURNTABLE_AWARD["COIN_15"] = 5] = "COIN_15";
    })(TURNTABLE_AWARD = catchDoll.TURNTABLE_AWARD || (catchDoll.TURNTABLE_AWARD = {}));
})(catchDoll || (catchDoll = {}));
/**
 * 管理器模板
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var TurntableManager = (function (_super) {
        __extends(TurntableManager, _super);
        function TurntableManager() {
            var _this = _super.call(this) || this;
            _this.addControl(catchDoll.TurntableControl);
            _this.addView(catchDoll.TurntableView);
            _this.addControl(catchDoll.TurntableGainPanelControl);
            _this.addView(catchDoll.TurntableGainPanelView);
            return _this;
        }
        return TurntableManager;
    }(BaseUIManager));
    catchDoll.TurntableManager = TurntableManager;
    __reflect(TurntableManager.prototype, "catchDoll.TurntableManager");
})(catchDoll || (catchDoll = {}));
/**
 * 视图模板
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var TurntableView = (function (_super) {
        __extends(TurntableView, _super);
        function TurntableView() {
            var _this = _super.call(this, 1 /* CENTER */, true) || this;
            /**
             * 中心点
             */
            _this.centerPoint = { x: 319.5, y: 319 };
            _this.skinName = "TurntableSkin";
            return _this;
        }
        /**
         * 初始化
         */
        TurntableView.prototype.onInit = function () {
            this.startBtn = new Button(this.skin["_startBtn"]);
        };
        /**
         * 展示时
         */
        TurntableView.prototype.onShow = function () {
            this.addToStage();
            this.commonCloseBtn = new Button(this.skin["closeBtn"]);
            this.commonCloseBtn.mouseClickHandler = Handler.create(this, this.showCloseEff, [Handler.create(null, function () {
                    UICenter.instance.closeUI(2 /* TurnTable */);
                }, null, true)]);
            this.setScaleTween(this.getFont);
            this.eff = UIUtil.creatMovieClip("TurntableLamp");
            this.addChild(this.eff);
            this.eff.visible = false;
            this.eff.blendMode = egret.BlendMode.ADD;
            this.eff.frameRate = 5;
            this.eff.x = 330;
            this.eff.y = 350;
            this.eff.scaleX = this.eff.scaleY = 2;
        };
        /**
         * 显示特效
         */
        TurntableView.prototype.showEff = function () {
            this.eff.visible = true;
            this.eff.gotoAndPlay(1, -1);
        };
        /**
         * 隐藏特效
         */
        TurntableView.prototype.hideEff = function () {
            this.eff.visible = false;
            this.eff.stop();
        };
        /**
         * 设置对象缩放动画
         */
        TurntableView.prototype.setScaleTween = function (target, scaleXGene, scaleYGene, durationTime) {
            var _this = this;
            if (scaleXGene === void 0) { scaleXGene = 1; }
            if (scaleYGene === void 0) { scaleYGene = 1; }
            if (durationTime === void 0) { durationTime = 600; }
            egret.Tween.get(target).to({ scaleX: 1.1 * scaleXGene, scaleY: 1.1 * scaleYGene }, durationTime, egret.Ease.backOut).call(function () {
                egret.Tween.get(target).to({ scaleX: 0.9 * scaleXGene, scaleY: 0.9 * scaleYGene }, durationTime, egret.Ease.backIn).call(_this.setScaleTween, _this, [target, scaleXGene, scaleYGene, durationTime]);
            }, this);
        };
        /**
         * 清除
         */
        TurntableView.prototype.clear = function () {
        };
        /**
         * 隐藏时
         */
        TurntableView.prototype.onHide = function () {
        };
        /**
         * 释放时
         */
        TurntableView.prototype.dispose = function () {
            egret.Tween.removeTweens(this.getFont);
            this.startBtn.dispose();
            this.startBtn = null;
            this.eff.stop();
            this.eff = null;
            _super.prototype.dispose.call(this);
        };
        return TurntableView;
    }(catchDoll.BasePopPanel));
    catchDoll.TurntableView = TurntableView;
    __reflect(TurntableView.prototype, "catchDoll.TurntableView", ["BaseUIView"]);
})(catchDoll || (catchDoll = {}));
/**
 * 转盘获得面板控制器
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var TurntableGainPanelControl = (function (_super) {
        __extends(TurntableGainPanelControl, _super);
        function TurntableGainPanelControl() {
            return _super.call(this) || this;
        }
        /**
         * 初始化
         */
        TurntableGainPanelControl.prototype.onInit = function () {
            this._view = this._viewCenter.getView(catchDoll.TurntableGainPanelView);
        };
        /**
         * 显示时
         */
        TurntableGainPanelControl.prototype.onShow = function () {
        };
        /**
         * 释放
         */
        TurntableGainPanelControl.prototype.dispose = function () {
            this._view = null;
            _super.prototype.dispose.call(this);
        };
        return TurntableGainPanelControl;
    }(BaseUIControl));
    catchDoll.TurntableGainPanelControl = TurntableGainPanelControl;
    __reflect(TurntableGainPanelControl.prototype, "catchDoll.TurntableGainPanelControl");
})(catchDoll || (catchDoll = {}));
/**
 * 转盘获得面板视图
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var TurntableGainPanelView = (function (_super) {
        __extends(TurntableGainPanelView, _super);
        function TurntableGainPanelView() {
            var _this = _super.call(this, 1 /* CENTER */, true) || this;
            _this.skinName = "TurntableGainPanelSkin";
            return _this;
        }
        /**
         * 显示结果
         */
        TurntableGainPanelView.prototype.showResult = function (awardKey) {
            var data = catchDoll.TurntableData.awardMap.get(awardKey);
            this.awardImg.source = data["source"];
            this.awardDec.text = data["dec"];
            catchDoll.Master.instance.sendItemUpdateMsg(catchDoll.ITEM_ID.MONEY, data["money"]);
            this.closeBtnHandler = Handler.create(null, function () { UICenter.instance.closeUI(2 /* TurnTable */); }, null, true);
        };
        /**
         * 初始化
         */
        TurntableGainPanelView.prototype.onInit = function () {
        };
        /**
         * 展示时
         */
        TurntableGainPanelView.prototype.onShow = function () {
        };
        /**
         * 清除
         */
        TurntableGainPanelView.prototype.clear = function () {
        };
        /**
         * 隐藏时
         */
        TurntableGainPanelView.prototype.onHide = function () {
        };
        /**
         * 释放时
         */
        TurntableGainPanelView.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
        };
        return TurntableGainPanelView;
    }(catchDoll.BasePopPanel));
    catchDoll.TurntableGainPanelView = TurntableGainPanelView;
    __reflect(TurntableGainPanelView.prototype, "catchDoll.TurntableGainPanelView", ["BaseUIView"]);
})(catchDoll || (catchDoll = {}));
/**
 * 数据处理中心
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var DataCenter = (function () {
        function DataCenter() {
            /*玩家数据*/
            this.master = catchDoll.Master.instance;
            /*等级 （低级场,中级场，高级场）*/
            this.level = 0;
            /*配置*/
            this.table = catchDoll.TableCenter.instance;
            /*是否调试模式*/
            this.isDebug = false;
            /*地址*/
            this.host = "";
            /*端口*/
            this.post = -1;
            var configData = RES.getRes("config_json");
            this.isDebug = configData["isDebug"];
            if (this.isDebug) {
                this.host = configData["debug"]["host"];
                this.post = configData["debug"]["post"];
            }
            else {
                this.host = configData["dev"]["host"];
                this.post = configData["dev"]["post"];
            }
            catchDoll.GlobeConst.isDebug = this.isDebug;
            catchDoll.GlobeConst.host = this.host;
            catchDoll.GlobeConst.post = this.post;
        }
        Object.defineProperty(DataCenter, "instance", {
            /**
             * 获得单例
             */
            get: function () {
                if (this._instance == null) {
                    this._instance = new DataCenter();
                }
                return this._instance;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 释放
         */
        DataCenter.prototype.dispose = function () {
            this.table.dispose();
            this.table = null;
            this.master.dispose();
            this.master = null;
        };
        /*单例*/
        DataCenter._instance = null;
        return DataCenter;
    }());
    catchDoll.DataCenter = DataCenter;
    __reflect(DataCenter.prototype, "catchDoll.DataCenter");
})(catchDoll || (catchDoll = {}));
/**
 * 游戏中心
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var GameCenter = (function (_super) {
        __extends(GameCenter, _super);
        function GameCenter() {
            var _this = _super.call(this) || this;
            /*网络*/
            _this.webSocket = catchDoll.WebSocket.instance;
            /*事件收发中心*/
            _this.eventManager = EventManager.instance;
            /*数据中心*/
            _this.dataCenter = catchDoll.DataCenter.instance;
            _this._init();
            _this.addEventListener(egret.Event.ENTER_FRAME, _this._enterFrame, _this);
            return _this;
        }
        GameCenter.prototype._init = function () {
            Laya.init();
            GameCenter.stageW = egret.MainContext.instance.stage.stageWidth;
            GameCenter.stageH = egret.MainContext.instance.stage.stageHeight;
            this.gameObjectManager = catchDoll.GameObjectManager.instance;
            this.layerManager = catchDoll.LayerManager.instance;
            this.operationManager = catchDoll.OperationManager.instance;
        };
        Object.defineProperty(GameCenter, "instance", {
            /**
             * 获得单例
             */
            get: function () {
                if (this._instance == null) {
                    this._instance = new GameCenter();
                }
                return this._instance;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 退出游戏
         */
        GameCenter.prototype._leaveRoom = function () {
            this.dispose();
        };
        /**
        * 帧事件
        */
        GameCenter.prototype._enterFrame = function (e) {
            Laya.timer.update();
        };
        /**
         * 释放
         */
        GameCenter.prototype.dispose = function () {
            UICenter.instance.closeAll();
            this.eventManager.dispose();
            this.eventManager = null;
            this.dataCenter.dispose();
            this.dataCenter = null;
            this.layerManager.dispose();
            this.layerManager = null;
            this.operationManager.dispose();
            this.operationManager = null;
            this.gameObjectManager.dispose();
            this.gameObjectManager = null;
            this.webSocket.dispose();
            this.webSocket = null;
            Pool.clearAll();
            this.removeEventListener(egret.Event.ENTER_FRAME, this._enterFrame, this);
        };
        /*单例*/
        GameCenter._instance = null;
        /*舞台宽*/
        GameCenter.stageW = 0;
        /*舞台高*/
        GameCenter.stageH = 0;
        return GameCenter;
    }(egret.DisplayObject));
    catchDoll.GameCenter = GameCenter;
    __reflect(GameCenter.prototype, "catchDoll.GameCenter");
})(catchDoll || (catchDoll = {}));
/**
 * 玩家数据中心
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var Master = (function () {
        function Master() {
            /*uid*/
            this.uid = -1;
            /**
             * 当前任务
             */
            this.curTask = [];
            /**
             * 道具数据
             */
            this.itemData = [];
            EventManager.registerEvent(5 /* UPDATE_ITEM_INFO */, Handler.create(this, this._updateItem));
            this.curTask.push({ taskID: 1, state: TASK_STATE.UN_ACHIEVE }, { taskID: 2, state: TASK_STATE.UN_ACHIEVE }, { taskID: 3, state: TASK_STATE.UN_ACHIEVE });
        }
        /**
         * 更新前
         */
        Master.prototype._updateItem = function () {
            for (var _i = 0, _a = this.itemData; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.itemUpdateNum != 0) {
                    if (item.itemID == catchDoll.ITEM_ID.MONEY) {
                        EventManager.fireEvent(3 /* UPDATE_MONEY */);
                    }
                }
            }
        };
        /**
         * 更新前
         */
        Master.prototype._updateMoney = function (value) {
        };
        Object.defineProperty(Master, "instance", {
            /**
             * 获得单例
             */
            get: function () {
                if (this._instance == null) {
                    this._instance = new Master();
                }
                return this._instance;
            },
            enumerable: true,
            configurable: true
        });
        Master.prototype.sendItemUpdateMsg = function (itemID, updateNum) {
            var cmd = new Cmd.ItemUpdate_CS();
            cmd.uid = Master.instance.uid;
            var itemInfo = [];
            var item = new Cmd.ItemInfo_CS();
            item.itemID = itemID;
            item.itemUpdateNum = updateNum;
            itemInfo.push(item);
            cmd.itemInfo = itemInfo;
            catchDoll.WebSocket.instance.sendMsg(cmd);
        };
        /**
         * 释放
         */
        Master.prototype.dispose = function () {
            EventManager.unregisterEvent(5 /* UPDATE_ITEM_INFO */, this, this._updateItem);
            this.uid = -1;
        };
        /*单例*/
        Master._instance = null;
        return Master;
    }());
    catchDoll.Master = Master;
    __reflect(Master.prototype, "catchDoll.Master");
    var TASK_STATE;
    (function (TASK_STATE) {
        /*完成*/
        TASK_STATE[TASK_STATE["ACHIEVE"] = 0] = "ACHIEVE";
        /*未完成*/
        TASK_STATE[TASK_STATE["UN_ACHIEVE"] = 1] = "UN_ACHIEVE";
        /*未领取*/
        TASK_STATE[TASK_STATE["UN_GET"] = 2] = "UN_GET";
    })(TASK_STATE = catchDoll.TASK_STATE || (catchDoll.TASK_STATE = {}));
})(catchDoll || (catchDoll = {}));
/**
 * 简易UI框架
 * @suo
 */
var catchDoll;
(function (catchDoll) {
    var SimpleUICenter = (function () {
        function SimpleUICenter() {
            /**
             * UI字典
             */
            this._UIMap = new Dictionary();
            /**
             * 已打开UI数组
             */
            this._openUIMap = new Dictionary();
            this.addUI(0 /* ShopPanel */, catchDoll.ShopPanel);
            this.addUI(2 /* bagPanel */, catchDoll.BagPanel);
            this.addUI(1 /* taskPanel */, catchDoll.TaskPanel);
            this.addUI(3 /* rankPanel */, catchDoll.RankPanel);
            this.addUI(4 /* SettlePanel */, catchDoll.SettlePanel);
            this.addUI(5 /* illustrations */, catchDoll.IllustrationsPanel);
            this.addUI(6 /* buyItemPanel */, catchDoll.BuyItemPanel);
        }
        /**
         * 添加UI
         */
        SimpleUICenter.prototype.addUI = function (id, cls) {
            this._UIMap.set(id, cls);
        };
        Object.defineProperty(SimpleUICenter, "instance", {
            /**
             * 获得单例
             */
            get: function () {
                if (this._instance == null) {
                    this._instance = new SimpleUICenter();
                }
                return this._instance;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 获取视图
         */
        SimpleUICenter.prototype.getUI = function (id) {
            return this._openUIMap.get(id);
        };
        /**
         * 打开视图
         */
        SimpleUICenter.prototype.openUI = function (id, param) {
            if (this._openUIMap.isExist(id)) {
            }
            else {
                var cls = this._UIMap.get(id);
                var panel = new cls();
                if (param) {
                    panel.openParam = param;
                }
                panel.onInit();
                panel.onShow();
                this._openUIMap.set(id, panel);
            }
        };
        /**
         * 关闭视图
         */
        SimpleUICenter.prototype.closeUI = function (id) {
            if (this._openUIMap.isExist(id)) {
                var panel = this.getUI(id);
                panel.onHide();
                panel.dispose();
                this._openUIMap.remove(id);
            }
        };
        /**
         * 关闭所有
         */
        SimpleUICenter.prototype.closeAll = function () {
            var len = this._openUIMap.length;
            var keys = this._openUIMap.keys.slice();
            for (var i = 0; i < len; i++) {
                var panelID = keys[i];
                this.closeUI(panelID);
            }
        };
        /**
         * 释放
         */
        SimpleUICenter.prototype.dispose = function () {
            this._UIMap.clear();
            this._openUIMap.clear();
        };
        return SimpleUICenter;
    }());
    catchDoll.SimpleUICenter = SimpleUICenter;
    __reflect(SimpleUICenter.prototype, "catchDoll.SimpleUICenter");
})(catchDoll || (catchDoll = {}));
/**
 * 配置中心
 */
var catchDoll;
(function (catchDoll) {
    var TableCenter = (function () {
        function TableCenter() {
            this._initTable();
        }
        /**
         * 初始化配置
         */
        TableCenter.prototype._initTable = function () {
            this.ClipTable = ConfigParse.getJosn("ClipTable_json");
            this.MonsterTable = ConfigParse.getJosn("MonsterTable_json");
            this.TaskTable = ConfigParse.getJosn("TaskTable_json");
            this.PropTable = ConfigParse.getJosn("PropTable_json");
            this.TurnTable = ConfigParse.getJosn("TurntableList_json");
            this.ShopTable = ConfigParse.getJosn("shopTable_json");
            this.treasureTable = ConfigParse.getJosn("TreasureTable_json");
        };
        /**
         * 根据ID获得物品数据
         */
        TableCenter.prototype.getPropDataByID = function (id) {
            return ConfigParse.getWholeByProperty(this.PropTable, "id", id.toString());
        };
        Object.defineProperty(TableCenter, "instance", {
            /**
             * 获得单例
             */
            get: function () {
                if (this._instance == null) {
                    this._instance = new TableCenter();
                }
                return this._instance;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 释放
         */
        TableCenter.prototype.dispose = function () {
            this.ClipTable.length = 0;
            this.ClipTable = null;
            this.MonsterTable.length = 0;
            this.MonsterTable = null;
            this.TaskTable.length = 0;
            this.TaskTable = null;
            this.PropTable.length = 0;
            this.PropTable = null;
            this.TurnTable.length = 0;
            this.TurnTable = null;
            this.ShopTable.length = 0;
            this.ShopTable = null;
            this.treasureTable.length = 0;
            this.treasureTable = null;
        };
        /*单例*/
        TableCenter._instance = null;
        return TableCenter;
    }());
    catchDoll.TableCenter = TableCenter;
    __reflect(TableCenter.prototype, "catchDoll.TableCenter");
})(catchDoll || (catchDoll = {}));
var catchDoll;
(function (catchDoll) {
    var WebSocket = (function () {
        function WebSocket() {
            /*socket*/
            this._webSocket = new egret.WebSocket();
            /**
             * 写入字节数组
             */
            this._writeByteAry = new egret.ByteArray();
            /**
             * 读取字节数组
             */
            this._readByteAry = new egret.ByteArray();
            this._protoRoot = new protobuf.Root();
            /**
             * 当前检测次数
             */
            this._curHeartCount = 0;
            /**
             * 最大检测次数
             **/
            this.MAX_COUNT = 3;
            this._init();
        }
        Object.defineProperty(WebSocket, "instance", {
            /**
             * 获得单例
             */
            get: function () {
                if (this._instance == null) {
                    this._instance = new WebSocket();
                }
                return this._instance;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 初始化
         */
        WebSocket.prototype._init = function () {
            this._webSocket.type = egret.WebSocket.TYPE_BINARY;
            this._webSocket.addEventListener(egret.Event.CONNECT, this._onSocketOpen, this);
            this._webSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this._onReceiveMessage, this);
            this._webSocket.addEventListener(egret.IOErrorEvent.IO_ERROR, this._onSocketError, this);
            this._webSocket.addEventListener(egret.Event.CLOSE, this._onSocketClose, this);
            this._webSocket.connect(catchDoll.DataCenter.instance.host, catchDoll.DataCenter.instance.post);
            this._writeByteAry.endian = 1 /* BIG_ENDIAN */.toString();
            protobuf.parse(RES.getRes("common_proto"), this._protoRoot);
        };
        /**
         * 登录
         */
        WebSocket.prototype._login = function () {
            var cmd = new Cmd.Login_C();
            cmd.account = "suo";
            cmd.password = MathUtil.random(0, 10000).toString();
            var index = location.search.indexOf("?uid=");
            if (index != -1) {
                var StrAry = location.search.split("?uid=");
                var uid = StrAry[StrAry.length - 1];
                cmd.uid = Number(uid);
            }
            else {
                cmd.uid = 9999;
            }
            this.sendMsg(cmd);
        };
        /**
         * socket异常
         */
        WebSocket.prototype._onSocketError = function (e) {
            console.log("IO异常");
        };
        /**
         * socket关闭
         */
        WebSocket.prototype._onSocketClose = function (e) {
            console.log("服务器断开连接");
        };
        /**
         * socket链接
         */
        WebSocket.prototype._onSocketOpen = function (e) {
            console.log("webScoket链接成功");
            this._login();
        };
        /**
         *  心跳检测
         */
        WebSocket.prototype._heartCheck = function () {
            Laya.timer.loop(1000 * 10, this, this._sendHeartMsg);
        };
        /**
         *  发送心跳消息
         */
        WebSocket.prototype._sendHeartMsg = function () {
            this._curHeartCount++;
            if (this._curHeartCount >= this.MAX_COUNT) {
                console.log("连接失败，请检查网络");
                Laya.timer.clear(this, this._sendHeartMsg);
            }
            var cmd = new Cmd.Heartbeat_CS();
            cmd.uid = catchDoll.Master.instance.uid;
            this.sendMsg(cmd);
        };
        /**
         * 接受数据
         */
        WebSocket.prototype._onReceiveMessage = function (e) {
            //todo 在这里收到心跳协议回复，将_isGetRep置为true
            var ws = e.target;
            this._readByteAry.clear();
            ws.readBytes(this._readByteAry);
            /*rawData:buffer 组成:协议名字长度+协议名字+协议数据长度+协议数据 */
            var nameLen = this._readByteAry.readUnsignedShort();
            var cmdTitle = this._readByteAry.readUTFBytes(nameLen);
            var rawDataLen = this._readByteAry.readUnsignedShort();
            var rawData = this._readByteAry.bytes.slice(4 + nameLen, 4 + nameLen + rawDataLen);
            var protoType;
            var message;
            if (catchDoll.GlobeConst.isWXGame) {
                switch (cmdTitle) {
                    case "Cmd.Login_C":
                        protoType = Cmd.Login_C;
                        break;
                    case "Cmd.PlayerInfo_S":
                        protoType = Cmd.PlayerInfo_S;
                        break;
                    case "Cmd.ItemUpdate_CS":
                        protoType = Cmd.ItemUpdate_CS;
                        break;
                    case "Cmd.Heartbeat_CS":
                        protoType = Cmd.Heartbeat_CS;
                        break;
                }
                message = protoType.decode(rawData);
            }
            else {
                protoType = this._protoRoot.lookupType(cmdTitle);
                message = protoType.decode(rawData).toJSON();
            }
            console.log("[收到服务器数据: " + cmdTitle + ":" + JSON.stringify(message) + "]");
            /* 登陆协议 */
            switch (cmdTitle) {
                case "Cmd.Login_C":
                    // let accurateData: Cmd.Login_C = jsonData as Cmd.Login_C;
                    break;
                case "Cmd.PlayerInfo_S":
                    var accurateData2 = message;
                    catchDoll.Master.instance.uid = accurateData2.uid;
                    catchDoll.Master.instance.itemData = accurateData2.itemInfo;
                    EventManager.fireEvent(4 /* SERVE_COMPLETE */);
                    this._heartCheck();
                    break;
                case "Cmd.ItemUpdate_CS":
                    var accurateData3 = message;
                    catchDoll.Master.instance.itemData = accurateData3.itemInfo;
                    EventManager.fireEvent(5 /* UPDATE_ITEM_INFO */);
                    break;
                case "Cmd.Heartbeat_CS":
                    var accurateData4 = message;
                    if (catchDoll.Master.instance.uid == accurateData4.uid) {
                        this._curHeartCount = 0;
                    }
                    else {
                        console.assert(false, "逻辑有误");
                    }
                    break;
            }
        };
        /**
         * 发送数据
         */
        WebSocket.prototype.sendString = function (str) {
            this._webSocket.writeUTF(str);
            this._webSocket.flush();
        };
        /**
         * 发送字节二进制
         */
        WebSocket.prototype.sendMsg = function (cmd) {
            if (cmd["GetType"] === void 0) {
                console.assert(false, "cmd未扩展GetType");
                return;
            }
            var protoName = cmd["GetType"]();
            var protoType;
            if (catchDoll.GlobeConst.isWXGame) {
                protoType = cmd.constructor;
            }
            else {
                protoType = this._protoRoot.lookupType(protoName);
            }
            var writer = protoType.encode(cmd);
            var data = writer.finish();
            this._writeByteAry.clear();
            this._writeByteAry.writeUTFBytes(protoName);
            var len = this._writeByteAry.length;
            this._writeByteAry.position = 0;
            var len2 = data.length;
            this._writeByteAry.position = 0;
            this._writeByteAry.writeUnsignedShort(len);
            this._writeByteAry.writeUTFBytes(protoName);
            this._writeByteAry.writeUnsignedShort(len2);
            this._writeByteAry._writeUint8Array(data);
            // this._writeByteAry.position = 0;
            // let len3: number = this._writeByteAry.readUnsignedShort();
            // let TypeName = this._writeByteAry.readUTFBytes(len3);
            this._webSocket.writeBytes(this._writeByteAry);
            this._webSocket.flush();
        };
        /**
         * 释放
         */
        WebSocket.prototype.dispose = function () {
            Laya.timer.clear(this, this._sendHeartMsg);
            this._webSocket.removeEventListener(egret.Event.CONNECT, this._onSocketOpen, this);
            this._webSocket.removeEventListener(egret.ProgressEvent.SOCKET_DATA, this._onReceiveMessage, this);
            this._webSocket.removeEventListener(egret.IOErrorEvent.IO_ERROR, this._onSocketError, this);
            this._webSocket.removeEventListener(egret.Event.CLOSE, this._onSocketClose, this);
        };
        /*单例*/
        WebSocket._instance = null;
        return WebSocket;
    }());
    catchDoll.WebSocket = WebSocket;
    __reflect(WebSocket.prototype, "catchDoll.WebSocket");
})(catchDoll || (catchDoll = {}));
/**
 * 碰撞器
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var Collider = (function (_super) {
        __extends(Collider, _super);
        function Collider(executant) {
            var _this = _super.call(this) || this;
            _this.isShow = true;
            if (!executant) {
                console.assert(false, "请使用Collider.creat方法创建Collider对象！");
            }
            return _this;
        }
        /**
         * 建议使用此方法创建一个Collider
         */
        Collider.creat = function (x, y, radius) {
            var collider = Pool.getItemByCreateFun("collider", Handler.create(this, function () {
                return new Collider(new ColliderExecutant());
            }, null, true));
            collider.setTo(x, y, radius);
            return collider;
        };
        /**
         * 设值
         */
        Collider.prototype.setTo = function (x, y, radius) {
            this.radius = radius;
            this.x = x;
            this.y = y;
            this.posX = x;
            this.posY = y;
            if (this.isShow) {
                this.graphics.beginFill(ColorUtil.COLOR_GREEN, 0.3);
                this.graphics.drawCircle(0, 0, radius);
                this.graphics.endFill();
            }
        };
        /**
         * 设值父物体
         */
        Collider.prototype.setParent = function (value) {
            value.addChild(this);
            this.host = value;
        };
        /**
         * 清除
         */
        Collider.prototype.clear = function () {
            this.graphics.clear();
            this.posX = NaN;
            this.posY = NaN;
            this.radius = NaN;
            this.host = null;
        };
        /**
         * 设置全局坐标
         */
        Collider.prototype.setGlobePos = function () {
            var p = this.localToGlobal(0, 0, this.globePosPoint);
            this.globePosPoint = p;
        };
        /**
         * 是否相交
         */
        Collider.isIntersect = function (c1, c2) {
            var p1 = c1.globePosPoint;
            var p2 = c2.globePosPoint;
            var disx = p1.x - p2.x;
            var disy = p1.y - p2.y;
            var dist = c1.radius + c2.radius;
            if (disx > dist || disx < -dist || disy > dist || disy < -dist) {
                return false;
            }
            var disSquare = disx * disx + disy * disy;
            // let c1hostRotation: number = c1.host.rotation;
            // let c2hostRotation: number = c2.host.rotation;
            // let p1X: number = c1.x * Math.cos(c1hostRotation) - c1.y * Math.sin(c1hostRotation) + c1.host.x;
            // let p1Y: number = c1.y * Math.cos(c1hostRotation) + c1.x * Math.sin(c1hostRotation) + c1.host.y;
            // let p2X: number = c2.x * Math.cos(c2hostRotation) - c2.y * Math.sin(c2hostRotation) + c2.host.x;
            // let p2Y: number = c2.y * Math.cos(c2hostRotation) + c2.x * Math.sin(c2hostRotation) + c2.host.y;
            // let dis = Math.sqrt((p1X - p2X) * (p1X - p2X) + (p1Y - p2Y) * (p1Y - p2Y));
            if (disSquare < (dist * dist)) {
                return true;
            }
            else {
                return false;
            }
        };
        /**
         * 释放
         */
        Collider.prototype.recover = function () {
            this.clear();
            this.globePosPoint = null;
            Pool.recover("collider", this);
        };
        /**
         * 复用点
         */
        Collider.multiplexPoint = [new egret.Point(), new egret.Point()];
        return Collider;
    }(egret.Shape));
    catchDoll.Collider = Collider;
    __reflect(Collider.prototype, "catchDoll.Collider", ["catchDoll.ICollider"]);
})(catchDoll || (catchDoll = {}));
var ColliderExecutant = (function () {
    function ColliderExecutant() {
    }
    return ColliderExecutant;
}());
__reflect(ColliderExecutant.prototype, "ColliderExecutant");
if (!Array.prototype.remove) {
    Array.prototype.remove = function (value, fromIndex) {
        var index = this.indexOf(value, fromIndex);
        if (index < 0)
            return false;
        this.splice(index, 1);
        return true;
    };
}
var Extendtion = (function () {
    function Extendtion() {
    }
    return Extendtion;
}());
__reflect(Extendtion.prototype, "Extendtion");
Cmd.Login_C.prototype.GetType = function () {
    return "Cmd.Login_C";
};
Cmd.ItemInfo_CS.prototype.GetType = function () {
    return "Cmd.ItemInfo_CS";
};
Cmd.PlayerInfo_S.prototype.GetType = function () {
    return "Cmd.PlayerInfo_S";
};
Cmd.ItemUpdate_CS.prototype.GetType = function () {
    return "Cmd.ItemUpdate_CS";
};
Cmd.Heartbeat_CS.prototype.GetType = function () {
    return "Cmd.Heartbeat_CS";
};
Cmd.TaskUpdate_CS.prototype.GetType = function () {
    return "Cmd.TaskUpdate_CS";
};
/**
 * 游戏对象配置解析
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var GameObjectConfigParse = (function () {
        function GameObjectConfigParse() {
            GameObjectConfigParse.configDic.set(101 /* PAWS */, {
                configAsset: {}, configData: {}
            });
            for (var _i = 0, _a = catchDoll.TableCenter.instance.MonsterTable; _i < _a.length; _i++) {
                var item = _a[_i];
                GameObjectConfigParse.configDic.set(item.id, {
                    configAsset: {
                        imageAry: item.imageAry
                    }, configData: { speed: item.moveSpeed, life: item.life }
                });
            }
            GameObjectConfigParse.configDic.set(4 /* MONSTER_ROBOT */, {
                configAsset: {
                    dragonBonesName: "munaiyi"
                }, configData: { speed: 4, life: 100 }
            });
            GameObjectConfigParse.configDic.set(5 /* MONSTER_ROBOT_2 */, {
                configAsset: {
                    dragonBonesName: "munaiyi2"
                }, configData: { speed: 6, life: 100 }
            });
            GameObjectConfigParse.configDic.set(6 /* MONSTER_Cactus */, {
                configAsset: {
                    dragonBonesName: "skeleton"
                }, configData: { speed: 8, life: 100 }
            });
        }
        /**
         * 根据标识获得配置数据
         */
        GameObjectConfigParse.getConfigBySign = function (sign) {
            return GameObjectConfigParse.configDic.get(sign);
        };
        /**
         * 释放
         */
        GameObjectConfigParse.prototype.dispose = function () {
            GameObjectConfigParse.configDic.clear();
        };
        /**
         * 配置字典
         */
        GameObjectConfigParse.configDic = new SimpleMap();
        return GameObjectConfigParse;
    }());
    catchDoll.GameObjectConfigParse = GameObjectConfigParse;
    __reflect(GameObjectConfigParse.prototype, "catchDoll.GameObjectConfigParse");
})(catchDoll || (catchDoll = {}));
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 300;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = "center";
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        this.textField.text = "Loading..." + current + "/" + total;
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
/**
 * 游戏对象创建工厂
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var GameObjectFactory = (function () {
        function GameObjectFactory() {
            /**
             * 对象字典
             */
            this._objClassDic = new SimpleMap();
            /**
             * gid
             */
            this.gid = 0;
            for (var i = 1 /* MONSTER_1 */; i <= 6 /* MONSTER_Cactus */; i++) {
                this._objClassDic.set(i, catchDoll.Monster);
            }
            this._objClassDic.set(101 /* PAWS */, catchDoll.Paws);
        }
        Object.defineProperty(GameObjectFactory, "instance", {
            /**
             * 获得单例
             */
            get: function () {
                if (this._instance == null) {
                    this._instance = new GameObjectFactory();
                }
                return this._instance;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 创建一个catchDoll
         */
        GameObjectFactory.prototype.creatGameObject = function (sign, varsData, layerType) {
            if (varsData === void 0) { varsData = null; }
            if (layerType === void 0) { layerType = 4 /* MONSTER */; }
            var gameObj = null;
            gameObj = catchDoll.GameObjectPool.instance.tryGetGameObjInPool(sign);
            /*资源池无此资源*/
            if (gameObj == null) {
                var className = this._objClassDic.get(sign);
                gameObj = new className();
                gameObj.setData(sign, this.gid, varsData, layerType);
                this._loadConfig(sign, gameObj);
                gameObj.initOther();
            }
            else {
                gameObj.setData(sign, this.gid, varsData, layerType);
            }
            gameObj.initialize();
            this._writeInMap(gameObj, varsData);
            this.gid++;
            return gameObj;
        };
        /**
         * 对象回收
         */
        GameObjectFactory.prototype.recoverGameObject = function (gameObj) {
            if (gameObj == null) {
                console.assert(false, "gameObj为空！");
                return;
            }
            if (egret.is(gameObj, "catchDoll.Monster")) {
                var map = catchDoll.LevelCreate.inViewMonsterMap;
                if (catchDoll.LevelCreate.inViewMonsterMap.remove(gameObj.uID)) {
                }
                else {
                    console.assert(false, "逻辑有误");
                }
            }
            gameObj.uninitialize();
            catchDoll.GameObjectPool.instance.recoverGameObject(gameObj);
        };
        /**
         * 加载资源
         */
        GameObjectFactory.prototype._loadConfig = function (sign, gameObj) {
            var configData = catchDoll.GameObjectConfigParse.configDic.get(sign);
            if (configData) {
                gameObj.loadConfigAsset(configData.configAsset);
                gameObj.loadConfigData(configData.configData);
            }
            else {
                console.assert(false, "找不到sign为" + sign + "资源配置！");
            }
        };
        /**
         * 写入字典
         */
        GameObjectFactory.prototype._writeInMap = function (gameObj, varsData) {
            if (egret.is(gameObj, "catchDoll.Monster")) {
                if (catchDoll.LevelCreate.inViewMonsterMap.isExist(gameObj)) {
                    console.assert(false, "逻辑有误");
                }
                else {
                    catchDoll.LevelCreate.inViewMonsterMap.set(gameObj.uID, gameObj);
                }
            }
        };
        /**
         * 释放
         */
        GameObjectFactory.prototype.dispose = function () {
            this._objClassDic.clear();
        };
        /**
         * 单例
         */
        GameObjectFactory._instance = null;
        return GameObjectFactory;
    }());
    catchDoll.GameObjectFactory = GameObjectFactory;
    __reflect(GameObjectFactory.prototype, "catchDoll.GameObjectFactory");
})(catchDoll || (catchDoll = {}));
/**
 * 对象池(现在相同sign对象 可能分别存在一级二级资源池 仅根据引用计数区分所在资源池)
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var GameObjectPool = (function () {
        function GameObjectPool() {
            /**
             * 最大缓存数量
             */
            this.MAX_CAHCHE_NUM = 300;
            /**
             * 当前缓存池内资源计数
             */
            this._curCacheObjNum = 0;
            /**
             * 一级缓存用于缓存只被用了一次的资源
             */
            this._objectFirstPool = new SimpleMap();
            /**
             * 二级缓存用于缓存经常使用的资源，从资源池拿去先从当前资源池拿取
             */
            this._objectSecondPool = new SimpleMap();
        }
        Object.defineProperty(GameObjectPool, "instance", {
            /**
             * 获得单例
             */
            get: function () {
                if (this._instance == null) {
                    this._instance = new GameObjectPool();
                }
                return this._instance;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 尝试从对象池获取对象
         */
        GameObjectPool.prototype.tryGetGameObjInPool = function (sign) {
            var gameObj = null;
            var gameObjAry = null;
            /*先遍历二级缓存*/
            gameObjAry = this._objectSecondPool.get(sign);
            if (gameObjAry != null && gameObjAry.length > 0) {
                gameObj = gameObjAry.shift();
                this._curCacheObjNum--;
            }
            /*然后遍历一级缓存*/
            if (gameObj == null) {
                gameObjAry = this._objectFirstPool.get(sign);
                if (gameObjAry != null && gameObjAry.length > 0) {
                    gameObj = gameObjAry.shift();
                    this._curCacheObjNum--;
                }
            }
            return gameObj;
        };
        /**
         * 对象回收
         */
        GameObjectPool.prototype.recoverGameObject = function (gameObj) {
            // this._calCacheNum();
            var gameObjFirstAry = null;
            var gameObjSecAry = null;
            var sign = gameObj.sign;
            //对象被多次引用 进入二级缓存
            if (gameObj.refCount >= 2) {
                gameObjSecAry = this._objectSecondPool.get(sign);
                if (gameObjSecAry == null) {
                    gameObjSecAry = new Array();
                    this._objectSecondPool.set(sign, gameObjSecAry);
                }
                if (gameObjSecAry.indexOf(gameObj) == -1) {
                    gameObjSecAry.push(gameObj);
                    this._curCacheObjNum++;
                }
            }
            else {
                gameObjFirstAry = this._objectFirstPool.get(sign);
                if (gameObjFirstAry == null) {
                    gameObjFirstAry = new Array();
                    this._objectFirstPool.set(sign, gameObjFirstAry);
                }
                if (gameObjFirstAry.indexOf(gameObj) == -1) {
                    gameObjFirstAry.push(gameObj);
                    this._curCacheObjNum++;
                }
            }
            /*数量过大时 清理资源池*/
            if (this._curCacheObjNum > this.MAX_CAHCHE_NUM) {
                this._cleanFirstPool();
            }
        };
        /**
         * 清理资源池 清理所有一级缓存
         */
        GameObjectPool.prototype._cleanFirstPool = function () {
            this._clearPool(this._objectFirstPool);
            if (this._curCacheObjNum >= this.MAX_CAHCHE_NUM) {
                this._deepCleanCachePool();
            }
        };
        /**
         * 清理二级缓存
         */
        GameObjectPool.prototype._deepCleanCachePool = function () {
            this._clearPool(this._objectSecondPool);
        };
        /**
         * 清理缓存
         */
        GameObjectPool.prototype._clearPool = function (cacheMap) {
            var len = cacheMap.length;
            var gameObjAry = null;
            var deleteObjNum = 0;
            for (var i = 0; i < len; i++) {
                gameObjAry = cacheMap.getByKeyIndex(i);
                var copy = gameObjAry.slice();
                var copyLen = copy.length;
                for (var j = 0; j < copyLen; j++) {
                    var gameObj = copy[j];
                    if (gameObj.canDispose) {
                        deleteObjNum += 1;
                        gameObjAry.remove(gameObj);
                        gameObj.dispose();
                        gameObj = null;
                    }
                }
            }
            this._curCacheObjNum -= deleteObjNum;
        };
        /**
         * 释放
         */
        GameObjectPool.prototype.dispose = function () {
            this._clearPool(this._objectFirstPool);
            this._clearPool(this._objectSecondPool);
            this._objectFirstPool.clear();
            this._objectSecondPool.clear();
            GameObjectPool._instance = null;
        };
        /**
         * 统计资源池内对象个数
         */
        GameObjectPool.prototype._calCacheNum = function () {
            var len = this._objectFirstPool.length;
            var len1 = this._objectSecondPool.length;
            var map = this._objectFirstPool.copy();
            var map1 = this._objectSecondPool.copy();
            var gameObjAry = null;
            var firstCacheNum = 0;
            var secondCacheNum = 0;
            for (var i = 0; i < len; i++) {
                gameObjAry = map.getByKeyIndex(i);
                firstCacheNum += gameObjAry.length;
            }
            for (var j = 0; j < len1; j++) {
                gameObjAry = map1.getByKeyIndex(j);
                secondCacheNum += gameObjAry.length;
            }
            var sum = firstCacheNum + secondCacheNum;
            egret.log("资源池内缓存对象计数：" + sum);
            return sum;
        };
        /**
         * 单例
         */
        GameObjectPool._instance = null;
        return GameObjectPool;
    }());
    catchDoll.GameObjectPool = GameObjectPool;
    __reflect(GameObjectPool.prototype, "catchDoll.GameObjectPool");
})(catchDoll || (catchDoll = {}));
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var AssetAdapter = (function () {
    function AssetAdapter() {
    }
    /**
     * @language zh_CN
     * 解析素材
     * @param source 待解析的新素材标识符
     * @param compFunc 解析完成回调函数，示例：callBack(content:any,source:string):void;
     * @param thisObject callBack的 this 引用
     */
    AssetAdapter.prototype.getAsset = function (source, compFunc, thisObject) {
        function onGetRes(data) {
            compFunc.call(thisObject, data, source);
        }
        if (RES.hasRes(source)) {
            var data = RES.getRes(source);
            if (data) {
                onGetRes(data);
            }
            else {
                RES.getResAsync(source, onGetRes, this);
            }
        }
        else {
            RES.getResByUrl(source, onGetRes, this, RES.ResourceItem.TYPE_IMAGE);
        }
    };
    return AssetAdapter;
}());
__reflect(AssetAdapter.prototype, "AssetAdapter", ["eui.IAssetAdapter"]);
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
/**
 * 假如我年少有为…
 * @author suo
 */
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.createChildren = function () {
        egret.ImageLoader.crossOrigin = "anonymous";
        if (catchDoll.GlobeConst.isWXGame) {
            egret.MainContext.instance.stage.scaleMode = egret.StageScaleMode.FIXED_WIDTH;
        }
        else {
            egret.MainContext.instance.stage.scaleMode = egret.StageScaleMode.SHOW_ALL;
        }
        _super.prototype.createChildren.call(this);
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
        });
        // egret.lifecycle.onPause = () => {
        //     egret.ticker.pause();
        // }
        // egret.lifecycle.onResume = () => {
        //     egret.ticker.resume();
        // }
        //inject the custom material parser
        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, userInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.createGameScene();
                        return [4 /*yield*/, RES.getResAsync("description_json")];
                    case 2:
                        result = _a.sent();
                        return [4 /*yield*/, platform.login()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, platform.getUserInfo()];
                    case 4:
                        userInfo = _a.sent();
                        console.log(userInfo);
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 7, , 8]);
                        loadingView = new LoadingUI();
                        this.stage.addChild(loadingView);
                        if (!catchDoll.GlobeConst.isWXGame) return [3 /*break*/, 2];
                        return [4 /*yield*/, RES.loadConfig("default.res.json", "http://129.28.87.105/wxRes/resource/")];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [4 /*yield*/, this.loadTheme()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView)];
                    case 6:
                        _a.sent();
                        this.stage.removeChild(loadingView);
                        return [3 /*break*/, 8];
                    case 7:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadTheme = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            var theme;
            if (catchDoll.GlobeConst.isWXGame) {
                theme = new eui.Theme("http://129.28.87.105/wxRes/resource/default.thm.json", _this.stage);
            }
            else {
                theme = new eui.Theme("resource/default.thm.json", _this.stage);
            }
            theme.addEventListener(eui.UIEvent.COMPLETE, function () {
                resolve();
            }, _this);
        });
    };
    /**
     * 创建场景界面
     * Create scene interface
     */
    Main.prototype.createGameScene = function () {
        catchDoll.GameCenter.instance;
        catchDoll.TurntableData.init();
        UICenter.instance.openUI(3 /* StartScene */);
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    Main.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    Main.prototype.startAnimation = function (result) {
        var _this = this;
        var parser = new egret.HtmlTextParser();
        var textflowArr = result.map(function (text) { return parser.parse(text); });
        var textfield = this.textfield;
        var count = -1;
        var change = function () {
            count++;
            if (count >= textflowArr.length) {
                count = 0;
            }
            var textFlow = textflowArr[count];
            // 切换描述内容
            // Switch to described content
            textfield.textFlow = textFlow;
            var tw = egret.Tween.get(textfield);
            tw.to({ "alpha": 1 }, 200);
            tw.wait(2000);
            tw.to({ "alpha": 0 }, 200);
            tw.call(change, _this);
        };
        change();
    };
    /**
     * 点击按钮
     * Click the button
     */
    Main.prototype.onButtonClick = function (e) {
        var panel = new eui.Panel();
        panel.title = "Title";
        panel.horizontalCenter = 0;
        panel.verticalCenter = 0;
        this.addChild(panel);
    };
    return Main;
}(eui.UILayer));
__reflect(Main.prototype, "Main");
var DebugPlatform = (function () {
    function DebugPlatform() {
    }
    DebugPlatform.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { nickName: "username" }];
            });
        });
    };
    DebugPlatform.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return DebugPlatform;
}());
__reflect(DebugPlatform.prototype, "DebugPlatform", ["Platform"]);
if (!window.platform) {
    window.platform = new DebugPlatform();
}
/**
 * 怪物
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var Monster = (function (_super) {
        __extends(Monster, _super);
        function Monster() {
            var _this = _super.call(this) || this;
            /**
             * 注册操作id
             */
            _this._registerAry = [];
            /**
             * 生命值
             */
            _this.life = NaN;
            /**
             * 最大生命值
             */
            _this.maxLife = NaN;
            /**
             * 是否活着
             */
            _this.isAlive = false;
            /**
             * 移动速度
             */
            _this.speed = 0;
            /**
             * 血条初始长度
             */
            _this.haemalStrandWidth = 100;
            /**
             * 源缩放
             */
            _this.originScale = 1;
            return _this;
        }
        Monster.prototype.loadConfigAsset = function (assetData) {
            _super.prototype.loadConfigAsset.call(this, assetData);
            if (this._dragonBones) {
                this.originScale = this._dragonBones.scaleX = this._dragonBones.scaleY = 0.4;
            }
        };
        /**
         * 加载配置
         */
        Monster.prototype.loadConfigData = function (data) {
            this.speed = data.speed;
            this.maxLife = data.life;
            this.haemalStrand = new eui.Image();
            this.haemalStrand.source = "battle_13";
            this.haemalStrandFrame = new eui.Image();
            this.haemalStrandFrame.source = "battle_10";
            this.haemalStrandFrame.scale9Grid = this.haemalStrand.scale9Grid = new egret.Rectangle(10, 10, 27, 2);
            this.haemalStrand.y = this.haemalStrandFrame.y = -100;
            this.haemalStrand.width = this.haemalStrandFrame.width = this.haemalStrandWidth;
            this.haemalStrandFrame.x = this.haemalStrand.x = -this.haemalStrand.width / 2;
            this.haemalGroup = new egret.DisplayObjectContainer();
            this.addChild(this.haemalGroup);
            this.haemalGroup.addChild(this.haemalStrand);
            this.haemalGroup.addChild(this.haemalStrandFrame);
            /*暂时屏蔽*/
            this.haemalGroup.visible = false;
        };
        /**
         * 初始化
         */
        Monster.prototype.initialize = function () {
            _super.prototype.initialize.call(this);
            if (this._dragonBones) {
                this._dragonBones.animation.play("Walk", 0);
            }
            this.life = this.maxLife;
            this.haemalStrand.width = this.haemalStrandWidth;
            this.isAlive = true;
            var varsData = this.varsData;
            if (varsData.operation) {
                for (var i = 0; i < varsData.operation.length; i++) {
                    this._registerAry.push(catchDoll.OperationManager.instance.registerOperation(this, varsData.operation[i].type));
                }
            }
        };
        /**
         * 移除行为
         */
        Monster.prototype.unregisterOperation = function () {
            for (var i = 0; i < this._registerAry.length; i++) {
                catchDoll.OperationManager.instance.unregisterOperation(this._registerAry[i]);
            }
            this._registerAry.length = 0;
        };
        /**
         * 反初始化
         */
        Monster.prototype.uninitialize = function () {
            _super.prototype.uninitialize.call(this);
            this.unregisterOperation();
        };
        /**
         * 释放
         */
        Monster.prototype.dispose = function () {
            this._registerAry.length = 0;
            this.haemalStrand = null;
            this.haemalStrandFrame = null;
            _super.prototype.dispose.call(this);
        };
        return Monster;
    }(catchDoll.GameObjectCollider));
    catchDoll.Monster = Monster;
    __reflect(Monster.prototype, "catchDoll.Monster");
})(catchDoll || (catchDoll = {}));
/**
 * 爪子
 */
var catchDoll;
(function (catchDoll) {
    var Paws = (function (_super) {
        __extends(Paws, _super);
        function Paws() {
            var _this = _super.call(this) || this;
            /**
             * uid
             */
            _this.uID = NaN;
            /**
             * 携带参数
             */
            _this.varsData = null;
            /**
             * 是否可以被释放
             */
            _this.canDispose = false;
            /**
             * 引用计数
             */
            _this.refCount = 0;
            /**
             * 注册操作id
             */
            _this._registerAry = [];
            /**
             * 起始Y
             */
            _this.pawsHeadStartPosY = 0;
            _this.skinName = "PawsSkin";
            return _this;
        }
        /**
         * 设置数据
         */
        Paws.prototype.setData = function (sign, uID, varsData, layerType) {
            if (layerType === void 0) { layerType = 4 /* MONSTER */; }
            this.sign = sign;
            this.uID = uID;
            this.varsData = varsData;
            this.layerType = layerType;
        };
        /**
         * 加载资源
         */
        Paws.prototype.loadConfigAsset = function (assetData) {
        };
        /**
         * 校准绳子长度
         */
        Paws.prototype.confirmRopeHeight = function () {
            this.rope.height = this.pawsHead.y - this.headImg.y - 15;
        };
        /**
         * 加载配置数据
         */
        Paws.prototype.loadConfigData = function (configData) {
            this.pawsHeadStartPosY = this.pawsHead.y;
        };
        /**
         * 只初始化一次（在loadConfigData之后调用）
         */
        Paws.prototype.initOther = function () {
            this.confirmRopeHeight();
            this.pawsHead.addEventListener(egret.TouchEvent.TOUCH_TAP, this._clikPawsHead, this);
        };
        /**
         * 切换夹子
         */
        Paws.prototype._clikPawsHead = function () {
            this.switchClip(UIUtil.circleAdd(this.clipID, 1, 4));
        };
        /**
         * 切换夹子
         */
        Paws.prototype.switchClip = function (clipID) {
            if (this.downEff) {
                this.pawsHead.removeChild(this.downEff);
            }
            this.clipID = clipID;
            var assetData = ConfigParse.getPropertyByProperty(catchDoll.TableCenter.instance.ClipTable, "id", clipID.toString(), "movieClipAry")[0];
            this.downEff = UIUtil.creatMovieClip(assetData.groupName, assetData.actionName);
            this.downEff.x = this.pawsHead.width / 2;
            this.downEff.y = this.pawsHead.height / 2;
            this.downEff.gotoAndStop(1);
            this.downEff.frameRate = 8;
            this.hurt = ConfigParse.getPropertyByProperty(catchDoll.TableCenter.instance.ClipTable, "id", clipID.toString(), "hurt");
            this.pawsHead.addChild(this.downEff);
        };
        /**
         * 初始化
         */
        Paws.prototype.initialize = function () {
            catchDoll.LayerManager.instance.addToLayer(this, 4 /* MONSTER */);
            this._registerAry.push(catchDoll.OperationManager.instance.registerOperation(this, 0 /* MASTER */));
        };
        /**
         * 反初始化
         */
        Paws.prototype.uninitialize = function () {
            for (var i = 0; i < this._registerAry.length; i++) {
                catchDoll.OperationManager.instance.unregisterOperation(this._registerAry[i]);
            }
            this._registerAry.length = 0;
            catchDoll.LayerManager.instance.removeFromLayer(this, 4 /* MONSTER */);
        };
        /**
         * 释放
         */
        Paws.prototype.dispose = function () {
            this.pawsHead.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._clikPawsHead, this);
            this.uID = NaN;
            this.varsData = null;
            this.refCount = 0;
        };
        return Paws;
    }(eui.Component));
    catchDoll.Paws = Paws;
    __reflect(Paws.prototype, "catchDoll.Paws", ["catchDoll.IGameObject"]);
})(catchDoll || (catchDoll = {}));
/**
 * <code>Laya</code> 是全局对象的引用入口集。
 * Laya类引用了一些常用的全局对象，使用时注意大小写。
 * author suo
 */
var Laya = (function () {
    function Laya() {
    }
    /**
     * 初始化
     */
    Laya.init = function () {
        Laya.timer = new Timer();
    };
    /** 逻辑时间管理器的引用，不允许缩放。*/
    Laya.timer = null;
    return Laya;
}());
__reflect(Laya.prototype, "Laya");
/**
 * 游戏对象管理器
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var GameObjectManager = (function () {
        function GameObjectManager() {
            /**
             * 游戏工厂
             */
            this.gameObjectFactory = catchDoll.GameObjectFactory.instance;
            /**
             * 游戏资源池
             */
            this.gameObjectPool = catchDoll.GameObjectPool.instance;
            /**
             * 游戏对象配置管理
             */
            this.gameObjectConfig = new catchDoll.GameObjectConfigParse();
        }
        Object.defineProperty(GameObjectManager, "instance", {
            /**
             * 获得单例
             */
            get: function () {
                if (this._instance == null) {
                    this._instance = new GameObjectManager();
                }
                return this._instance;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 释放
         */
        GameObjectManager.prototype.dispose = function () {
            this.gameObjectPool.dispose();
            this.gameObjectPool = null;
            this.gameObjectFactory.dispose();
            this.gameObjectFactory = null;
            this.gameObjectConfig.dispose();
            this.gameObjectConfig = null;
        };
        /**
         * 单例
         */
        GameObjectManager._instance = null;
        return GameObjectManager;
    }());
    catchDoll.GameObjectManager = GameObjectManager;
    __reflect(GameObjectManager.prototype, "catchDoll.GameObjectManager");
})(catchDoll || (catchDoll = {}));
/**
 * 层级管理
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var LayerManager = (function () {
        function LayerManager() {
            /**
             * 层级字典
             */
            this._layerMap = new SimpleMap();
            /**
             * 跟节点
             */
            this._root = new egret.DisplayObjectContainer();
            egret.MainContext.instance.stage.addChild(this._root);
            for (var i = 0 /* BG */; i < 7 /* EFFECT */ + 1; i++) {
                var layer = new egret.DisplayObjectContainer();
                // layer.touchChildren = false;
                this._layerMap.set(i, layer);
                this._root.addChild(layer);
            }
        }
        Object.defineProperty(LayerManager, "instance", {
            /**
             * 获得单例
             */
            get: function () {
                if (this._instance == null) {
                    this._instance = new LayerManager();
                }
                return this._instance;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 添加到对应层级
         */
        LayerManager.prototype.addToLayer = function (source, layerType) {
            var layer = this._layerMap.get(layerType);
            if (layer != null) {
                layer.addChild(source);
            }
            else {
                console.assert(false, "不存在该layerType！");
            }
        };
        /**
         * 移除
         */
        LayerManager.prototype.removeFromLayer = function (source, layerType) {
            if (source) {
                if (layerType) {
                    var layer = this._layerMap.get(layerType);
                    if (layer != null) {
                        layer.removeChild(source);
                    }
                }
                else {
                    UIUtil.removeSelf(source);
                }
            }
            else {
                console.assert(false, "source为空！");
            }
        };
        /**
         * 获得层级
         */
        LayerManager.prototype.getLayer = function (layerType) {
            return this._layerMap.get(layerType);
        };
        /**
         * 释放
         */
        LayerManager.prototype.dispose = function () {
            this._layerMap.clear();
        };
        return LayerManager;
    }());
    catchDoll.LayerManager = LayerManager;
    __reflect(LayerManager.prototype, "catchDoll.LayerManager");
})(catchDoll || (catchDoll = {}));
/**
 * 操作管理器 广义操作管理器
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var OperationManager = (function () {
        function OperationManager() {
            /**
             * 已注册的操作行为字典
             */
            this._resgisterOprDic = new Dictionary();
            /**
             * 操作类型映射字典
             */
            this._operationClsDic = new Dictionary();
            /**
             * 注册ID
             */
            this._registerID = -1;
            this._operationClsDic.set(1 /* MONSTER */, catchDoll.MonsterOperation);
            this._operationClsDic.set(0 /* MASTER */, catchDoll.MasterOperation);
            Laya.timer.frameLoop(1, this, this._update);
        }
        /**
         * 更新
         */
        OperationManager.prototype._update = function () {
            var len = this._resgisterOprDic.length;
            for (var i = 0; i < len; i++) {
                var item = this._resgisterOprDic.values[i];
                // if (egret.is(item, "catchDoll.MonsterOperation")) {
                item.enterFrame();
                // }
            }
        };
        Object.defineProperty(OperationManager, "instance", {
            /**
             * 获取单例
             */
            get: function () {
                if (this._instance == void 0) {
                    this._instance = new OperationManager();
                }
                return this._instance;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 对某个对象 注册操作方式 返回注册id用于反注册
         */
        OperationManager.prototype.registerOperation = function (gameObj, opeartionType) {
            if (gameObj == null) {
                console.assert(false, "注册对象为空！");
            }
            var cls = this._operationClsDic.get(opeartionType);
            if (cls == null) {
                console.assert(false, "operation 未被注册！");
            }
            var registerOperation = new cls();
            registerOperation.operationType = opeartionType;
            registerOperation.register(gameObj);
            this._registerID++;
            this._resgisterOprDic.set(this._registerID, registerOperation);
            return this._registerID;
        };
        /**
         * 反注册操作
         */
        OperationManager.prototype.unregisterOperation = function (registerID) {
            if (registerID == -1) {
                return;
            }
            var operation = this._resgisterOprDic.get(registerID);
            if (operation != null) {
                operation.unregister();
                operation = null;
                this._resgisterOprDic.remove(registerID);
            }
            else {
                console.assert(false, "registerID不存在！");
            }
        };
        /**
         * 释放
         */
        OperationManager.prototype.dispose = function () {
            Laya.timer.clear(this, this._update);
            this._resgisterOprDic.clear();
            this._resgisterOprDic = null;
            this._operationClsDic.clear();
            this._operationClsDic = null;
        };
        return OperationManager;
    }());
    catchDoll.OperationManager = OperationManager;
    __reflect(OperationManager.prototype, "catchDoll.OperationManager");
})(catchDoll || (catchDoll = {}));
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var ThemeAdapter = (function () {
    function ThemeAdapter() {
    }
    /**
     * 解析主题
     * @param url 待解析的主题url
     * @param onSuccess 解析完成回调函数，示例：compFunc(e:egret.Event):void;
     * @param onError 解析失败回调函数，示例：errorFunc():void;
     * @param thisObject 回调的this引用
     */
    ThemeAdapter.prototype.getTheme = function (url, onSuccess, onError, thisObject) {
        var _this = this;
        function onResGet(e) {
            onSuccess.call(thisObject, e);
        }
        function onResError(e) {
            if (e.resItem.url == url) {
                RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
                onError.call(thisObject);
            }
        }
        if (typeof generateEUI !== 'undefined') {
            egret.callLater(function () {
                onSuccess.call(thisObject, generateEUI);
            }, this);
        }
        else if (typeof generateEUI2 !== 'undefined') {
            RES.getResByUrl("resource/gameEui.json", function (data, url) {
                window["JSONParseClass"]["setData"](data);
                egret.callLater(function () {
                    onSuccess.call(thisObject, generateEUI2);
                }, _this);
            }, this, RES.ResourceItem.TYPE_JSON);
        }
        else if (typeof generateJSON !== 'undefined') {
            if (url.indexOf(".exml") > -1) {
                var dataPath = url.split("/");
                dataPath.pop();
                var dirPath = dataPath.join("/") + "_EUI.json";
                if (!generateJSON.paths[url]) {
                    RES.getResByUrl(dirPath, function (data) {
                        window["JSONParseClass"]["setData"](data);
                        egret.callLater(function () {
                            onSuccess.call(thisObject, generateJSON.paths[url]);
                        }, _this);
                    }, this, RES.ResourceItem.TYPE_JSON);
                }
                else {
                    egret.callLater(function () {
                        onSuccess.call(thisObject, generateJSON.paths[url]);
                    }, this);
                }
            }
            else {
                egret.callLater(function () {
                    onSuccess.call(thisObject, generateJSON);
                }, this);
            }
        }
        else {
            RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
            RES.getResByUrl(url, onResGet, this, RES.ResourceItem.TYPE_TEXT);
        }
    };
    return ThemeAdapter;
}());
__reflect(ThemeAdapter.prototype, "ThemeAdapter", ["eui.IThemeAdapter"]);
/**
 * 背包
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var BagPanel = (function (_super) {
        __extends(BagPanel, _super);
        function BagPanel() {
            var _this = _super.call(this, 1 /* CENTER */, true) || this;
            /**
             * 切换按钮组
             */
            _this._toggleButtonGroup = new ToggleButtonGroup();
            /**
             * 选中背景
             */
            _this.SELECT_BG_SOURCE = "bagPanel_10";
            /**
             * 未选中背景
             */
            _this.UN_SELECT_BG_SOURCE = "bagPanel_8";
            _this.skinName = "BagPanelSkin";
            return _this;
        }
        /**
         * 初始化
         */
        BagPanel.prototype.onInit = function () {
            var _this = this;
            var _loop_1 = function (i) {
                var toggle = new ToggleButton(this_1.skin["switchBtn" + i]);
                toggle.selectHandler = Handler.create(null, function () {
                    var bg = _this._getSwitchBtnBG(toggle);
                    bg.source = _this.SELECT_BG_SOURCE;
                    bg.width = 200;
                    _this._getSwitchBtnFont(toggle).x = 45;
                });
                toggle.cancelHanlder = Handler.create(null, function () {
                    var bg = _this._getSwitchBtnBG(toggle);
                    bg.source = _this.UN_SELECT_BG_SOURCE;
                    bg.width = 159;
                    _this._getSwitchBtnFont(toggle).x = 23;
                });
                this_1._toggleButtonGroup.push(toggle);
            };
            var this_1 = this;
            for (var i = 1; i < 5; i++) {
                _loop_1(i);
            }
        };
        /**
         * 获得切换按钮背景
         */
        BagPanel.prototype._getSwitchBtnBG = function (btn) {
            return btn.root.getChildAt(0);
        };
        /**
         * 获得切换按钮字
         */
        BagPanel.prototype._getSwitchBtnFont = function (btn) {
            return btn.root.getChildAt(1);
        };
        /**
         * 自适应
         */
        BagPanel.prototype._selfAdaption = function () {
            if (this.skin["bg"] != null) {
                this._panelWidth = this.skin["bg"].width;
                this._panelHeight = this.skin["bg"].height;
                this._panelX = this.skin["bg"].x;
                this._panelY = this.skin["bg"].y;
            }
            else {
                this._panelWidth = this.width;
                this._panelHeight = this.height;
            }
            this._posX = (catchDoll.GameCenter.stageW - this._panelWidth) / 2 - this._panelX - 100;
            this._posY = (catchDoll.GameCenter.stageH - this._panelHeight) / 2 - this._panelY;
        };
        /**
         * 显示时
         */
        BagPanel.prototype.onShow = function () {
            this.addToStage();
            this._toggleButtonGroup.clickByIndex = 0;
            this.closeBtnHandler = Handler.create(null, function () { catchDoll.SimpleUICenter.instance.closeUI(2 /* bagPanel */); }, null, false);
        };
        /**
         * 隐藏时
         */
        BagPanel.prototype.onHide = function () {
        };
        /**
         * 释放
         */
        BagPanel.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
            this._toggleButtonGroup.dispose();
            this._toggleButtonGroup = null;
        };
        return BagPanel;
    }(catchDoll.BasePopPanel));
    catchDoll.BagPanel = BagPanel;
    __reflect(BagPanel.prototype, "catchDoll.BagPanel", ["IBaseSimpleUI"]);
})(catchDoll || (catchDoll = {}));
/**
 * 购买道具面板
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var BuyItemPanel = (function (_super) {
        __extends(BuyItemPanel, _super);
        function BuyItemPanel() {
            var _this = _super.call(this) || this;
            /**
             * 道具数量
             */
            _this.itemNum = 1;
            _this.skinName = "BuyItemPanelSkin";
            return _this;
        }
        /**
         * 初始化
         */
        BuyItemPanel.prototype.onInit = function () {
            this.buyBtn = new Button(this.skin["_buyBtn"]);
            this.decBtn = new Button(this.skin["_decBtn"]);
            this.incBtn = new Button(this.skin["_incBtn"]);
        };
        /**
         * 显示时
         */
        BuyItemPanel.prototype.onShow = function () {
            var _this = this;
            this.addToStage();
            var data = catchDoll.TableCenter.instance.getPropDataByID(this.openParam);
            this.data = data;
            this.itemImg.source = data.source;
            this.itemName.text = data.name;
            this.itemPrice.text = data.price.toString();
            this.closeBtnHandler = Handler.create(null, function () {
                catchDoll.SimpleUICenter.instance.closeUI(6 /* buyItemPanel */);
            }, null, true);
            this.incBtn.mouseClickHandler = Handler.create(null, function () {
                _this.itemNum = UIUtil.circleAdd(_this.itemNum, 1, 10);
                _this.numLabel.text = "X" + _this.itemNum.toString();
                _this.itemPrice.text = (_this.itemNum * _this.data.price).toString();
            });
            this.decBtn.mouseClickHandler = Handler.create(null, function () {
                _this.itemNum--;
                if (_this.itemNum <= 0) {
                    _this.itemNum = 10;
                }
                _this.itemPrice.text = (_this.itemNum * _this.data.price).toString();
                _this.numLabel.text = "X" + _this.itemNum.toString();
            });
        };
        /**
         * 隐藏时
         */
        BuyItemPanel.prototype.onHide = function () {
        };
        /**
         * 释放
         */
        BuyItemPanel.prototype.dispose = function () {
            this.data = null;
            this.buyBtn.dispose();
            this.buyBtn = null;
            this.decBtn.dispose();
            this.decBtn = null;
            this.incBtn.dispose();
            this.incBtn = null;
            _super.prototype.dispose.call(this);
        };
        return BuyItemPanel;
    }(catchDoll.BasePopPanel));
    catchDoll.BuyItemPanel = BuyItemPanel;
    __reflect(BuyItemPanel.prototype, "catchDoll.BuyItemPanel", ["IBaseSimpleUI"]);
})(catchDoll || (catchDoll = {}));
/*
 * map数据结构  使用更加方便  但是不适合大数据存储  会消耗大量内存
 */
var Map = (function () {
    function Map() {
        this._hashKeys = new Dictionary();
        this._keys = new Array();
        this._datas = new Dictionary();
    }
    Map.prototype.dispose = function () {
        this.clear();
        this._hashKeys = null;
        this._datas = null;
        this._keys = null;
    };
    Map.prototype.addValue = function (key, value) {
        if (this.isExist(key)) {
            this._datas[key] = value;
            return;
        }
        this._hashKeys[key] = key;
        this._datas[key] = value;
        this._keys.push(key);
    };
    Map.prototype.removeValue = function (key) {
        var count = this._keys.length;
        for (var i = 0; i < count; i++) {
            var curKey = this._keys[i];
            if (curKey == key) {
                this._keys.splice(i, 1);
                delete this._datas[key];
                delete this._hashKeys[key];
                return;
            }
        }
    };
    Map.prototype.isExist = function (key) {
        if (key == null) {
            return false;
        }
        return (this._hashKeys[key] != null);
    };
    Map.prototype.clear = function () {
        var count = this._keys.length;
        for (var i = 0; i < count; ++i) {
            var key = this._keys[i];
            if (key != null) {
                delete this._datas[key];
                delete this._hashKeys[key];
            }
        }
        this._keys.splice(0, this._keys.length);
    };
    Object.defineProperty(Map.prototype, "length", {
        get: function () {
            return this._keys.length;
        },
        enumerable: true,
        configurable: true
    });
    Map.prototype.getKey = function (index) {
        if (index >= this._keys.length) {
            return null;
        }
        var key = this._keys[index];
        return key;
    };
    Map.prototype.getKeys = function () {
        var keys = new Array();
        var count = this._keys.length;
        for (var i = 0; i < count; ++i) {
            var key = this._keys[i];
            if (key != null) {
                keys.push(key);
            }
        }
        return keys;
    };
    Map.prototype.getValueByKey = function (key) {
        if (!this.isExist(key)) {
            return null;
        }
        return this._datas[key];
    };
    Map.prototype.getValueByIndex = function (index) {
        if (index >= this._keys.length) {
            return null;
        }
        var key = this._keys[index];
        return this._datas[key];
    };
    return Map;
}());
__reflect(Map.prototype, "Map");
/**
 * 原作者 momo
 * @author suo
 */
var ResData = (function () {
    function ResData(url, resType) {
        this.url = url;
        this.resType = resType;
    }
    return ResData;
}());
__reflect(ResData.prototype, "ResData");
/**
 * 原作者 momo
 * @author suo
 */
var UICenter = (function (_super) {
    __extends(UICenter, _super);
    function UICenter() {
        var _this = _super.call(this) || this;
        _this.addManager(0 /* BattleScene */, catchDoll.BattleSceneManager);
        _this.addManager(1 /* SelectLevel */, catchDoll.WorldMapManager);
        _this.addManager(2 /* TurnTable */, catchDoll.TurntableManager);
        _this.addManager(3 /* StartScene */, catchDoll.StartSceneManager);
        _this.addManager(4 /* BattleEnterPanel */, catchDoll.BattleEnterPanelManager);
        _this.addManager(5 /* RegisterPanel */, catchDoll.RegisterPanelManager);
        _this.addManager(6 /* FunctionUI */, catchDoll.FunctionUIManager);
        _this.addManager(7 /* SetUpPanel */, catchDoll.SetUpPanelManager);
        return _this;
    }
    Object.defineProperty(UICenter, "instance", {
        get: function () {
            if (this._instance == null) {
                this._instance = new UICenter();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    UICenter._instance = null;
    return UICenter;
}(BaseUICenter));
__reflect(UICenter.prototype, "UICenter");
/**
 * 原作者 momo
 * @author suo
 */
var UIControlCenter = (function () {
    function UIControlCenter(ui, dataCenter, viewCenter) {
        this._ui = null;
        this._dataCenter = null;
        this._viewCenter = null;
        this._controls = new Map();
        this._ui = ui;
        this._dataCenter = dataCenter;
        this._viewCenter = viewCenter;
    }
    UIControlCenter.prototype.dispose = function () {
        if (this._controls != null) {
            for (var i = 0; i < this._controls.length; ++i) {
                var control = this._controls.getValueByIndex(i);
                if (control != null) {
                    control.dispose();
                    control = null;
                }
            }
            this._controls.clear();
            this._controls = null;
        }
        this._viewCenter = null;
        this._dataCenter = null;
        this._ui = null;
    };
    UIControlCenter.prototype.onInit = function () {
        var control = null;
        var i = 0;
        for (i = 0; i < this._controls.length; ++i) {
            var controlClass = this._controls.getKey(i);
            control = new controlClass();
            control.init(this._dataCenter, this._viewCenter);
            this._controls.addValue(controlClass, control);
        }
        for (i = 0; i < this._controls.length; ++i) {
            control = this._controls.getValueByIndex(i);
            if (control != null) {
                control.onInit();
            }
        }
    };
    UIControlCenter.prototype.onShow = function () {
        for (var i = 0; i < this._controls.length; ++i) {
            var control = this._controls.getValueByIndex(i);
            if (control != null) {
                control.onShow();
            }
        }
    };
    UIControlCenter.prototype.onOpenAgain = function () {
        for (var i = 0; i < this._controls.length; ++i) {
            var control = this._controls.getValueByIndex(i);
            if (control != null) {
                control.onOpenAgain();
            }
        }
    };
    UIControlCenter.prototype.onHide = function () {
        for (var i = 0; i < this._controls.length; ++i) {
            var control = this._controls.getValueByIndex(i);
            if (control != null) {
                control.onHide();
                control.dispose();
                this._controls.addValue(this._controls.getKey(i), null);
            }
        }
    };
    UIControlCenter.prototype.addControl = function (className) {
        if (null == className) {
            return;
        }
        this._controls.addValue(className, null);
    };
    UIControlCenter.prototype.getControl = function (className) {
        if (null == this._controls) {
            return null;
        }
        return this._controls.getValueByKey(className);
    };
    UIControlCenter.prototype.isExist = function (className) {
        if (null == this._controls) {
            return false;
        }
        return this._controls.isExist(className);
    };
    return UIControlCenter;
}());
__reflect(UIControlCenter.prototype, "UIControlCenter");
/**
 * 原作者 momo
 * @author suo
 */
var UIDataCenter = (function () {
    function UIDataCenter() {
        this._datas = new Map();
        this._isLoading = false;
        this._isLoaded = false;
        this._isOpened = false;
        this._openParam = null;
    }
    Object.defineProperty(UIDataCenter.prototype, "openParam", {
        get: function () {
            return this._openParam;
        },
        set: function (param) {
            this._openParam = param;
        },
        enumerable: true,
        configurable: true
    });
    UIDataCenter.prototype.dispose = function () {
        if (this._datas != null) {
            for (var i = 0; i < this._datas.length; i++) {
                var data = this._datas.getValueByIndex(i);
                if (data != null) {
                    data.dispose();
                    data = null;
                }
            }
            this._datas.dispose();
            this._datas = null;
        }
        this._openParam = null;
    };
    UIDataCenter.prototype.onInit = function () {
        for (var i = 0; i < this._datas.length; i++) {
            var dataClass = this._datas.getKey(i);
            this._datas.addValue(dataClass, new dataClass());
        }
    };
    UIDataCenter.prototype.onShow = function () {
    };
    UIDataCenter.prototype.onHide = function () {
        if (this._datas != null) {
            for (var i = 0; i < this._datas.length; i++) {
                var data = this._datas.getValueByIndex(i);
                if (data != null) {
                    data.dispose();
                    data = null;
                    this._datas.addValue(this._datas.getKey(i), null);
                }
            }
        }
    };
    UIDataCenter.prototype.addData = function (className) {
        if (className == null) {
            return;
        }
        this._datas.addValue(className, null);
    };
    UIDataCenter.prototype.getData = function (className) {
        if (this._datas == null) {
            return null;
        }
        return this._datas.getValueByKey(className);
    };
    UIDataCenter.prototype.isExist = function (className) {
        if (this._datas == null) {
            return false;
        }
        return this._datas.isExist(className);
    };
    Object.defineProperty(UIDataCenter.prototype, "isLoading", {
        get: function () {
            return this._isLoading;
        },
        set: function (value) {
            this._isLoading = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIDataCenter.prototype, "isLoaded", {
        get: function () {
            return this._isLoaded;
        },
        set: function (value) {
            this._isLoaded = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIDataCenter.prototype, "isOpened", {
        get: function () {
            return this._isOpened;
        },
        set: function (value) {
            this._isOpened = value;
        },
        enumerable: true,
        configurable: true
    });
    return UIDataCenter;
}());
__reflect(UIDataCenter.prototype, "UIDataCenter");
/**
 * 原作者 momo
 * @author suo
 */
var UIOpenParam = (function () {
    function UIOpenParam() {
    }
    UIOpenParam.prototype.reset = function () {
    };
    UIOpenParam.prototype.dispose = function () {
    };
    return UIOpenParam;
}());
__reflect(UIOpenParam.prototype, "UIOpenParam");
/**
 * 原作者 momo
 * @author suo
 */
var UIViewCenter = (function () {
    function UIViewCenter() {
        this._views = new Map();
    }
    UIViewCenter.prototype.dispose = function () {
        if (this._views != null) {
            for (var i = 0; i < this._views.length; i++) {
                var view = this._views.getValueByIndex(i);
                if (view != null) {
                    view.dispose();
                    view = null;
                }
            }
            this._views.clear();
            this._views = null;
        }
    };
    UIViewCenter.prototype.onInit = function () {
        var i = 0;
        for (i = 0; i < this._views.length; i++) {
            var viewClass = this._views.getKey(i);
            this._views.addValue(viewClass, new viewClass());
        }
        for (i = 0; i < this._views.length; i++) {
            var view = this._views.getValueByIndex(i);
            if (view != null) {
                view.onInit();
            }
        }
    };
    UIViewCenter.prototype.onShow = function () {
        for (var i = 0; i < this._views.length; i++) {
            var view = this._views.getValueByIndex(i);
            if (view != null) {
                view.onShow();
            }
        }
    };
    UIViewCenter.prototype.onHide = function () {
        for (var i = 0; i < this._views.length; i++) {
            var view = this._views.getValueByIndex(i);
            if (view != null) {
                view.onHide();
                view.dispose();
                this._views.addValue(this._views.getKey(i), null);
            }
        }
    };
    UIViewCenter.prototype.addView = function (className) {
        if (className == null) {
            return;
        }
        this._views.addValue(className, null);
    };
    UIViewCenter.prototype.getView = function (className) {
        if (this._views == null) {
            return null;
        }
        return this._views.getValueByKey(className);
    };
    UIViewCenter.prototype.isExist = function (className) {
        if (this._views == null) {
            return false;
        }
        return this._views.isExist(className);
    };
    Object.defineProperty(UIViewCenter.prototype, "viewLength", {
        get: function () {
            return this._views.length;
        },
        enumerable: true,
        configurable: true
    });
    UIViewCenter.prototype.getViewByIndex = function (index) {
        return this._views.getValueByIndex(index);
    };
    return UIViewCenter;
}());
__reflect(UIViewCenter.prototype, "UIViewCenter");
/**
 * 关卡创建
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var LevelCreate = (function () {
        function LevelCreate() {
        }
        /**
         * 初始化
         */
        LevelCreate.prototype.init = function () {
            this._creatMonster();
            this._creatMaster();
            EventManager.registerEvent(2 /* CREAT_MONSTER */, Handler.create(this, this._creatRandomMonster));
        };
        Object.defineProperty(LevelCreate, "instance", {
            /**
             * 获得单例
             */
            get: function () {
                if (this._instance == null) {
                    this._instance = new LevelCreate();
                }
                return this._instance;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 创建怪物
         */
        LevelCreate.prototype._creatMonster = function () {
            for (var i = 4 /* MONSTER_ROBOT */; i <= 6 /* MONSTER_Cactus */; i++) {
                var varsData = {};
                varsData.bornX = 500;
                varsData.bornY = 980;
                varsData.operation = [{
                        type: 1 /* MONSTER */
                    }];
                catchDoll.GameObjectFactory.instance.creatGameObject(i, varsData);
            }
        };
        /**
         * 创建主角
         */
        LevelCreate.prototype._creatMaster = function () {
            catchDoll.Master.instance.MasterPaws = catchDoll.GameObjectFactory.instance.creatGameObject(101 /* PAWS */);
            catchDoll.Master.instance.MasterPaws.switchClip(1);
            catchDoll.Master.instance.MasterPaws.y = 160;
            catchDoll.Master.instance.MasterPaws.x = 500;
        };
        /**
         * 随机创建怪物
         */
        LevelCreate.prototype._creatRandomMonster = function () {
            var varsData = {};
            varsData.bornX = 500;
            varsData.bornY = 925;
            varsData.operation = [{
                    type: 1 /* MONSTER */
                }];
            catchDoll.GameObjectFactory.instance.creatGameObject(MathUtil.random(1 /* MONSTER_1 */, 4 /* MONSTER_ROBOT */), varsData);
        };
        /**
         * 释放
         */
        LevelCreate.prototype.dispose = function () {
            var len = LevelCreate.inViewMonsterMap.length;
            var map = LevelCreate.inViewMonsterMap.copy();
            for (var i = 0; i < len; i++) {
                var monster = map.values[i];
                catchDoll.GameObjectFactory.instance.recoverGameObject(monster);
            }
            if (catchDoll.Master.instance.MasterPaws) {
                catchDoll.GameObjectFactory.instance.recoverGameObject(catchDoll.Master.instance.MasterPaws);
                catchDoll.Master.instance.MasterPaws = null;
            }
            EventManager.unregisterEvent(2 /* CREAT_MONSTER */, this, this._creatRandomMonster);
        };
        /**
         * 在视野内的怪物
         */
        LevelCreate.inViewMonsterMap = new Dictionary();
        return LevelCreate;
    }());
    catchDoll.LevelCreate = LevelCreate;
    __reflect(LevelCreate.prototype, "catchDoll.LevelCreate");
})(catchDoll || (catchDoll = {}));
/**
 * 主角控制器
 */
var catchDoll;
(function (catchDoll) {
    var MasterOperation = (function (_super) {
        __extends(MasterOperation, _super);
        function MasterOperation() {
            var _this = _super.call(this) || this;
            /**
             * 正在下钩子
             */
            _this._isDown = false;
            /**
             * 是否向左
             */
            _this._isLeft = false;
            /**
             * 抓住的娃娃
             */
            _this._catchMonster = null;
            return _this;
        }
        /**
         * 注册
         */
        MasterOperation.prototype.register = function (gameObj) {
            this._gameObj = gameObj;
            EventManager.registerEvent(0 /* MASTER_MOVE */, Handler.create(this, this._masterMove));
            EventManager.registerEvent(1 /* MASTER_DOWN */, Handler.create(this, this._masterDown));
        };
        /**
         * 下钩子
         */
        MasterOperation.prototype._masterDown = function () {
            var _this = this;
            if (this._isDown) {
                return;
            }
            this._isDown = true;
            // Laya.timer.once(600, null, () => {
            // 	this._gameObj.downEff.gotoAndPlay(1, 1);
            // 	this._gameObj.downEff.once(egret.MovieClipEvent.COMPLETE, () => {
            // 		this._gameObj.downEff.gotoAndStop(1);
            // 	}, null)
            // })
            this._catchMonster = null;
            egret.Tween.get(this._gameObj.pawsHead, {
                onChange: function () {
                    _this._gameObj.confirmRopeHeight();
                }
            }).wait(100).to({ y: 660 }, 500, egret.Ease.quadIn).call(function () {
                var monsterMap = catchDoll.LevelCreate.inViewMonsterMap;
                var globePosx = _this._gameObj.x;
                for (var i = 0; i < monsterMap.length; i++) {
                    var monster = monsterMap.values[i];
                    var monsterGlobePosx = monster.x;
                    egret.log("钩子跟怪的距离：" + Math.abs(monsterGlobePosx - globePosx));
                    if (Math.abs(monsterGlobePosx - globePosx) <= 60) {
                        _this._catchMonster = monster;
                        break;
                    }
                }
                if (_this._catchMonster) {
                    /*血条缩短*/
                    var targetWidth_1 = 0;
                    _this._catchMonster.life -= _this._gameObj.hurt;
                    if (_this._catchMonster.life <= 0) {
                        _this._catchMonster.life = 0;
                        targetWidth_1 = 0;
                        _this._catchMonster.x = _this._gameObj.x;
                        _this._catchMonster.y = _this._gameObj.pawsHead.y + 300;
                        _this._catchMonster.unregisterOperation();
                    }
                    else {
                        egret.log(_this._catchMonster.life + " " + _this._catchMonster.maxLife + " " + _this._catchMonster.haemalStrandWidth);
                        targetWidth_1 = _this._catchMonster.life / _this._catchMonster.maxLife * _this._catchMonster.haemalStrandWidth;
                    }
                    egret.log("targetWidth:" + targetWidth_1);
                    egret.Tween.get(_this._catchMonster.haemalStrand).to({ width: targetWidth_1 }, 300, egret.Ease.quadIn).call(function () {
                        if (targetWidth_1 == 0) {
                            egret.Tween.get(_this._gameObj.pawsHead, {
                                onChange: _this._pwdUpAction,
                                onChangeObj: _this
                            }).wait(200).to({ y: _this._gameObj.pawsHeadStartPosY }, 600, egret.Ease.quadIn).call(function () {
                                catchDoll.GameObjectFactory.instance.recoverGameObject(_this._catchMonster);
                                _this._catchMonster = null;
                                _this._isDown = false;
                                /*抓住了就2s后再创建一个*/
                                // Laya.timer.once(2000, this, this._addMonster)
                            });
                        }
                        else {
                            _this._noCatchAction();
                        }
                    });
                }
                else {
                    _this._noCatchAction();
                }
            });
        };
        MasterOperation.prototype._noCatchAction = function () {
            var _this = this;
            egret.Tween.get(this._gameObj.pawsHead, {
                onChange: function () {
                    _this._gameObj.confirmRopeHeight();
                }
            }).wait(300).to({ y: this._gameObj.pawsHeadStartPosY }, 600, egret.Ease.getBackOut(1.3)).call(function () {
                _this._isDown = false;
            });
        };
        /**
         * 爪子上提动作
         */
        MasterOperation.prototype._pwdUpAction = function () {
            this._gameObj.confirmRopeHeight();
            if (this._catchMonster) {
                this._catchMonster.x = this._gameObj.x;
                this._catchMonster.y = this._gameObj.pawsHead.y + 300;
            }
        };
        // /**
        //  * 添加一个怪物
        //  */
        // private _addMonster(): void {
        // 	EventManager.fireEvent(EVENT_ID.CREAT_MONSTER);
        // }
        /**
         * 玩家移动
         */
        MasterOperation.prototype._masterMove = function (isLeft) {
            this._isLeft = isLeft;
        };
        /**
         * 反注册
         */
        MasterOperation.prototype.unregister = function () {
            // Laya.timer.clear(this, this._addMonster)
            egret.Tween.removeTweens(this._gameObj.pawsHead);
            this._gameObj.pawsHead.y = this._gameObj.pawsHeadStartPosY;
            this._gameObj.confirmRopeHeight();
            if (this._catchMonster) {
                egret.Tween.removeTweens(this._catchMonster.haemalStrand);
                this._catchMonster = null;
            }
            EventManager.unregisterEvent(0 /* MASTER_MOVE */, this, this._masterMove);
            EventManager.unregisterEvent(1 /* MASTER_DOWN */, this, this._masterDown);
        };
        /**
         * 帧循环
         */
        MasterOperation.prototype.enterFrame = function () {
            if (this._isDown) {
                return;
            }
            var moveSpeed = 2.5;
            if (this._isLeft) {
                if (this._gameObj.x - moveSpeed > 10) {
                    this._gameObj.x -= moveSpeed;
                }
                else {
                    this._isLeft = false;
                }
            }
            else {
                if (this._gameObj.x + moveSpeed < catchDoll.GameCenter.stageW - 20) {
                    this._gameObj.x += moveSpeed;
                }
                else {
                    this._isLeft = true;
                }
            }
        };
        return MasterOperation;
    }(catchDoll.BaseOperation));
    catchDoll.MasterOperation = MasterOperation;
    __reflect(MasterOperation.prototype, "catchDoll.MasterOperation");
})(catchDoll || (catchDoll = {}));
var catchDoll;
(function (catchDoll) {
    var MonsterOperation = (function (_super) {
        __extends(MonsterOperation, _super);
        function MonsterOperation() {
            var _this = _super.call(this) || this;
            /**
             * 是否反转
             */
            _this.isReverse = false;
            return _this;
        }
        /**
         * 注册
         */
        MonsterOperation.prototype.register = function (gameObj) {
            this._gameObj = gameObj;
        };
        /**
         * 反注册
         */
        MonsterOperation.prototype.unregister = function () {
        };
        /**
         * 帧循环
         */
        MonsterOperation.prototype.enterFrame = function () {
            if (this._gameObj.x > catchDoll.GameCenter.stageW) {
                this.isReverse = true;
            }
            else if (this._gameObj.x < 0) {
                this.isReverse = false;
            }
            if (this.isReverse) {
                if (this._gameObj.imagePlayer) {
                    this._gameObj.imagePlayer.scaleX = -1;
                }
                this._gameObj.x -= this._gameObj.speed;
            }
            else {
                if (this._gameObj.imagePlayer) {
                    this._gameObj.imagePlayer.scaleX = 1;
                }
                this._gameObj.x += this._gameObj.speed;
            }
        };
        return MonsterOperation;
    }(catchDoll.BaseOperation));
    catchDoll.MonsterOperation = MonsterOperation;
    __reflect(MonsterOperation.prototype, "catchDoll.MonsterOperation");
})(catchDoll || (catchDoll = {}));
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------
var table;
(function (table) {
    /**
     * FILE: 游戏配置.xlsx SHEET: 夹子配置 KEY: id
     */
    var ClipTable = (function () {
        function ClipTable() {
        }
        ClipTable.prototype.GetType = function () { return 'table.ClipTable'; };
        return ClipTable;
    }());
    table.ClipTable = ClipTable;
    __reflect(ClipTable.prototype, "table.ClipTable");
    (function (ClipTable) {
        var MovieClipAryItem = (function () {
            function MovieClipAryItem() {
            }
            return MovieClipAryItem;
        }());
        ClipTable.MovieClipAryItem = MovieClipAryItem;
        __reflect(MovieClipAryItem.prototype, "table.ClipTable.MovieClipAryItem");
    })(ClipTable = table.ClipTable || (table.ClipTable = {}));
})(table || (table = {}));
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------
var table;
(function (table) {
    /**
     * FILE: 游戏配置.xlsx SHEET: 怪兽配置 KEY: id
     */
    var MonsterTable = (function () {
        function MonsterTable() {
        }
        MonsterTable.prototype.GetType = function () { return 'table.MonsterTable'; };
        return MonsterTable;
    }());
    table.MonsterTable = MonsterTable;
    __reflect(MonsterTable.prototype, "table.MonsterTable");
    (function (MonsterTable) {
        var ImageAryItem = (function () {
            function ImageAryItem() {
            }
            return ImageAryItem;
        }());
        MonsterTable.ImageAryItem = ImageAryItem;
        __reflect(ImageAryItem.prototype, "table.MonsterTable.ImageAryItem");
    })(MonsterTable = table.MonsterTable || (table.MonsterTable = {}));
})(table || (table = {}));
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------
var table;
(function (table) {
    /**
     * FILE: 游戏配置.xlsx SHEET: 物品配置 KEY: id
     */
    var PropTable = (function () {
        function PropTable() {
        }
        PropTable.prototype.GetType = function () { return 'table.PropTable'; };
        return PropTable;
    }());
    table.PropTable = PropTable;
    __reflect(PropTable.prototype, "table.PropTable");
})(table || (table = {}));
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------
var table;
(function (table) {
    /**
     * FILE: 游戏配置.xlsx SHEET: 商店配置
     */
    var shopTable = (function () {
        function shopTable() {
        }
        shopTable.prototype.GetType = function () { return 'table.shopTable'; };
        return shopTable;
    }());
    table.shopTable = shopTable;
    __reflect(shopTable.prototype, "table.shopTable");
})(table || (table = {}));
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------
var table;
(function (table) {
    /**
     * FILE: 游戏配置.xlsx SHEET: 任务配置 KEY: id
     */
    var TaskTable = (function () {
        function TaskTable() {
        }
        TaskTable.prototype.GetType = function () { return 'table.TaskTable'; };
        return TaskTable;
    }());
    table.TaskTable = TaskTable;
    __reflect(TaskTable.prototype, "table.TaskTable");
})(table || (table = {}));
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------
var table;
(function (table) {
    /**
     * FILE: 游戏配置.xlsx SHEET: 宝箱配置
     */
    var TreasureTable = (function () {
        function TreasureTable() {
        }
        TreasureTable.prototype.GetType = function () { return 'table.TreasureTable'; };
        return TreasureTable;
    }());
    table.TreasureTable = TreasureTable;
    __reflect(TreasureTable.prototype, "table.TreasureTable");
})(table || (table = {}));
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------
var table;
(function (table) {
    /**
     * FILE: 游戏配置.xlsx SHEET: 转盘配置 KEY: id
     */
    var TurntableList = (function () {
        function TurntableList() {
        }
        TurntableList.prototype.GetType = function () { return 'table.TurntableList'; };
        return TurntableList;
    }());
    table.TurntableList = TurntableList;
    __reflect(TurntableList.prototype, "table.TurntableList");
})(table || (table = {}));
/**
 * 结算面板
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var SettlePanel = (function (_super) {
        __extends(SettlePanel, _super);
        function SettlePanel() {
            var _this = _super.call(this, 1 /* CENTER */, true) || this;
            /**
             * 切换按钮组
             */
            _this._toggleButtonGroup = new ToggleButtonGroup();
            /**
             * 选中背景
             */
            _this.SELECT_BG_SOURCE = "settlePanel_13";
            /**
             * 未选中背景
             */
            _this.UN_SELECT_BG_SOURCE = "settlePanel_14";
            _this.skinName = "SettlePanelSkin";
            return _this;
        }
        /**
         * 初始化
         */
        SettlePanel.prototype.onInit = function () {
            var _this = this;
            var toggle1 = new ToggleButton(this.skin["switchBtn1"]);
            var toggle2 = new ToggleButton(this.skin["switchBtn2"]);
            toggle1.selectHandler = Handler.create(null, function () {
                _this._getSwitchBtnBG(toggle1).source = _this.SELECT_BG_SOURCE;
            });
            toggle1.cancelHanlder = Handler.create(null, function () {
                _this._getSwitchBtnBG(toggle1).source = _this.UN_SELECT_BG_SOURCE;
            });
            toggle2.selectHandler = Handler.create(null, function () {
                _this._getSwitchBtnBG(toggle2).source = _this.SELECT_BG_SOURCE;
            });
            toggle2.cancelHanlder = Handler.create(null, function () {
                _this._getSwitchBtnBG(toggle2).source = _this.UN_SELECT_BG_SOURCE;
            });
            this._toggleButtonGroup.push(toggle1);
            this._toggleButtonGroup.push(toggle2);
        };
        /**
         * 获得切换按钮背景
         */
        SettlePanel.prototype._getSwitchBtnBG = function (btn) {
            return btn.root.getChildAt(0);
        };
        /**
         * 显示时
         */
        SettlePanel.prototype.onShow = function () {
            var _this = this;
            this.addToStage();
            this.closeBtnHandler = Handler.create(null, function () {
                catchDoll.LevelCreate.instance.dispose();
                catchDoll.SimpleUICenter.instance.closeUI(4 /* SettlePanel */);
                UICenter.instance.closeUI(0 /* BattleScene */);
                UICenter.instance.openUI(1 /* SelectLevel */);
            }, null, true);
            var rope1 = this.skin["rope1"];
            var rope2 = this.skin["rope2"];
            rope1.height = rope2.height = 1;
            for (var i = 0; i < 3; i++) {
                var star = this.skin["star" + (i + 1)];
                star.alpha = 0;
            }
            var endPosY = this._pullDownBox.y;
            this._pullDownBox.alpha = 0;
            this._pullDownBox.y -= 230;
            Laya.timer.once(300, null, function () {
                egret.Tween.get(rope1).to({ height: 230 }, 800, egret.Ease.getBackOut(2.3));
                egret.Tween.get(rope2).to({ height: 230 }, 800, egret.Ease.getBackOut(2.3));
                egret.Tween.get(_this._pullDownBox).set({ alpha: 0.3 }).to({ alpha: 1 }, 800, egret.Ease.quadIn);
                egret.Tween.get(_this._pullDownBox).to({ y: endPosY }, 800, egret.Ease.getBackOut(2.3));
                Laya.timer.once(300, null, function () {
                    var _loop_2 = function (i) {
                        var starBurstEff = UIUtil.creatMovieClip("starBurst");
                        /*对齐星星*/
                        if (i == 0) {
                            starBurstEff.x = 80;
                            starBurstEff.y = 70;
                        }
                        else if (i == 1) {
                            starBurstEff.x = 80;
                            starBurstEff.y = 70;
                        }
                        else if (i == 2) {
                            starBurstEff.x = 100;
                            starBurstEff.y = 100;
                            starBurstEff.scaleX = starBurstEff.scaleY = 1.3;
                        }
                        var star = _this.skin["star" + (i + 1)];
                        var startScale = star.scaleX;
                        star.scaleX = star.scaleY = star.scaleX * 4;
                        egret.Tween.get(star).wait(i * 500).set({ alpha: 0.3 }).to({ alpha: 1, scaleX: startScale, scaleY: startScale }, 500, egret.Ease.backIn);
                        Laya.timer.once(i * 500 + 400, null, function () {
                            var group = _this.skin["starBox" + (i + 1)];
                            group.addChild(starBurstEff);
                            starBurstEff.gotoAndPlay(1, 1);
                            starBurstEff.once(egret.MovieClipEvent.COMPLETE, function () {
                                starBurstEff.visible = false;
                            }, null);
                        });
                    };
                    for (var i = 0; i < _this.openParam.starNum; i++) {
                        _loop_2(i);
                    }
                });
            });
        };
        /**
         * 隐藏时
         */
        SettlePanel.prototype.onHide = function () {
        };
        /**
         * 释放
         */
        SettlePanel.prototype.dispose = function () {
        };
        return SettlePanel;
    }(catchDoll.BasePopPanel));
    catchDoll.SettlePanel = SettlePanel;
    __reflect(SettlePanel.prototype, "catchDoll.SettlePanel", ["IBaseSimpleUI"]);
})(catchDoll || (catchDoll = {}));
/**
 * 图片集合
 * @author suo
 */
var ImagePlayer = (function (_super) {
    __extends(ImagePlayer, _super);
    function ImagePlayer(data) {
        var _this = _super.call(this) || this;
        /**
         * key：动画组名字 value：egret.movie
         */
        _this._dataDic = new SimpleMap();
        if (data) {
            for (var i = 0; i < data.length; i++) {
                var img = new CustomImage();
                img.source = data[i].sourceName;
                if (data[i].offsetX) {
                    img.x = data[i].offsetX;
                }
                if (data[i].offsetY) {
                    img.y = data[i].offsetY;
                }
                if (data[i].scaleX) {
                    img.scaleX = data[i].scaleX;
                }
                if (data[i].scaleY) {
                    img.scaleY = data[i].scaleY;
                }
                _this.addChild(img);
                _this._dataDic.set(data[i].keyName, img);
            }
        }
        return _this;
    }
    /**
     * 添加图片
     */
    ImagePlayer.prototype.push = function (data) {
        var img = new CustomImage();
        img.source = data.sourceName;
        if (data.offsetX) {
            img.x = data.offsetX;
        }
        if (data.offsetY) {
            img.y = data.offsetY;
        }
        if (data.scaleX) {
            img.scaleX = data.scaleX;
        }
        if (data.scaleY) {
            img.scaleY = data.scaleY;
        }
        this.addChild(img);
        this._dataDic.set(data.keyName, img);
    };
    /**
     * 根据键找图
     */
    ImagePlayer.prototype.getImageByKey = function (key) {
        var img = this._dataDic.get(key);
        if (!img) {
            console.assert(false, "不存在keyName：" + key);
        }
        return img;
    };
    /**
     * 根据键找图
     */
    ImagePlayer.prototype.getImageByIndex = function (index) {
        var img = this._dataDic.getByKeyIndex(index);
        if (!img) {
            console.assert(false, "不存在索引为：" + index + "的图");
        }
        return img;
    };
    /**
     * 释放
     */
    ImagePlayer.prototype.dispose = function () {
        this._dataDic.clear();
        this._dataDic = null;
    };
    return ImagePlayer;
}(egret.DisplayObjectContainer));
__reflect(ImagePlayer.prototype, "ImagePlayer");
/**
 * 控制器模板
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var BattleEnterPanelControl = (function (_super) {
        __extends(BattleEnterPanelControl, _super);
        function BattleEnterPanelControl() {
            return _super.call(this) || this;
        }
        /**
         * 初始化
         */
        BattleEnterPanelControl.prototype.onInit = function () {
            this._view = this._viewCenter.getView(catchDoll.BattleEnterPanelView);
            this._view.startBtn.mouseClickHandler = Handler.create(this, this._onClickStart);
        };
        /**
         * 点击开始
         */
        BattleEnterPanelControl.prototype._onClickStart = function () {
            this._view.startBtn.enabled = false;
            var coin = Pool.getItemByCreateFun(Pool.rotationCoin, Handler.create(UIUtil, UIUtil.creatMovieClip, ["coinRotation"], true));
            coin.gotoAndPlay(1, -1);
            coin.x = 205;
            coin.y = 50;
            var targetX = this._view.endPos.localToGlobal().x;
            var targetY = this._view.endPos.localToGlobal().y;
            catchDoll.LayerManager.instance.addToLayer(coin, 7 /* EFFECT */);
            egret.Tween.get(coin).to({ x: targetX, y: targetY }, 1000, egret.Ease.quadIn).call(function () {
                catchDoll.Master.instance.sendItemUpdateMsg(catchDoll.ITEM_ID.MONEY, -2);
            }).wait(1000).call(function () {
                coin.stop();
                catchDoll.LayerManager.instance.removeFromLayer(coin, 7 /* EFFECT */);
                UICenter.instance.closeUI(1 /* SelectLevel */);
                UICenter.instance.closeUI(4 /* BattleEnterPanel */);
                UICenter.instance.openUI(0 /* BattleScene */);
            });
        };
        /**
         * 显示时
         */
        BattleEnterPanelControl.prototype.onShow = function () {
            this._view.closeBtnHandler = Handler.create(null, function () { UICenter.instance.closeUI(4 /* BattleEnterPanel */); }, null, true);
        };
        /**
         * 释放
         */
        BattleEnterPanelControl.prototype.dispose = function () {
            this._view = null;
            _super.prototype.dispose.call(this);
        };
        return BattleEnterPanelControl;
    }(BaseUIControl));
    catchDoll.BattleEnterPanelControl = BattleEnterPanelControl;
    __reflect(BattleEnterPanelControl.prototype, "catchDoll.BattleEnterPanelControl");
})(catchDoll || (catchDoll = {}));
/**
 * 多个movieclip的集合体
 * @author suo
 */
var MoviePlayer = (function (_super) {
    __extends(MoviePlayer, _super);
    /**
     * @param data键为动画组名字,值为groupName
     */
    function MoviePlayer(data) {
        var _this = _super.call(this) || this;
        /**
         * key：动画组名字 value：egret.movie
         */
        _this._dataDic = new SimpleMap();
        /**
         * 索引
         */
        _this._index = 0;
        if (data) {
            for (var i = 0; i < data.length; i++) {
                var mov = UIUtil.creatMovieClip(data[i].groupName, data[i].actionName);
                if (data.length != 1) {
                    mov.visible = false;
                }
                if (data[i].offsetX) {
                    mov.x = data[i].offsetX;
                }
                if (data[i].offsetY) {
                    mov.y = data[i].offsetY;
                }
                if (data[i].frameRate) {
                    mov.frameRate = data[i].frameRate;
                }
                if (data[i].scaleX) {
                    mov.scaleX = data[i].scaleX;
                }
                if (data[i].scaleY) {
                    mov.scaleY = data[i].scaleY;
                }
                _this.addChild(mov);
                _this._dataDic.set(data[i].keyName, mov);
            }
        }
        return _this;
    }
    /**
     * 添加一个影片剪辑
     */
    MoviePlayer.prototype.push = function (data) {
        var mov = UIUtil.creatMovieClip(data.groupName, data.actionName);
        mov.visible = false;
        if (data.offsetX) {
            mov.x = data.offsetX;
        }
        if (data.offsetY) {
            mov.y = data.offsetY;
        }
        if (data.frameRate) {
            mov.frameRate = data.frameRate;
        }
        if (data.scaleX) {
            mov.scaleX = data.scaleX;
        }
        if (data.scaleY) {
            mov.scaleY = data.scaleY;
        }
        this.addChild(mov);
        this._dataDic.set(data.keyName, mov);
    };
    /**
     * 切换动画
     */
    MoviePlayer.prototype.SwitchAni = function (keyName, playTimes) {
        if (playTimes === void 0) { playTimes = -1; }
        if (this._lastMov) {
            this._lastMov.stop();
            this._lastMov.visible = false;
        }
        var mov = this._dataDic.get(keyName);
        if (mov != null) {
            mov.visible = true;
            mov.gotoAndPlay(1, playTimes);
            this._lastMov = mov;
        }
        else {
            console.assert(false, "不存在keyName：" + keyName);
        }
    };
    /**
     * 根据索引播放
     */
    MoviePlayer.prototype.switchAniByIndex = function (index, playTimes) {
        if (playTimes === void 0) { playTimes = -1; }
        if (this._lastMov) {
            this._lastMov.stop();
            this._lastMov.visible = false;
        }
        var mov = this._dataDic.getByKeyIndex(index);
        if (mov != null) {
            mov.visible = true;
            mov.gotoAndPlay(1, playTimes);
            this._lastMov = mov;
        }
        else {
            console.assert(false, "不存在index：" + index);
        }
    };
    /**
     * 播放所有动画一次
     */
    MoviePlayer.prototype.playOnceAll = function (completeCB) {
        var _this = this;
        var completeIndex = 0;
        var _loop_3 = function (i) {
            var mov = this_2._dataDic.getByKeyIndex(i);
            mov.visible = true;
            mov.gotoAndPlay(1, 1);
            mov.once(egret.MovieClipEvent.COMPLETE, function () {
                mov.visible = false;
                completeIndex++;
                if (completeIndex == _this._dataDic.length) {
                    if (completeCB) {
                        completeCB.run();
                    }
                }
            }, this_2);
        };
        var this_2 = this;
        for (var i = 0; i < this._dataDic.length; i++) {
            _loop_3(i);
        }
    };
    /**
     * 切换一次回调
     */
    MoviePlayer.prototype.switchAniPlayOnce = function (keyName, completeCB) {
        if (this._lastMov) {
            this._lastMov.stop();
            this._lastMov.visible = false;
        }
        var mov = this._dataDic.get(keyName);
        if (mov) {
            mov.visible = true;
            mov.gotoAndPlay(1, 1);
            this._lastMov = mov;
            mov.once(egret.MovieClipEvent.COMPLETE, function () {
                mov.stop();
                mov.visible = false;
                if (completeCB) {
                    completeCB.run();
                }
            }, this);
        }
        else {
            console.assert(false, "不存在keyName：" + keyName);
        }
    };
    /**
     * 根据键获得影片剪辑
     */
    MoviePlayer.prototype.getMovieClipByKey = function (key) {
        var mov = this._dataDic.get(key);
        if (!mov) {
            console.assert(false, "不存在keyName：" + key);
        }
        return mov;
    };
    /**
     * 暂停当前动画
     */
    MoviePlayer.prototype.stop = function () {
        if (this._lastMov) {
            this._lastMov.stop();
        }
    };
    /**
     * 暂停所有动画
     */
    MoviePlayer.prototype.stopAll = function () {
        var map = this._dataDic;
        for (var i = 0; i < map.length; i++) {
            var mov = map.getByKeyIndex(i);
            mov.stop();
            mov.visible = false;
        }
    };
    /**
     * 播放
     */
    MoviePlayer.prototype.play = function (key, playTimes, delay, completeCB) {
        var _this = this;
        if (delay) {
            Laya.timer.once(delay, this, function () {
                _this._playMoiveClip(key, playTimes, completeCB);
            });
        }
        else {
            this._playMoiveClip(key, playTimes, completeCB);
        }
    };
    /**
     * 播放影片剪辑
     */
    MoviePlayer.prototype._playMoiveClip = function (key, playTimes, completeCB) {
        var mov = this._dataDic.get(key);
        if (mov) {
            mov.visible = true;
            mov.gotoAndPlay(1, playTimes);
            if (playTimes == 1) {
                mov.once(egret.MovieClipEvent.COMPLETE, function () {
                    mov.stop();
                    mov.visible = false;
                    if (completeCB) {
                        completeCB.run();
                    }
                }, this);
            }
        }
    };
    /**
     * 释放
     */
    MoviePlayer.prototype.dispose = function () {
        this._dataDic.clear();
        this._dataDic = null;
        this.stop();
    };
    return MoviePlayer;
}(egret.DisplayObjectContainer));
__reflect(MoviePlayer.prototype, "MoviePlayer");
/**
* 分页组件
* @author suo
*/
var PageComponent = (function () {
    /**
     * 构造函数
     * @param btnPre 上一页
     * @param btnNext 下一页
     * @param tfPage 页码文本
     * @param btnFinally 最后一页
     */
    function PageComponent(btnPre, btnNext, tfPage, btnFinally) {
        if (btnNext === void 0) { btnNext = null; }
        if (tfPage === void 0) { tfPage = null; }
        if (btnFinally === void 0) { btnFinally = null; }
        var _this = this;
        /*页码文本*/
        this._tfPage = null;
        /*前翻按钮*/
        this._btnPre = null;
        /*后翻按钮*/
        this._btnNext = null;
        /*跳到最终页按钮*/
        this._btnFinally = null;
        /*callback function*/
        this._changePage = null;
        /*当前页码*/
        this._curPage = 1;
        /*最大页码*/
        this._maxPage = 1;
        /*一页展示几项*/
        this._showNum = -1;
        /*开始索引*/
        this._startIndex = -1;
        /*最后一个索引*/
        this._endIndex = -1;
        this._btnPre = btnPre;
        this._btnNext = btnNext;
        this._btnFinally = btnFinally;
        this._tfPage = tfPage;
        if (this._btnPre != null) {
            this._btnPre.mouseClickHandler = Handler.create(this, function () { _this.curPage--; });
        }
        if (this._btnNext != null) {
            this._btnNext.mouseClickHandler = Handler.create(this, function () { _this.curPage++; });
        }
        if (this._btnFinally != null) {
            this._btnFinally.mouseClickHandler = Handler.create(this, function () { _this.curPage = _this.maxPage; });
        }
    }
    /**
     * 设置声音
     */
    PageComponent.prototype.setSound = function (perBtnSound, nextBtnSound) {
        this._btnPre.setSound(perBtnSound);
        this._btnNext.setSound(nextBtnSound);
    };
    /*释放*/
    PageComponent.prototype.dispose = function () {
        if (this._btnPre != null) {
            this._btnPre.dispose();
            this._btnPre = null;
        }
        if (this._btnNext != null) {
            this._btnNext.dispose();
            this._btnNext = null;
        }
        if (this._changePage != null) {
            this._changePage.recover();
            this._changePage = null;
        }
        if (this._btnFinally != null) {
            this._btnFinally.dispose();
            this._btnFinally = null;
        }
        this._tfPage = null;
    };
    Object.defineProperty(PageComponent.prototype, "onChangePage", {
        /**无回调参数*/
        set: function (changePage) {
            this._changePage = changePage;
        },
        enumerable: true,
        configurable: true
    });
    PageComponent.prototype.setData = function (dataLength, showNum) {
        this._showNum = showNum;
        this._maxPage = Math.ceil(dataLength / this._showNum);
    };
    Object.defineProperty(PageComponent.prototype, "maxPage", {
        get: function () {
            return this._maxPage;
        },
        set: function (value) {
            this._maxPage = value > 0 ? value : 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageComponent.prototype, "curPage", {
        get: function () {
            return this._curPage;
        },
        set: function (value) {
            if (value >= 1 && value <= this._maxPage) {
                this._curPage = value;
                this._startIndex = (this._curPage - 1) * this._showNum;
                this._endIndex = this._curPage * this._showNum;
                if (this._changePage != null) {
                    this._changePage.run();
                }
                if (this._btnPre != null) {
                    this._btnPre.enabled = this._curPage > 1;
                }
                if (this._btnNext != null) {
                    this._btnNext.enabled = this._curPage < this._maxPage;
                }
                if (this._btnFinally != null) {
                    this._btnFinally.enabled = !(this._curPage == this._maxPage);
                }
            }
            if (this._tfPage != null) {
                this._tfPage.text = this._curPage + "/" + this._maxPage;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageComponent.prototype, "endIndex", {
        /**Array.slice(startIndex, endIndex)*/
        get: function () {
            return this._endIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageComponent.prototype, "startIndex", {
        /**Array.slice(startIndex, endIndex)*/
        get: function () {
            return this._startIndex;
        },
        enumerable: true,
        configurable: true
    });
    return PageComponent;
}());
__reflect(PageComponent.prototype, "PageComponent");
/**
 * 切换按钮
 * @author suo
 */
var ToggleButton = (function (_super) {
    __extends(ToggleButton, _super);
    function ToggleButton(root, soundName, canExpand, isOffset) {
        if (soundName === void 0) { soundName = null; }
        if (canExpand === void 0) { canExpand = false; }
        if (isOffset === void 0) { isOffset = false; }
        var _this = _super.call(this, root, soundName, canExpand, isOffset) || this;
        /*是否被选中*/
        _this._selected = false;
        return _this;
    }
    Object.defineProperty(ToggleButton.prototype, "selected", {
        /**
         * 获得是否选中
         */
        get: function () {
            return this._selected;
        },
        /**
         * 设置是否选中
         */
        set: function (value) {
            this._selected = value;
            if (this._selected) {
                if (this._selectHandler != null) {
                    this._selectHandler.runWith(this);
                }
            }
            else {
                if (this._cancelHanlder) {
                    this._cancelHanlder.runWith(this);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToggleButton.prototype, "cancelHanlder", {
        /**
         * 设置取消函数
         */
        set: function (value) {
            this._cancelHanlder = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToggleButton.prototype, "selectHandler", {
        /**
         * 设置选中函数函数
         */
        set: function (value) {
            this._selectHandler = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 释放
     */
    ToggleButton.prototype.dispose = function () {
        if (this._cancelHanlder) {
            this._cancelHanlder.recover();
            this._cancelHanlder = null;
        }
        if (this._selectHandler) {
            this._selectHandler.recover();
            this._selectHandler = null;
        }
        _super.prototype.dispose.call(this);
    };
    return ToggleButton;
}(Button));
__reflect(ToggleButton.prototype, "ToggleButton");
/**
 * 切换按钮组
 * @author suo
 */
var ToggleButtonGroup = (function () {
    function ToggleButtonGroup() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        /*按钮组*/
        this._btnGroup = [];
        /*是否可以点击同一对象*/
        this._clickSameObject = false;
        /*当前点击按钮索引*/
        this.index = -1;
        var len = args.length;
        for (var i = 0; i < len; i++) {
            if (args[i] instanceof ToggleButton) {
                var btn = args[i];
                btn.mouseClickHandler = Handler.create(this, this._onClick);
                this._btnGroup.push(btn);
            }
        }
    }
    Object.defineProperty(ToggleButtonGroup.prototype, "clickSameObject", {
        /**
         * 设置是否互斥
         */
        set: function (value) {
            this._clickSameObject = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToggleButtonGroup.prototype, "length", {
        /**
         * 获得长度
         */
        get: function () {
            return this._btnGroup.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToggleButtonGroup.prototype, "changeHandler", {
        /**
         * 设置切页函数
         */
        set: function (value) {
            this._changeHandler = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 获得该按钮在按钮组内的索引
     */
    ToggleButtonGroup.prototype.getIndexByBtn = function (btn) {
        return this._btnGroup.indexOf(btn);
    };
    Object.defineProperty(ToggleButtonGroup.prototype, "clickByIndex", {
        /**
         * 通过索引设置点击哪个按钮
         */
        set: function (index) {
            var btn = this._btnGroup[index];
            if (btn) {
                this._onClick(btn);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 根据索引获得按钮
     */
    ToggleButtonGroup.prototype.getBtnByIndex = function (index) {
        return this._btnGroup[index];
    };
    /**
     * 点击函数
     */
    ToggleButtonGroup.prototype._onClick = function (targetBtn) {
        if (this._lastClickBtn) {
            if (this._lastClickBtn == targetBtn && !this._clickSameObject) {
                return;
            }
            this._lastClickBtn.selected = false;
        }
        this._lastClickBtn = targetBtn;
        this.index = this.getIndexByBtn(targetBtn);
        targetBtn.selected = true;
        if (this._changeHandler) {
            this._changeHandler.runWith(targetBtn);
        }
    };
    Object.defineProperty(ToggleButtonGroup.prototype, "lastClickBtn", {
        /**
         * 获得上一次点击按钮
         */
        get: function () {
            return this._lastClickBtn;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 添加按钮
     */
    ToggleButtonGroup.prototype.push = function (btn) {
        btn.mouseClickHandler = Handler.create(this, this._onClick);
        this._btnGroup.push(btn);
    };
    /**
     * 释放
     */
    ToggleButtonGroup.prototype.dispose = function () {
        if (this._changeHandler) {
            this._changeHandler.recover();
            this._changeHandler = null;
        }
        for (var i = 0; i < this._btnGroup.length; i++) {
            this._btnGroup[i].dispose();
            this._btnGroup[i] = null;
        }
        this._btnGroup.length = 0;
        this._btnGroup = null;
    };
    /**
     * 清理
     */
    ToggleButtonGroup.prototype.clear = function () {
        if (this._changeHandler) {
            this._changeHandler.recover();
            this._changeHandler = null;
        }
        for (var i = 0; i < this._btnGroup.length; i++) {
            this._btnGroup[i].dispose();
            this._btnGroup[i] = null;
        }
        this._btnGroup.length = 0;
    };
    return ToggleButtonGroup;
}());
__reflect(ToggleButtonGroup.prototype, "ToggleButtonGroup");
/**
 * 管理器模板
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var BattleEnterPanelManager = (function (_super) {
        __extends(BattleEnterPanelManager, _super);
        function BattleEnterPanelManager() {
            var _this = _super.call(this) || this;
            _this.addControl(catchDoll.BattleEnterPanelControl);
            _this.addView(catchDoll.BattleEnterPanelView);
            return _this;
        }
        return BattleEnterPanelManager;
    }(BaseUIManager));
    catchDoll.BattleEnterPanelManager = BattleEnterPanelManager;
    __reflect(BattleEnterPanelManager.prototype, "catchDoll.BattleEnterPanelManager");
})(catchDoll || (catchDoll = {}));
/**
 * @private
 * 对象缓存统一管理类
 * @author suo
 */
var CacheManager = (function () {
    function CacheManager() {
    }
    /**
     * 注册cache管理函数
     * @param disposeFunction 释放函数 fun(force:Boolean)
     * @param getCacheListFunction 获取cache列表函数fun():Array
     *
     */
    CacheManager.regCacheByFunction = function (disposeFunction, getCacheListFunction) {
        this.unRegCacheByFunction(disposeFunction, getCacheListFunction);
        var cache;
        cache = { tryDispose: disposeFunction, getCacheList: getCacheListFunction };
        this._cacheList.push(cache);
    };
    /**
     * 移除cache管理函数
     * @param disposeFunction 释放函数 fun(force:Boolean)
     * @param getCacheListFunction 获取cache列表函数fun():Array
     *
     */
    CacheManager.unRegCacheByFunction = function (disposeFunction, getCacheListFunction) {
        var i, len;
        len = this._cacheList.length;
        for (i = 0; i < len; i++) {
            if (this._cacheList[i].tryDispose == disposeFunction && this._cacheList[i].getCacheList == getCacheListFunction) {
                this._cacheList.splice(i, 1);
                return;
            }
        }
    };
    /**
     * 强制清理所有管理器
     *
     */
    CacheManager.forceDispose = function () {
        var i, len = this._cacheList.length;
        for (i = 0; i < len; i++) {
            this._cacheList[i].tryDispose(true);
        }
    };
    /**
     * 开始检测循环
     * @param waitTime 检测间隔时间
     *
     */
    CacheManager.beginCheck = function (waitTime) {
        if (waitTime === void 0) { waitTime = 15000; }
        // Laya.timer.loop(waitTime, null, _checkLoop);
    };
    /**
     * 停止检测循环
     *
     */
    CacheManager.stopCheck = function () {
        // Laya.timer.clear(null, _checkLoop);
    };
    /**
     * @private
     * 检测函数
     */
    CacheManager._checkLoop = function () {
        var cacheList = this._cacheList;
        if (cacheList.length < 1)
            return;
        var tTime = Date.now();
        var count;
        var len;
        len = count = cacheList.length;
        while (count > 0) {
            this._index++;
            this._index = this._index % len;
            cacheList[this._index].tryDispose(false);
            if (Date.now() - tTime > this.loopTimeLimit)
                break;
            count--;
        }
    };
    /**
     * 单次清理检测允许执行的时间，单位ms。
     */
    CacheManager.loopTimeLimit = 2;
    /**
     * @private
     */
    CacheManager._cacheList = [];
    /**
     * @private
     * 当前检测的索引
     */
    CacheManager._index = 0;
    return CacheManager;
}());
__reflect(CacheManager.prototype, "CacheManager");
var ColorUtil = (function () {
    function ColorUtil() {
    }
    ColorUtil.COLOR_WHITE = 0xffffff;
    ColorUtil.COLOR_BLACK = 0x000000;
    ColorUtil.COLOR_RED = 0xFF0000;
    /*米色*/
    ColorUtil.COLOR_BUFF = 0xFFE7BA;
    ColorUtil.COLOR_YELLOW = 0xE9FC1E;
    ColorUtil.COLOR_GREEN = 0x3CEA68;
    ColorUtil.COLOR_ORANGE = 0xFF7F24;
    /*淡棕色*/
    ColorUtil.COLOR_MAPLE = 0xDCBF9C;
    ColorUtil.COLOR_GOLD = 0xFFD700;
    /*阴影颜色*/
    ColorUtil.COLOR_SHADOW = 0x0C0901;
    ColorUtil.STR_COLOR_WHITE = "0xffffff";
    ColorUtil.STR_COLOR_BLACK = "0x000000";
    ColorUtil.STR_COLOR_RED = "0xFF0000";
    return ColorUtil;
}());
__reflect(ColorUtil.prototype, "ColorUtil");
/**
 * 配置文件解析
 * @author suo
 */
var ConfigParse = (function () {
    function ConfigParse() {
    }
    ConfigParse.getJosn = function (key) {
        var data = RES.getRes(key);
        return data.slice(0);
    };
    /**
     * 根据属性A获得属性B值
     */
    ConfigParse.getPropertyByProperty = function (conf, paramA, paramAValue, paramB) {
        if (!conf || !(conf instanceof Array) || conf.length == 0) {
            return;
        }
        for (var _i = 0, conf_1 = conf; _i < conf_1.length; _i++) {
            var subConf = conf_1[_i];
            var item = subConf;
            if (item.hasOwnProperty(paramA) && item.hasOwnProperty(paramB)) {
                if (item[paramA] == paramAValue) {
                    return item[paramB];
                }
            }
        }
        return null;
    };
    /**
     * 根据属性A获得整个对象
     */
    ConfigParse.getWholeByProperty = function (conf, paramA, paramAValue) {
        if (!conf || !(conf instanceof Array) || conf.length == 0) {
            return;
        }
        for (var _i = 0, conf_2 = conf; _i < conf_2.length; _i++) {
            var subConf = conf_2[_i];
            var item = subConf;
            if (item.hasOwnProperty(paramA)) {
                if (item[paramA] == paramAValue) {
                    return item;
                }
            }
        }
        return null;
    };
    return ConfigParse;
}());
__reflect(ConfigParse.prototype, "ConfigParse");
/**
 * 中心点在中间的Image
 * @author suo
 */
var CustomImage = (function (_super) {
    __extends(CustomImage, _super);
    function CustomImage() {
        return _super.call(this) || this;
    }
    CustomImage.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.anchorOffsetX = this.width / 2;
        this.anchorOffsetY = this.height / 2;
        this.touchEnabled = false;
    };
    return CustomImage;
}(eui.Image));
__reflect(CustomImage.prototype, "CustomImage");
/**
 * 视图模板
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var BattleEnterPanelView = (function (_super) {
        __extends(BattleEnterPanelView, _super);
        function BattleEnterPanelView() {
            var _this = _super.call(this) || this;
            _this.skinName = "BattleEnterPanelSkin";
            return _this;
        }
        /**
         * 初始化
         */
        BattleEnterPanelView.prototype.onInit = function () {
            this.startBtn = new Button(this.skin["_startBtn"], null, true, true);
        };
        /**
         * 展示时
         */
        BattleEnterPanelView.prototype.onShow = function () {
            this.addToStage(6 /* POP */);
        };
        /**
         * 清除
         */
        BattleEnterPanelView.prototype.clear = function () {
        };
        /**
         * 隐藏时
         */
        BattleEnterPanelView.prototype.onHide = function () {
        };
        /**
         * 释放时
         */
        BattleEnterPanelView.prototype.dispose = function () {
            this.startBtn.dispose();
            this.startBtn = null;
            _super.prototype.dispose.call(this);
        };
        return BattleEnterPanelView;
    }(catchDoll.BasePopPanel));
    catchDoll.BattleEnterPanelView = BattleEnterPanelView;
    __reflect(BattleEnterPanelView.prototype, "catchDoll.BattleEnterPanelView", ["BaseUIView"]);
})(catchDoll || (catchDoll = {}));
/**
 * 简易消息收发类
 * @author suo
 */
var EventManager = (function () {
    function EventManager() {
        /*事件字典*/
        this._eventDic = new SimpleMap();
        /*缓存发送事件队列 key:事件ID value:data*/
        this._cacheEventDic = new SimpleMap();
    }
    Object.defineProperty(EventManager, "instance", {
        /**
         * 获得单例
         */
        get: function () {
            if (this._instance == null) {
                this._instance = new EventManager();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param id事件
     * @param func回调函数
     * @param regType注册回调类型
     * @param withClearCacheEvent是否清理缓存事件
     * 注册事件侦听
     */
    EventManager.registerEvent = function (id, func, regType, withClearCacheEvent) {
        if (regType === void 0) { regType = 0 /* COMMON */; }
        if (withClearCacheEvent === void 0) { withClearCacheEvent = false; }
        if (regType == 0 /* COMMON */) {
            /*处理缓存事件*/
            if (EventManager.instance._cacheEventDic.isExist(id)) {
                var data = EventManager.instance._cacheEventDic.get(id);
                func.runWith(data);
                if (withClearCacheEvent) {
                    EventManager.removeCacheEvent(id);
                }
            }
            var funcs = EventManager.instance._eventDic.get(id);
            if (funcs != null) {
            }
            else {
                funcs = new Array();
            }
            funcs.push(func);
            EventManager.instance._eventDic.set(id, funcs);
        }
        else if (regType == 1 /* ONCE */) {
            /*处理缓存事件*/
            if (EventManager.instance._cacheEventDic.isExist(id)) {
                var data = EventManager.instance._cacheEventDic.get(id);
                func.once = true;
                func.runWith(data);
                if (withClearCacheEvent) {
                    EventManager.removeCacheEvent(id);
                }
            }
            else {
                var funcs = EventManager.instance._eventDic.get(id);
                if (funcs != null) {
                }
                else {
                    funcs = new Array();
                }
                func.once = true;
                funcs.push(func);
                EventManager.instance._eventDic.set(id, funcs);
            }
        }
    };
    /**
     * @param id事件
     * @param func回调函数
     * 反注册
     */
    EventManager.unregisterEvent = function (id, caller, func) {
        var funcs = EventManager.instance._eventDic.get(id);
        if (funcs != null && funcs.length != 0) {
            for (var i = 0; i < funcs.length; i++) {
                if (funcs[i].caller == caller && funcs[i].method == func) {
                    funcs[i].recover();
                    funcs.remove(funcs[i]);
                    break;
                }
            }
        }
    };
    /**
     * 移除缓存事件
     */
    EventManager.removeCacheEvent = function (id) {
        EventManager.instance._cacheEventDic.remove(id);
    };
    /**
     * @param id事件
     * 发送事件
     */
    EventManager.fireEvent = function (id, data, fireType) {
        if (data === void 0) { data = null; }
        if (fireType === void 0) { fireType = 0 /* COMMON */; }
        var funcs = EventManager.instance._eventDic.get(id);
        if (funcs != null && funcs.length != 0) {
            /*先拷贝一份 防止在循环过程中改变数组长度引发bug*/
            var temp = funcs.slice();
            var len = temp.length;
            for (var i = 0; i < len; i++) {
                var func = temp[i];
                if (func.once) {
                    EventManager.instance._cacheEventDic.remove(id);
                }
                func.runWith(data);
            }
        }
        else {
            if (fireType == 1 /* FIRE_OR_CACHE */) {
                EventManager.instance._cacheEventDic.set(id, data);
            }
        }
        if (fireType == 2 /* FIRE_AND_CHCHE */) {
            EventManager.instance._cacheEventDic.set(id, data);
        }
    };
    /**
     * 释放
     */
    EventManager.prototype.dispose = function () {
        EventManager.instance._eventDic.clear();
        EventManager.instance._cacheEventDic.clear();
    };
    /*单例*/
    EventManager._instance = null;
    return EventManager;
}());
__reflect(EventManager.prototype, "EventManager");
/**
 * 全局定义
 */
var catchDoll;
(function (catchDoll) {
    var GlobeConst = (function () {
        function GlobeConst() {
        }
        /*是否微信小游戏*/
        GlobeConst.isWXGame = true;
        /*是否调试模式*/
        GlobeConst.isDebug = false;
        /*地址*/
        GlobeConst.host = "";
        /*端口*/
        GlobeConst.post = -1;
        return GlobeConst;
    }());
    catchDoll.GlobeConst = GlobeConst;
    __reflect(GlobeConst.prototype, "catchDoll.GlobeConst");
})(catchDoll || (catchDoll = {}));
/**
 * 全局工具
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var GlobeTool = (function () {
        function GlobeTool() {
        }
        /**
         * 在视图内
         */
        GlobeTool.inView = function (x, y) {
            if (x < -10 || x > catchDoll.GameCenter.stageW + 10) {
                return false;
            }
            if (y < -10 || y > catchDoll.GameCenter.stageH + 10) {
                return false;
            }
            return true;
        };
        /**
         * 获得玩家道具数量
         */
        GlobeTool.getProp = function (propID) {
            var propData = catchDoll.Master.instance.itemData;
            for (var _i = 0, propData_1 = propData; _i < propData_1.length; _i++) {
                var item = propData_1[_i];
                if (item.itemID == propID) {
                    return item.itemNum;
                }
            }
        };
        return GlobeTool;
    }());
    catchDoll.GlobeTool = GlobeTool;
    __reflect(GlobeTool.prototype, "catchDoll.GlobeTool");
    var ITEM_ID;
    (function (ITEM_ID) {
        ITEM_ID[ITEM_ID["MONEY"] = 1] = "MONEY";
        ITEM_ID[ITEM_ID["DIMOND"] = 2] = "DIMOND";
        ITEM_ID[ITEM_ID["HONOR"] = 3] = "HONOR";
    })(ITEM_ID = catchDoll.ITEM_ID || (catchDoll.ITEM_ID = {}));
})(catchDoll || (catchDoll = {}));
/**
 * <p><code>Handler</code> 是事件处理器类。</p>
 * <p>推荐使用 Handler.create() 方法从对象池创建，减少对象创建消耗。创建的 Handler 对象不再使用后，可以使用 Handler.recover() 将其回收到对象池，回收后不要再使用此对象，否则会导致不可预料的错误。</p>
 * <p><b>注意：</b>由于鼠标事件也用本对象池，不正确的回收及调用，可能会影响鼠标事件的执行。</p>
 * 原作者 layaBox
 * @author suo
 * 2018.4.3 11:03
 */
var Handler = (function () {
    /**
     * 根据指定的属性值，创建一个 <code>Handler</code> 类的实例。
     * @param	caller 执行域。
     * @param	method 处理函数。
     * @param	args 函数参数。
     * @param	once 是否只执行一次。
     */
    function Handler(caller, method, args, once) {
        if (caller === void 0) { caller = null; }
        if (method === void 0) { method = null; }
        if (args === void 0) { args = null; }
        if (once === void 0) { once = false; }
        /** 表示是否只执行一次。如果为true，回调后执行recover()进行回收，回收后会被再利用，默认为false 。*/
        this.once = false;
        /**@private */
        this._id = 0;
        this.setTo(caller, method, args, once);
    }
    /**
     * 设置此对象的指定属性值。
     * @param	caller 执行域(this)。
     * @param	method 回调方法。
     * @param	args 携带的参数。
     * @param	once 是否只执行一次，如果为true，执行后执行recover()进行回收。
     * @return  返回 handler 本身。
     */
    Handler.prototype.setTo = function (caller, method, args, once) {
        this._id = Handler._gid++;
        this.caller = caller;
        this.method = method;
        this.args = args;
        this.once = once;
        return this;
    };
    /**
     * 执行处理器。
     */
    Handler.prototype.run = function () {
        if (this.method == null)
            return null;
        var id = this._id;
        var result = this.method.apply(this.caller, this.args);
        this._id === id && this.once && this.recover();
        return result;
    };
    /**
     * 执行处理器，携带额外数据。
     * @param	data 附加的回调数据，可以是单数据或者Array(作为多参)。
     */
    Handler.prototype.runWith = function (data) {
        if (this.method == null)
            return null;
        var id = this._id;
        if (data == null)
            var result = this.method.apply(this.caller, this.args);
        else if (!this.args && !(data instanceof Array))
            result = this.method.call(this.caller, data);
        else if (this.args)
            result = this.method.apply(this.caller, this.args.concat(data));
        else
            result = this.method.apply(this.caller, data);
        this._id === id && this.once && this.recover();
        return result;
    };
    /**
     * 清理对象引用。
     */
    Handler.prototype.clear = function () {
        this.caller = null;
        this.method = null;
        this.args = null;
        this.once = false;
        return this;
    };
    /**
     * 清理并回收到 Handler 对象池内。
     */
    Handler.prototype.recover = function () {
        if (this._id > 0) {
            this._id = 0;
            Handler._pool.push(this.clear());
        }
    };
    /**
     * 从对象池内创建一个Handler，默认会执行一次并立即回收，如果不需要自动回收，设置once参数为false。
     * @param	caller 执行域(this)。
     * @param	method 回调方法。
     * @param	args 携带的参数。
     * @param	once 是否只执行一次，如果为true，回调后执行recover()进行回收，默认为false。
     * @return  返回创建的handler实例。
     */
    Handler.create = function (caller, method, args, once) {
        if (args === void 0) { args = null; }
        if (once === void 0) { once = false; }
        if (this._pool.length)
            return this._pool.pop().setTo(caller, method, args, once);
        return new Handler(caller, method, args, once);
    };
    /**@private handler对象池*/
    Handler._pool = [];
    /**@private */
    Handler._gid = 1;
    return Handler;
}());
__reflect(Handler.prototype, "Handler");
var MathUtil = (function () {
    function MathUtil() {
    }
    /**
     * 两个整数之间随机
     */
    MathUtil.random = function (min, max) {
        return Math.round(Math.random() * (max - min) + min);
    };
    return MathUtil;
}());
__reflect(MathUtil.prototype, "MathUtil");
/**
 * PC端鼠标帮助
 * @author suo
 */
var PCMouseHelper = (function () {
    function PCMouseHelper() {
    }
    /**
     * 切换指针形状
     */
    PCMouseHelper.changeCursor = function () {
        var canvas = document.getElementsByTagName("canvas")[0];
        var style = canvas.style;
        style.cursor = 'url(cursor/cursor.png) 37.5 38,auto';
    };
    /**
     * 恢复正常
     */
    PCMouseHelper.recover = function () {
        var canvas = document.getElementsByTagName("canvas")[0];
        var style = canvas.style;
        style.cursor = 'auto';
    };
    return PCMouseHelper;
}());
__reflect(PCMouseHelper.prototype, "PCMouseHelper");
/**
 * <p> <code>Pool</code> 是对象池类，用于对象的存贮、重复使用。</p>
 * <p>合理使用对象池，可以有效减少对象创建的开销，避免频繁的垃圾回收，从而优化游戏流畅度。</p>
 * 原作者 LayaBox
 * @author suo
 */
var Pool = (function () {
    function Pool() {
    }
    /**
     * 根据对象类型标识字符，获取对象池。
     * @param sign 对象类型标识字符。
     * @return 对象池。
     */
    Pool.getPoolBySign = function (sign) {
        return this._poolDic[sign] || (this._poolDic[sign] = []);
    };
    /**
     * 清除对象池的对象。
     * @param sign 对象类型标识字符。
     */
    Pool.clearBySign = function (sign) {
        var index = this._signAry.indexOf(sign);
        if (index != -1) {
            this._signAry.splice(index, 1);
        }
        if (this._poolDic[sign])
            this._poolDic[sign].length = 0;
    };
    /**
     * 将对象放到对应类型标识的对象池中。
     * @param sign 对象类型标识字符。
     * @param item 对象。
     */
    Pool.recover = function (sign, item) {
        this.getPoolBySign(sign).push(item);
    };
    /**
     * <p>根据传入的对象类型标识字符，获取对象池中此类型标识的一个对象实例。</p>
     * <p>当对象池中无此类型标识的对象时，则根据传入的类型，创建一个新的对象返回。</p>
     * @param sign 对象类型标识字符。
     * @param cls 用于创建该类型对象的类。
     * @return 此类型标识的一个对象。
     */
    Pool.getItemByClass = function (sign, cls) {
        if (this._signAry.indexOf(sign) == -1) {
            this._signAry.push(sign);
        }
        var pool = this.getPoolBySign(sign);
        var rst = pool.length ? pool.pop() : new cls();
        return rst;
    };
    /**
     * <p>根据传入的对象类型标识字符，获取对象池中此类型标识的一个对象实例。</p>
     * <p>当对象池中无此类型标识的对象时，则使用传入的创建此类型对象的函数，新建一个对象返回。</p>
     * @param sign 对象类型标识字符。
     * @param createFun 用于创建该类型对象的方法。
     * @return 此类型标识的一个对象。
     */
    Pool.getItemByCreateFun = function (sign, createFun) {
        if (this._signAry.indexOf(sign) == -1) {
            this._signAry.push(sign);
        }
        var pool = this.getPoolBySign(sign);
        var rst = pool.length ? pool.pop() : createFun.run();
        return rst;
    };
    /**
     * 根据传入的对象类型标识字符，获取对象池中已存储的此类型的一个对象，如果对象池中无此类型的对象，则返回 null 。
     * @param sign 对象类型标识字符。
     * @return 对象池中此类型的一个对象，如果对象池中无此类型的对象，则返回 null 。
     */
    Pool.getItem = function (sign) {
        var pool = this.getPoolBySign(sign);
        var rst = pool.length ? pool.pop() : null;
        return rst;
    };
    /**
     * 释放
     */
    Pool.clearAll = function () {
        for (var i = 0; i < this._signAry.length; i++) {
            var sign = this._signAry[i];
            var itemAry = this._poolDic[sign];
            for (var j = 0; j < itemAry.length; j++) {
                if (itemAry[j]) {
                    itemAry[j] = null;
                    // if (itemAry[j] instanceof dragonBones.EgretArmatureDisplay) {
                    // 	itemAry[j].animation.stop();
                    // 	itemAry[j].dispose();
                    // }
                }
            }
            itemAry.length = 0;
        }
        this._signAry.length = 0;
    };
    /**
     * 旋转金币
     */
    Pool.rotationCoin = "rotationCoin";
    /**@private  对象存放池。*/
    Pool._poolDic = {};
    /*标识组*/
    Pool._signAry = [];
    return Pool;
}());
__reflect(Pool.prototype, "Pool");
/**
 * @private
 * 基于个数的对象缓存管理器
 * 原作者 layaBox
 * @author suo
 */
var PoolCache = (function () {
    function PoolCache() {
        /**
         * 允许缓存的最大数量
         */
        this.maxCount = 1000;
    }
    /**
     * 获取缓存的对象列表
     * @return
     *
     */
    PoolCache.prototype.getCacheList = function () {
        return Pool.getPoolBySign(this.sign);
    };
    /**
     * 尝试清理缓存
     * @param force 是否强制清理
     *
     */
    PoolCache.prototype.tryDispose = function (force) {
        var list;
        list = Pool.getPoolBySign(this.sign);
        if (list.length > this.maxCount) {
            list.splice(this.maxCount, list.length - this.maxCount);
        }
    };
    /**
     * 添加对象缓存管理
     * @param sign 对象在Pool中的标识
     * @param maxCount 允许缓存的最大数量
     *
     */
    PoolCache.addPoolCacheManager = function (sign, maxCount) {
        if (maxCount === void 0) { maxCount = 100; }
        var cache;
        cache = new PoolCache();
        cache.sign = sign;
        cache.maxCount = maxCount;
        CacheManager.regCacheByFunction(cache.tryDispose, cache.getCacheList);
    };
    return PoolCache;
}());
__reflect(PoolCache.prototype, "PoolCache");
/**
 * 战斗控制器
 * 鱼跃此时海，花开彼岸天
 * @author suo
 */
var catchDoll;
(function (catchDoll) {
    var BattleSceneControl = (function (_super) {
        __extends(BattleSceneControl, _super);
        function BattleSceneControl() {
            var _this = _super.call(this) || this;
            /**
             * 时间值
             */
            _this._timeNum = 30;
            return _this;
        }
        /**
         * 初始化
         */
        BattleSceneControl.prototype.onInit = function () {
            this._view = this._viewCenter.getView(catchDoll.BattleSceneView);
        };
        /**
         * 显示时
         */
        BattleSceneControl.prototype.onShow = function () {
            var _this = this;
            catchDoll.LevelCreate.instance.init();
            this._view.rightBtn.mouseClickHandler = Handler.create(this, this._clickRightBtn);
            this._view.leftBtn.mouseClickHandler = Handler.create(this, this._clickLeftBtn);
            this._view.middleBtn.mouseClickHandler = Handler.create(this, this._clickMiddleBtn);
            this._view.returnBtn.mouseClickHandler = Handler.create(this, this._clickReturnBtn);
            this._view.timeLabel.text = this._timeNum.toString();
            Laya.timer.loop(1000, this, this._updateTime);
            this._view.propBtn1.mouseClickHandler = Handler.create(null, function () {
                _this._view.propBtn1.visible = false;
                _this._view.propBtn2.root.scaleX = _this._view.propBtn2.root.scaleY = 0;
                for (var i = 1; i < 5; i++) {
                    var item = _this._view.skin["prop" + i];
                    item.scaleX = item.scaleY = 0;
                }
                egret.Tween.get(_this._view.propBox).to({ x: 0 }, 500, egret.Ease.quadIn).call(function () {
                    egret.Tween.get(_this._view.propBtn2.root).to({ scaleX: 1, scaleY: 1 }, 500, egret.Ease.backOut);
                    for (var i = 1; i < 5; i++) {
                        var item = _this._view.skin["prop" + i];
                        egret.Tween.get(item).wait(i * 100).to({ scaleX: 1, scaleY: 1 }, 500, egret.Ease.backOut);
                    }
                });
            });
            this._view.propBtn2.mouseClickHandler = Handler.create(null, function () {
                _this._view.propBtn2.enabled = false;
                egret.Tween.get(_this._view.propBox).to({ x: -_this._view.propBox.width }, 500, egret.Ease.quadIn).call(function () {
                    _this._view.propBtn1.visible = true;
                    _this._view.propBtn2.enabled = true;
                });
            });
        };
        /**
         * 更新时间
         */
        BattleSceneControl.prototype._updateTime = function () {
            this._timeNum--;
            if (this._timeNum < 0) {
                catchDoll.SimpleUICenter.instance.openUI(4 /* SettlePanel */, { starNum: 3, itemID: 1 });
                Laya.timer.clear(this, this._updateTime);
            }
            else if (this._timeNum < 5) {
                this._view.timeLabel.text = this._timeNum.toString();
                this._view.timeLabel.textColor = ColorUtil.COLOR_RED;
                egret.Tween.get(this._view.timeLabel).to({ scaleX: 1.5, scaleY: 1.5 }, 500, egret.Ease.quadIn).to({ scaleX: 1, scaleY: 1 }, 500, egret.Ease.quadIn);
            }
            else {
                this._view.timeLabel.text = this._timeNum.toString();
                this._view.timeLabel.textColor = ColorUtil.COLOR_WHITE;
            }
        };
        /**
         * 点击返回按钮
         */
        BattleSceneControl.prototype._clickReturnBtn = function () {
            catchDoll.LevelCreate.instance.dispose();
            UICenter.instance.closeUI(0 /* BattleScene */);
            UICenter.instance.openUI(1 /* SelectLevel */);
        };
        /**
         * 点击右按钮
         */
        BattleSceneControl.prototype._clickMiddleBtn = function () {
            EventManager.fireEvent(1 /* MASTER_DOWN */);
        };
        /**
         * 点击右按钮
         */
        BattleSceneControl.prototype._clickRightBtn = function () {
            EventManager.fireEvent(0 /* MASTER_MOVE */, false);
        };
        /**
         * 点击右按钮
         */
        BattleSceneControl.prototype._clickLeftBtn = function () {
            EventManager.fireEvent(0 /* MASTER_MOVE */, true);
        };
        /**
         * 释放
         */
        BattleSceneControl.prototype.dispose = function () {
            Laya.timer.clear(this, this._updateTime);
            egret.Tween.removeTweens(this._view.timeLabel);
            this._view = null;
            _super.prototype.dispose.call(this);
        };
        return BattleSceneControl;
    }(BaseUIControl));
    catchDoll.BattleSceneControl = BattleSceneControl;
    __reflect(BattleSceneControl.prototype, "catchDoll.BattleSceneControl");
})(catchDoll || (catchDoll = {}));
var catchDoll;
(function (catchDoll) {
    var SOUND_CONST = (function () {
        function SOUND_CONST() {
        }
        /*背景音效*/
        SOUND_CONST.BGM_SOUND = "bgm_FishingJoy_mp3";
        /*下注金额按钮音效*/
        SOUND_CONST.BET_LEVEL_CLICK = "chips_FishingJoy_mp3";
        /*点击按钮声音*/
        SOUND_CONST.COMMON_BTN_CLICK = "btn_FishingJoy_mp3";
        /*倒计时声音*/
        SOUND_CONST.COUNTDOWN = "countdown_FishingJoy_mp3";
        /*下注声音组*/
        SOUND_CONST.BET_SOUND_ARY = ["sgj_bt1_FishingJoy_mp3", "sgj_bt2_FishingJoy_mp3", "sgj_bt3_FishingJoy_mp3", "sgj_bt4_FishingJoy_mp3",
            "sgj_bt5_FishingJoy_mp3", "sgj_bt6_FishingJoy_mp3", "sgj_bt7_FishingJoy_mp3", "sgj_bt8_FishingJoy_mp3"];
        /*开始选转*/
        SOUND_CONST.ROTATION_START = "sgj_start_FishingJoy_mp3";
        /*持续旋转*/
        SOUND_CONST.ROTATION_LOOP = "sgj_loop_FishingJoy_mp3";
        /*持续旋转长*/
        SOUND_CONST.ROTATION_LOOP_lOOG = "sgj_loop_long_FishingJoy_mp3";
        /*旋转结束*/
        SOUND_CONST.ROTATION_END = "sgj_end_FishingJoy_mp3";
        /*闪烁*/
        SOUND_CONST.TWINKLE_SOUND = "twinkle_FishingJoy_mp3";
        /*反向旋转声音*/
        SOUND_CONST.REVERSE_ROTATION = "sjg_xh_FishingJoy_mp3";
        /*小胜*/
        SOUND_CONST.SMALL_WIN = "win_FishingJoy_mp3";
        /*关闭*/
        SOUND_CONST.CLOSE = "close_FishingJoy_mp3";
        /*点击*/
        SOUND_CONST.CLICK = "click_qingcui_FishingJoy_mp3";
        /*大四喜*/
        SOUND_CONST.BIG_FOUR = "sgj_dsx_FishingJoy_mp3";
        /*大三元*/
        SOUND_CONST.BIG_THREE = "sgj_dsy_FishingJoy_mp3";
        /*小三元*/
        SOUND_CONST.SMALL_THREE = "sgj_xsy_FishingJoy_mp3";
        return SOUND_CONST;
    }());
    catchDoll.SOUND_CONST = SOUND_CONST;
    __reflect(SOUND_CONST.prototype, "catchDoll.SOUND_CONST");
})(catchDoll || (catchDoll = {}));
/**
 * 提供高效丰富的计时功能(300行代码搞定)
 * 原作者 layaBox
 * @author suo 去除无用方法 整理ts与as3语法差异 (代替原生Timer,setInterval)
 */
var Timer = (function () {
    /**
     * 创建 <code>Timer</code> 类的一个实例。
     */
    function Timer() {
        /*[DISABLE-ADD-VARIABLE-DEFAULT-VALUE]*/
        /** 两帧之间的时间间隔,单位毫秒。*/
        this._delta = 0;
        /** 时针缩放。*/
        this.scale = 1;
        /** 当前帧开始的时间。*/
        this.currTimer = this._now();
        /** 当前的帧数。*/
        this.currFrame = 0;
        /**@private */
        this._lastTimer = this._now();
        /**@private */
        this._mid = 1;
        /**@private */
        /*[IF-FLASH]*/
        this._methodMap = new Dictionary();
        //[IF-JS] private var _map:Array = [];
        /**@private */
        this._laters = [];
        /**@private */
        this._handlers = [];
        /**@private */
        this._temp = [];
        /**@private */
        this._count = 0;
        this._init();
    }
    Object.defineProperty(Timer.prototype, "delta", {
        /**
         *两帧之间的时间间隔,单位毫秒。
         */
        get: function () {
            return this._delta;
        },
        enumerable: true,
        configurable: true
    });
    /**@private */
    Timer.prototype._init = function () {
        Laya.timer && Laya.timer.frameLoop(1, this, this.update);
    };
    /**@private */
    Timer.prototype._now = function () {
        return Date.now();
    };
    /**
     * @private
     * 帧循环处理函数。
     */
    Timer.prototype.update = function () {
        if (this.scale <= 0) {
            this._lastTimer = this._now();
            return;
        }
        var frame = this.currFrame = this.currFrame + this.scale;
        var now = this._now();
        this._delta = (now - this._lastTimer) * this.scale;
        var timer = this.currTimer = this.currTimer + this._delta;
        this._lastTimer = now;
        //处理handler
        var handlers = this._handlers;
        this._count = 0;
        for (i = 0, n = handlers.length; i < n; i++) {
            handler = handlers[i];
            if (handler.method !== null) {
                var t = handler.userFrame ? frame : timer;
                if (t >= handler.exeTime) {
                    if (handler.repeat) {
                        if (!handler.jumpFrame) {
                            handler.exeTime += handler.delay;
                            handler.run(false);
                            if (t > handler.exeTime) {
                                //如果执行一次后还能再执行，做跳出处理，如果想用多次执行，需要设置jumpFrame=true
                                handler.exeTime += Math.ceil((t - handler.exeTime) / handler.delay) * handler.delay;
                            }
                        }
                        else {
                            while (t >= handler.exeTime) {
                                handler.exeTime += handler.delay;
                                handler.run(false);
                            }
                        }
                    }
                    else {
                        handler.run(true);
                    }
                }
            }
            else {
                this._count++;
            }
        }
        if (this._count > 30 || frame % 200 === 0)
            this._clearHandlers();
        //处理callLater
        var laters = this._laters;
        for (var i = 0, n = laters.length - 1; i <= n; i++) {
            var handler = laters[i];
            if (handler.method !== null) {
                /*[IF-FLASH]*/
                this._methodMap.remove(handler.method);
                //[IF-SCRIPT]_map[handler.key] = null;
                handler.run(false);
            }
            this._recoverHandler(handler);
            i === n && (n = laters.length - 1);
        }
        laters.length = 0;
    };
    /** @private */
    Timer.prototype._clearHandlers = function () {
        var handlers = this._handlers;
        for (var i = 0, n = handlers.length; i < n; i++) {
            var handler = handlers[i];
            if (handler.method !== null)
                this._temp.push(handler);
            else
                this._recoverHandler(handler);
        }
        this._handlers = this._temp;
        this._temp = handlers;
        this._temp.length = 0;
    };
    /** @private */
    Timer.prototype._recoverHandler = function (handler) {
        /*[IF-FLASH]*/
        if (this._methodMap.get(handler.method) == handler)
            this._methodMap.remove(handler.method);
        //[IF-SCRIPT]if(_map[handler.key]==handler) _map[handler.key] = null;
        handler.clear();
        Timer._pool.push(handler);
    };
    /** @private */
    Timer.prototype._create = function (useFrame, repeat, delay, caller, method, args, coverBefore) {
        //如果延迟为0，则立即执行
        if (!delay) {
            method.apply(caller, [args]);
            return null;
        }
        //先覆盖相同函数的计时
        if (coverBefore) {
            var handler = this._getHandler(caller, method);
            if (handler) {
                handler.repeat = repeat;
                handler.userFrame = useFrame;
                handler.delay = delay;
                handler.caller = caller;
                handler.method = method;
                handler.args = args;
                handler.exeTime = delay + (useFrame ? this.currFrame : this.currTimer + this._now() - this._lastTimer);
                return handler;
            }
        }
        //找到一个空闲的timerHandler
        handler = Timer._pool.length > 0 ? Timer._pool.pop() : new TimerHandler();
        handler.repeat = repeat;
        handler.userFrame = useFrame;
        handler.delay = delay;
        handler.caller = caller;
        handler.method = method;
        handler.args = args;
        handler.exeTime = delay + (useFrame ? this.currFrame : this.currTimer + this._now() - this._lastTimer) + 1;
        //索引handler
        this._indexHandler(handler);
        //插入数组
        this._handlers.push(handler);
        return handler;
    };
    /** @private */
    Timer.prototype._indexHandler = function (handler) {
        /*[IF-FLASH]*/
        this._methodMap.set(handler.method, handler);
        /*[IF-FLASH]*/
        return;
        // var caller:any = handler.caller;
        // var method:any = handler.method;
        // var cid:number = caller ? caller.$_GID || (caller.$_GID = Utils.getGID()) : 0;
        // var mid:number = method.$_TID || (method.$_TID = (this._mid++) * 100000);
        // handler.key = cid + mid;
        // this._map[handler.key] = handler;
    };
    /**
     * 定时执行一次。
     * @param	delay	延迟时间(单位为毫秒)。
     * @param	caller	执行域(this)。
     * @param	method	定时器回调函数。
     * @param	args	回调参数。
     * @param	coverBefore	是否覆盖之前的延迟执行，默认为 true 。
     */
    Timer.prototype.once = function (delay, caller, method, args, coverBefore) {
        if (args === void 0) { args = null; }
        if (coverBefore === void 0) { coverBefore = true; }
        this._create(false, false, delay, caller, method, args, coverBefore);
    };
    /**
     * 定时重复执行。
     * @param	delay	间隔时间(单位毫秒)。
     * @param	caller	执行域(this)。
     * @param	method	定时器回调函数。
     * @param	args	回调参数。
     * @param	coverBefore	是否覆盖之前的延迟执行，默认为 true 。
     * @param	jumpFrame 时钟是否跳帧。基于时间的循环回调，单位时间间隔内，如能执行多次回调，出于性能考虑，引擎默认只执行一次，设置jumpFrame=true后，则回调会连续执行多次
     */
    Timer.prototype.loop = function (delay, caller, method, args, coverBefore, jumpFrame) {
        if (args === void 0) { args = null; }
        if (coverBefore === void 0) { coverBefore = true; }
        if (jumpFrame === void 0) { jumpFrame = false; }
        var handler = this._create(false, true, delay, caller, method, args, coverBefore);
        if (handler)
            handler.jumpFrame = jumpFrame;
    };
    /**
     * 定时执行一次(基于帧率)。
     * @param	delay	延迟几帧(单位为帧)。
     * @param	caller	执行域(this)。
     * @param	method	定时器回调函数。
     * @param	args	回调参数。
     * @param	coverBefore	是否覆盖之前的延迟执行，默认为 true 。
     */
    Timer.prototype.frameOnce = function (delay, caller, method, args, coverBefore) {
        if (args === void 0) { args = null; }
        if (coverBefore === void 0) { coverBefore = true; }
        this._create(true, false, delay, caller, method, args, coverBefore);
    };
    /**
     * 定时重复执行(基于帧率)。
     * @param	delay	间隔几帧(单位为帧)。
     * @param	caller	执行域(this)。
     * @param	method	定时器回调函数。
     * @param	args	回调参数。
     * @param	coverBefore	是否覆盖之前的延迟执行，默认为 true 。
     */
    Timer.prototype.frameLoop = function (delay, caller, method, args, coverBefore) {
        if (args === void 0) { args = null; }
        if (coverBefore === void 0) { coverBefore = true; }
        this._create(true, true, delay, caller, method, args, coverBefore);
    };
    /** 返回统计信息。*/
    Timer.prototype.toString = function () {
        return "callLater:" + this._laters.length + " handlers:" + this._handlers.length + " pool:" + Timer._pool.length;
    };
    /**
     * 清理定时器。
     * @param	caller 执行域(this)。
     * @param	method 定时器回调函数。
     */
    Timer.prototype.clear = function (caller, method) {
        var handler = this._getHandler(caller, method);
        if (handler) {
            //[IF-JS] _map[handler.key] = null;handler.key = 0;
            /*[IF-FLASH]*/
            this._methodMap.remove(handler.method);
            handler.clear();
        }
    };
    /**
     * 清理对象身上的所有定时器。
     * @param	caller 执行域(this)。
     */
    Timer.prototype.clearAll = function (caller) {
        if (!caller)
            return;
        for (var i = 0, n = this._handlers.length; i < n; i++) {
            var handler = this._handlers[i];
            if (handler.caller === caller) {
                //[IF-JS] _map[handler.key] = null;handler.key = 0;
                /*[IF-FLASH]*/
                this._methodMap.remove(handler.method);
                handler.clear();
            }
        }
    };
    /** @private */
    Timer.prototype._getHandler = function (caller, method) {
        /*[IF-FLASH]*/
        for (var i = 0, n = this._handlers.length; i < n; i++) {
            var handler = this._handlers[i];
            if (handler.caller === caller && handler.method == method) {
                return handler;
            }
        }
        return null;
        // var cid:number = caller ? caller.$_GID || (caller.$_GID = Utils.getGID()) : 0;
        // var mid:number = method.$_TID || (method.$_TID = (_mid++) * 100000);
        // return _map[cid + mid];
    };
    /**
     * 延迟执行。
     * @param	caller 执行域(this)。
     * @param	method 定时器回调函数。
     * @param	args 回调参数。
     */
    Timer.prototype.callLater = function (caller, method, args) {
        if (args === void 0) { args = null; }
        if (this._getHandler(caller, method) == null) {
            //trace(caller, method);
            //找到一个空闲的timerHandler
            if (Timer._pool.length)
                var handler = Timer._pool.pop();
            else
                handler = new TimerHandler();
            //设置属性
            handler.caller = caller;
            handler.method = method;
            handler.args = args;
            //索引handler
            this._indexHandler(handler);
            //插入队列
            this._laters.push(handler);
        }
    };
    /**
     * 立即执行 callLater 。
     * @param	caller 执行域(this)。
     * @param	method 定时器回调函数。
     */
    Timer.prototype.runCallLater = function (caller, method) {
        var handler = this._getHandler(caller, method);
        if (handler && handler.method != null) {
            //[IF-JS] _map[handler.key] = null;
            /*[IF-FLASH]*/
            this._methodMap.remove(handler.method);
            handler.run(true);
        }
    };
    /**
     * 立即提前执行定时器，执行之后从队列中删除
     * @param	caller 执行域(this)。
     * @param	method 定时器回调函数。
     */
    Timer.prototype.runTimer = function (caller, method) {
        this.runCallLater(caller, method);
    };
    /**@private */
    Timer._pool = [];
    return Timer;
}());
__reflect(Timer.prototype, "Timer");
/** @private */
var TimerHandler = (function () {
    function TimerHandler() {
    }
    TimerHandler.prototype.clear = function () {
        this.caller = null;
        this.method = null;
        this.args = null;
    };
    TimerHandler.prototype.run = function (withClear) {
        var caller = this.caller;
        /*[IF-FLASH]*/
        // if ((caller is Node) && caller.destroyed)
        // 	/*[IF-FLASH]*/
        // 	return this.clear();
        //[IF-SCRIPT] 
        if (caller && caller.destroyed)
            return this.clear();
        var method = this.method;
        var args = this.args;
        withClear && this.clear();
        if (method == null)
            return;
        args ? method.apply(caller, args) : method.call(caller);
    };
    return TimerHandler;
}());
__reflect(TimerHandler.prototype, "TimerHandler");
/**
 * UI工具
 * @author suo
 */
var Point = egret.Point;
var UIUtil = (function () {
    function UIUtil() {
    }
    /**
     * @param contentBox 内容盒子
     * @param item 项
     * @param num 总数量
     * @param col 列
     * @param spacing 左右间距
     * @param lending 垂直间距
     * @param offsetX X偏移
     * @param offsetY Y偏移
     * @return itemList 项list
     * 网格布局
     */
    UIUtil.setItemGridLayout = function (contentBox, item, num, col, spacing, lending, offsetX, offsetY) {
        if (spacing === void 0) { spacing = 0; }
        if (lending === void 0) { lending = 0; }
        if (offsetX === void 0) { offsetX = 0; }
        if (offsetY === void 0) { offsetY = 0; }
        for (var i = 0; i < num; i++) {
            var pos = this.getGridItemPos(i, item, col, spacing, lending, offsetX, offsetY);
            item.x = pos[0];
            item.y = pos[1];
            contentBox.addChild(item);
        }
    };
    /**
     * 传入索引 获得该Index Item坐标
     */
    UIUtil.getGridItemPos = function (index, item, col, spacing, lending, offsetX, offsetY) {
        if (spacing === void 0) { spacing = 0; }
        if (lending === void 0) { lending = 0; }
        if (offsetX === void 0) { offsetX = 0; }
        if (offsetY === void 0) { offsetY = 0; }
        /**列数量*/
        var x = (index % col) * (item.width + spacing) + offsetX;
        var y = Math.floor(index / col) * (item.height + lending) + offsetY;
        return [x, y];
    };
    /**
     * 置灰
     */
    UIUtil.setGray = function (target) {
        var matrix = [0.3086, 0.6094, 0.0820, 0, 0,
            0.3086, 0.6094, 0.0820, 0, 0,
            0.3086, 0.6094, 0.0820, 0, 0,
            0, 0, 0, 1, 0];
        var stateFilter = new egret.ColorMatrixFilter(matrix);
        target.filters = [stateFilter];
    };
    /**
     * 恢复正常
     */
    UIUtil.setNomarl = function (target) {
        if (target) {
            target.filters = [];
        }
    };
    /**
     * 高亮
     */
    UIUtil.setLight = function (target) {
        var matrix = [1, 0, 0, 0, 0xff * 0.2,
            0, 1, 0, 0, 0xe0 * 0.2,
            0, 0, 1, 0, 0x8d * 0.2,
            0, 0, 0, 1, 0]; // alpha
        var stateFilter = new egret.ColorMatrixFilter(matrix);
        target.filters = [stateFilter];
    };
    /**
     * 变红色
     */
    UIUtil.setRed = function (target) {
        var matrix = [1, 0.964, 0.999, 0.96, 0xff * 0.2,
            0, 1, 0, 0, 0,
            0, 1, 1, 0, 0,
            0, 0, 0, 1, 0]; // alpha
        var stateFilter = new egret.ColorMatrixFilter(matrix);
        target.filters = [stateFilter];
    };
    /**
     * 从显示列表内移除自身
     */
    UIUtil.removeSelf = function () {
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i] = arguments[_i];
        }
        var len = rest.length;
        for (var i = 0; i < len; i++) {
            var target = rest[i];
            if (egret.is(target, "egret.DisplayObject")) {
                if (target && target.parent) {
                    target.parent.removeChild(target);
                }
            }
        }
    };
    /**
     * 创建影片剪辑
     */
    UIUtil.creatMovieClip = function (groupName, action) {
        if (action === void 0) { action = "action"; }
        var data = RES.getRes(groupName + "_json");
        var txtr = RES.getRes(groupName + "_png");
        var mcFactory = new egret.MovieClipDataFactory(data, txtr);
        return new egret.MovieClip(mcFactory.generateMovieClipData(action));
    };
    /**
     * 循环加法
     */
    UIUtil.circleAdd = function (value, addNum, maxNum) {
        value += addNum;
        if (value > maxNum) {
            value -= maxNum;
        }
        return value;
    };
    /**
     * 创建龙骨
     */
    UIUtil.creatDragonbones = function (groupName, armatureName) {
        if (armatureName === void 0) { armatureName = "armatureName"; }
        var egretFactory = dragonBones.EgretFactory.factory;
        if (egretFactory.getDragonBonesData(groupName) == null) {
            var dragonbonesData = RES.getRes(groupName + "_ske_dbbin");
            var textureData = RES.getRes(groupName + "_tex_json");
            var texture = RES.getRes(groupName + "_tex_png");
            egretFactory.parseDragonBonesData(dragonbonesData, groupName);
            egretFactory.parseTextureAtlasData(textureData, texture, groupName);
        }
        var armatureDisplay = egretFactory.buildArmatureDisplay(armatureName, groupName);
        return armatureDisplay;
    };
    /**
     * 通过角度获得弧度
     */
    UIUtil.getRadian = function (angle) {
        return angle * Math.PI / 180;
    };
    /**
     * 通过弧度获得角度
     */
    UIUtil.getAngle = function (radian) {
        return radian * 180 / Math.PI;
    };
    /**
     * 设置对象跳跃动画
     */
    UIUtil.setJumpTween = function (target, JumpMaxY, JumpMinY, durationTime, waitTime) {
        var _this = this;
        if (durationTime === void 0) { durationTime = 1000; }
        if (waitTime === void 0) { waitTime = MathUtil.random(0, 3000); }
        egret.Tween.get(target).to({ scaleX: 1, scaleY: 1, y: JumpMinY }, durationTime, egret.Ease.bounceOut).wait(waitTime).call(function () {
            egret.Tween.get(target).to({ scaleX: 0.9, scaleY: 1.1, y: JumpMaxY }, durationTime, egret.Ease.bounceIn).call(_this.setJumpTween, _this, [target, JumpMaxY, JumpMinY, durationTime]);
        }, this);
    };
    /**
     * 设置对象呼吸动画
     */
    UIUtil.setBreatheTween = function (target, durationTime) {
        var _this = this;
        egret.Tween.get(target).to({ alpha: 0 }, durationTime).call(function () {
            egret.Tween.get(target).to({ alpha: 1 }, durationTime).wait(500).call(_this.setBreatheTween, _this, [target, durationTime]);
        }, this);
    };
    /**
     * 设置对象缩放动画
     */
    UIUtil.setScaleTween = function (target, scaleXGene, scaleYGene, durationTime) {
        var _this = this;
        if (durationTime === void 0) { durationTime = 600; }
        egret.Tween.get(target).to({ scaleX: 1.1 * scaleXGene, scaleY: 1.1 * scaleYGene }, durationTime).call(function () {
            egret.Tween.get(target).to({ scaleX: 0.9 * scaleXGene, scaleY: 0.9 * scaleYGene }, durationTime).call(_this.setScaleTween, _this, [target, scaleXGene, scaleYGene, durationTime]);
        }, this);
    };
    /**
     * 设置对象上下移动动画
     */
    UIUtil.setDownUpTween = function (target, MaxY, MinY, durationTime) {
        var _this = this;
        if (durationTime === void 0) { durationTime = 1000; }
        egret.Tween.get(target).to({ y: MaxY }, durationTime).call(function () {
            egret.Tween.get(target).to({ y: MinY }, durationTime).call(_this.setDownUpTween, _this, [target, MaxY, MinY, durationTime]);
        }, this);
    };
    /**
     * 局部坐标转全局
     */
    UIUtil.localToGlobal = function (target, localX, localY) {
        if (localX === void 0) { localX = 0; }
        if (localY === void 0) { localY = 0; }
        var p = Point.create(0, 0);
        p = target.localToGlobal(localX, localY, p);
        var x = p.x;
        var y = p.y;
        Point.release(p);
        return [x, y];
    };
    return UIUtil;
}());
__reflect(UIUtil.prototype, "UIUtil");

;window.Main = Main;