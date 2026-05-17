gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.idToCallbackMap = new Map();
gdjs.Untitled_32sceneCode.GDbackgroundObjects1= [];
gdjs.Untitled_32sceneCode.GDbackgroundObjects2= [];
gdjs.Untitled_32sceneCode.GDcakeObjects1= [];
gdjs.Untitled_32sceneCode.GDcakeObjects2= [];
gdjs.Untitled_32sceneCode.GDcreamObjects1= [];
gdjs.Untitled_32sceneCode.GDcreamObjects2= [];
gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButtonObjects2= [];
gdjs.Untitled_32sceneCode.GDplateObjects1= [];
gdjs.Untitled_32sceneCode.GDplateObjects2= [];
gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButton2Objects1= [];
gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButton2Objects2= [];
gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButton3Objects1= [];
gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButton3Objects2= [];
gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButton4Objects1= [];
gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButton4Objects2= [];
gdjs.Untitled_32sceneCode.GDNewTextObjects1= [];
gdjs.Untitled_32sceneCode.GDNewTextObjects2= [];
gdjs.Untitled_32sceneCode.GDstrawbsObjects1= [];
gdjs.Untitled_32sceneCode.GDstrawbsObjects2= [];


gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDcakeObjects1Objects = Hashtable.newFrom({"cake": gdjs.Untitled_32sceneCode.GDcakeObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDcakeObjects1Objects = Hashtable.newFrom({"cake": gdjs.Untitled_32sceneCode.GDcakeObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDcreamObjects1Objects = Hashtable.newFrom({"cream": gdjs.Untitled_32sceneCode.GDcreamObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDstrawbsObjects1Objects = Hashtable.newFrom({"strawbs": gdjs.Untitled_32sceneCode.GDstrawbsObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDcreamObjects1Objects = Hashtable.newFrom({"cream": gdjs.Untitled_32sceneCode.GDcreamObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDstrawbsObjects1Objects = Hashtable.newFrom({"strawbs": gdjs.Untitled_32sceneCode.GDstrawbsObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDcreamObjects1Objects = Hashtable.newFrom({"cream": gdjs.Untitled_32sceneCode.GDcreamObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDstrawbsObjects1Objects = Hashtable.newFrom({"strawbs": gdjs.Untitled_32sceneCode.GDstrawbsObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDcreamObjects1Objects = Hashtable.newFrom({"cream": gdjs.Untitled_32sceneCode.GDcreamObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDstrawbsObjects1Objects = Hashtable.newFrom({"strawbs": gdjs.Untitled_32sceneCode.GDstrawbsObjects1});
gdjs.Untitled_32sceneCode.asyncCallback9394340 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewText"), gdjs.Untitled_32sceneCode.GDNewTextObjects2);

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewTextObjects2[i].hide();
}
}
gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.idToCallbackMap.set(9394340, gdjs.Untitled_32sceneCode.asyncCallback9394340);
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
for (const obj of gdjs.Untitled_32sceneCode.GDNewTextObjects1) asyncObjectsList.addObject("NewText", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback9394340(runtimeScene, asyncObjectsList)), 9394340, asyncObjectsList);
}
}

}


};gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("cream"), gdjs.Untitled_32sceneCode.GDcreamObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDcreamObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDcreamObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDcreamObjects1[k] = gdjs.Untitled_32sceneCode.GDcreamObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDcreamObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cake"), gdjs.Untitled_32sceneCode.GDcakeObjects1);
/* Reuse gdjs.Untitled_32sceneCode.GDcreamObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcreamObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcreamObjects1[i].getBehavior("Sticker").Stick(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDcakeObjects1Objects, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("strawbs"), gdjs.Untitled_32sceneCode.GDstrawbsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDstrawbsObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDstrawbsObjects1[i].getBehavior("Draggable").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDstrawbsObjects1[k] = gdjs.Untitled_32sceneCode.GDstrawbsObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDstrawbsObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cake"), gdjs.Untitled_32sceneCode.GDcakeObjects1);
/* Reuse gdjs.Untitled_32sceneCode.GDstrawbsObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDstrawbsObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDstrawbsObjects1[i].getBehavior("Sticker").Stick(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDcakeObjects1Objects, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteSquareDecoratedButton"), gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButtonObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButtonObjects1[k] = gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.Untitled_32sceneCode.GDcreamObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDcreamObjects1Objects, 1000, 200, "");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteSquareDecoratedButton2"), gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButton2Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButton2Objects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButton2Objects1[k] = gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButton2Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButton2Objects1.length = k;
if (isConditionTrue_0) {
gdjs.Untitled_32sceneCode.GDstrawbsObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDstrawbsObjects1Objects, 1000, 200, "");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteSquareDecoratedButton3"), gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButton3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButton3Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButton3Objects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButton3Objects1[k] = gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButton3Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButton3Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cream"), gdjs.Untitled_32sceneCode.GDcreamObjects1);
gdjs.copyArray(runtimeScene.getObjects("strawbs"), gdjs.Untitled_32sceneCode.GDstrawbsObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcreamObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcreamObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDstrawbsObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDstrawbsObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("cream"), gdjs.Untitled_32sceneCode.GDcreamObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDcreamObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDcreamObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcreamObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcreamObjects1[i].rotate(90, runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("strawbs"), gdjs.Untitled_32sceneCode.GDstrawbsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDstrawbsObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDstrawbsObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDstrawbsObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDstrawbsObjects1[i].rotate(90, runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("cream"), gdjs.Untitled_32sceneCode.GDcreamObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDcreamObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Delete");
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDcreamObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcreamObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcreamObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("strawbs"), gdjs.Untitled_32sceneCode.GDstrawbsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDstrawbsObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Delete");
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDstrawbsObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDstrawbsObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDstrawbsObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("cream"), gdjs.Untitled_32sceneCode.GDcreamObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDcreamObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDcreamObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcreamObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcreamObjects1[i].setAngle(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("strawbs"), gdjs.Untitled_32sceneCode.GDstrawbsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDstrawbsObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDstrawbsObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDstrawbsObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDstrawbsObjects1[i].setAngle(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteSquareDecoratedButton4"), gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButton4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButton4Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButton4Objects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButton4Objects1[k] = gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButton4Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButton4Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Untitled_32sceneCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteSquareDecoratedButton"), gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteSquareDecoratedButton2"), gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteSquareDecoratedButton3"), gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButton3Objects1);
/* Reuse gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButton4Objects1 */
gdjs.copyArray(runtimeScene.getObjects("plate"), gdjs.Untitled_32sceneCode.GDplateObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButton2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButton2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButtonObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButton3Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButton3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButton4Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButton4Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDplateObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDplateObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewTextObjects1[i].hide(false);
}
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Untitled_32sceneCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewTextObjects1[i].hide();
}
}
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDbackgroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDbackgroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDcakeObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDcakeObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDcreamObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDcreamObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDplateObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDplateObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButton2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButton2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButton3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButton3Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButton4Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButton4Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDstrawbsObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDstrawbsObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);
gdjs.Untitled_32sceneCode.GDbackgroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDbackgroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDcakeObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDcakeObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDcreamObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDcreamObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDplateObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDplateObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButton2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButton2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButton3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButton3Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButton4Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDWhiteSquareDecoratedButton4Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDstrawbsObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDstrawbsObjects2.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
