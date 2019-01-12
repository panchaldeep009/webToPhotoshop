#target photoshop


cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

var names = "Deep Panchal";
var source = "D:/Coding/webToPS/AutoPhotoshopPy/jsxs/HarryPotter/photoshop.psd";
var save = "D:/Coding/webToPS/AutoPhotoshopPy/output/hp/";
var uid = "_1982017858560029";

function h(opneFile,textS,save,uid) {
  // Open
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putBoolean(sTID("dontRecord"), false);
    desc1.putBoolean(sTID("forceNotify"), true);
    desc1.putPath(cTID('null'), new File(opneFile));
    desc1.putInteger(cTID('DocI'), 580);
    executeAction(cTID('Opn '), desc1, dialogMode);
  };

  // Edit Contents
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    executeAction(sTID('placedLayerEditContents'), desc1, dialogMode);
  };

  // Select
  function step3(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    desc1.putBoolean(cTID('MkVs'), false);
    var list1 = new ActionList();
    list1.putInteger(287);
    desc1.putList(cTID('LyrI'), list1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Set Text
  function step4(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('TxLr'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putString(cTID('Txt '), textS.replace(" ", ""));
    var desc3 = new ActionDescriptor();
    desc3.putEnumerated(sTID("warpStyle"), sTID("warpStyle"), sTID("warpNone"));
    desc3.putDouble(sTID("warpValue"), 0);
    desc3.putDouble(sTID("warpPerspective"), 0);
    desc3.putDouble(sTID("warpPerspectiveOther"), 0);
    desc3.putEnumerated(sTID("warpRotate"), cTID('Ornt'), cTID('Hrzn'));
    desc2.putObject(cTID('warp'), cTID('warp'), desc3);
    desc2.putEnumerated(sTID("textGridding"), sTID("textGridding"), cTID('None'));
    desc2.putEnumerated(cTID('Ornt'), cTID('Ornt'), cTID('Hrzn'));
    desc2.putEnumerated(cTID('AntA'), cTID('Annt'), cTID('AnCr'));
    var desc4 = new ActionDescriptor();
    desc4.putUnitDouble(cTID('Left'), cTID('#Pnt'), -82.53755859375);
    desc4.putUnitDouble(cTID('Top '), cTID('#Pnt'), -54.5703149414062);
    desc4.putUnitDouble(cTID('Rght'), cTID('#Pnt'), 79.6754150390625);
    desc4.putUnitDouble(cTID('Btom'), cTID('#Pnt'), 15.1551123046875);
    desc2.putObject(sTID("bounds"), sTID("bounds"), desc4);
    var desc5 = new ActionDescriptor();
    desc5.putUnitDouble(cTID('Left'), cTID('#Pnt'), -81.81755859375);
    desc5.putUnitDouble(cTID('Top '), cTID('#Pnt'), -52.32);
    desc5.putUnitDouble(cTID('Rght'), cTID('#Pnt'), 79.9687939453125);
    desc5.putUnitDouble(cTID('Btom'), cTID('#Pnt'), 15.12);
    desc2.putObject(sTID("boundingBox"), sTID("boundingBox"), desc5);
    var list1 = new ActionList();
    var desc6 = new ActionDescriptor();
    desc6.putEnumerated(sTID("textType"), sTID("textType"), cTID('Pnt '));
    desc6.putEnumerated(cTID('Ornt'), cTID('Ornt'), cTID('Hrzn'));
    var desc7 = new ActionDescriptor();
    desc7.putDouble(sTID("xx"), 1);
    desc7.putDouble(sTID("xy"), 0);
    desc7.putDouble(sTID("yx"), 0);
    desc7.putDouble(sTID("yy"), 1);
    desc7.putDouble(sTID("tx"), 0);
    desc7.putDouble(sTID("ty"), 0);
    desc6.putObject(cTID('Trnf'), cTID('Trnf'), desc7);
    desc6.putInteger(sTID("rowCount"), 1);
    desc6.putInteger(sTID("columnCount"), 1);
    desc6.putBoolean(sTID("rowMajorOrder"), true);
    desc6.putUnitDouble(sTID("rowGutter"), cTID('#Pnt'), 0);
    desc6.putUnitDouble(sTID("columnGutter"), cTID('#Pnt'), 0);
    desc6.putUnitDouble(cTID('Spcn'), cTID('#Pnt'), 0);
    desc6.putEnumerated(sTID("frameBaselineAlignment"), sTID("frameBaselineAlignment"), sTID("alignByAscent"));
    desc6.putUnitDouble(sTID("firstBaselineMinimum"), cTID('#Pnt'), 0);
    var desc8 = new ActionDescriptor();
    desc8.putDouble(cTID('Hrzn'), 0);
    desc8.putDouble(cTID('Vrtc'), 0);
    desc6.putObject(cTID('base'), cTID('Pnt '), desc8);
    list1.putObject(sTID("textShape"), desc6);
    desc2.putList(sTID("textShape"), list1);
    var list2 = new ActionList();
    var desc9 = new ActionDescriptor();
    desc9.putInteger(cTID('From'), 0);
    desc9.putInteger(cTID('T   '), 9);
    var desc10 = new ActionDescriptor();
    desc10.putBoolean(sTID("styleSheetHasParent"), true);
    desc10.putString(sTID("fontPostScriptName"), "HarryP");
    desc10.putString(cTID('FntN'), "Harry P");
    desc10.putString(cTID('FntS'), "Regular");
    desc10.putInteger(cTID('Scrp'), 0);
    desc10.putInteger(cTID('FntT'), 1);
    desc10.putBoolean(sTID("fontAvailable"), true);
    desc10.putUnitDouble(cTID('Sz  '), cTID('#Pnt'), 65.0429223632812);
    desc10.putUnitDouble(sTID("impliedFontSize"), cTID('#Pnt'), 137.242301100985);
    desc10.putDouble(cTID('VrtS'), 100);
    desc10.putBoolean(sTID("autoLeading"), false);
    desc10.putUnitDouble(cTID('Ldng'), cTID('#Pnt'), 44.7393127441406);
    desc10.putUnitDouble(sTID("impliedLeading"), cTID('#Pnt'), 94.4011432387422);
    desc10.putInteger(cTID('Trck'), -39);
    desc10.putUnitDouble(cTID('Bsln'), cTID('#Pnt'), 0);
    desc10.putUnitDouble(sTID("impliedBaselineShift"), cTID('#Pnt'), 0);
    desc10.putEnumerated(cTID('AtKr'), cTID('AtKr'), sTID("metricsKern"));
    desc10.putEnumerated(sTID("fontCaps"), sTID("fontCaps"), cTID('Nrml'));
    desc10.putEnumerated(sTID("digitSet"), sTID("digitSet"), sTID("defaultDigits"));
    desc10.putUnitDouble(sTID("markYDistFromBaseline"), cTID('#Pnt'), 24);
    desc10.putEnumerated(sTID("textLanguage"), sTID("textLanguage"), sTID("ukenglishLanguage"));
    var desc11 = new ActionDescriptor();
    desc11.putDouble(cTID('Rd  '), 0.99960001185536);
    desc11.putDouble(cTID('Grn '), 0.99960001185536);
    desc11.putDouble(cTID('Bl  '), 0.99960001185536);
    desc10.putObject(cTID('Clr '), sTID("RGBColor"), desc11);
    var desc12 = new ActionDescriptor();
    desc12.putString(sTID("fontPostScriptName"), "MyriadPro-Regular");
    desc12.putString(cTID('FntN'), "Myriad Pro");
    desc12.putString(cTID('FntS'), "Regular");
    desc12.putInteger(cTID('Scrp'), 0);
    desc12.putInteger(cTID('FntT'), 0);
    desc12.putBoolean(sTID("fontAvailable"), true);
    desc12.putUnitDouble(cTID('Sz  '), cTID('#Pnt'), 12);
    desc12.putUnitDouble(sTID("impliedFontSize"), cTID('#Pnt'), 25.3203200805374);
    desc12.putDouble(cTID('HrzS'), 100);
    desc12.putDouble(cTID('VrtS'), 100);
    desc12.putBoolean(sTID("syntheticBold"), false);
    desc12.putBoolean(sTID("syntheticItalic"), false);
    desc12.putBoolean(sTID("autoLeading"), true);
    desc12.putInteger(cTID('Trck'), 0);
    desc12.putUnitDouble(cTID('Bsln'), cTID('#Pnt'), 0);
    desc12.putUnitDouble(sTID("impliedBaselineShift"), cTID('#Pnt'), 0);
    desc12.putDouble(sTID("characterRotation"), 0);
    desc12.putEnumerated(cTID('AtKr'), cTID('AtKr'), sTID("metricsKern"));
    desc12.putEnumerated(sTID("fontCaps"), sTID("fontCaps"), cTID('Nrml'));
    desc12.putEnumerated(sTID("digitSet"), sTID("digitSet"), sTID("defaultDigits"));
    desc12.putEnumerated(sTID("dirOverride"), sTID("dirOverride"), sTID("dirOverrideDefault"));
    desc12.putEnumerated(sTID("kashidas"), sTID("kashidas"), sTID("kashidaDefault"));
    desc12.putEnumerated(sTID("diacVPos"), sTID("diacVPos"), sTID("diacVPosOpenType"));
    desc12.putUnitDouble(sTID("diacXOffset"), cTID('#Pnt'), 0);
    desc12.putUnitDouble(sTID("diacYOffset"), cTID('#Pnt'), 0);
    desc12.putUnitDouble(sTID("markYDistFromBaseline"), cTID('#Pnt'), 100);
    desc12.putEnumerated(sTID("baseline"), sTID("baseline"), cTID('Nrml'));
    desc12.putEnumerated(sTID("otbaseline"), sTID("otbaseline"), cTID('Nrml'));
    desc12.putEnumerated(sTID("strikethrough"), sTID("strikethrough"), sTID("strikethroughOff"));
    desc12.putEnumerated(cTID('Undl'), cTID('Undl'), sTID("underlineOff"));
    desc12.putUnitDouble(sTID("underlineOffset"), cTID('#Pnt'), 0);
    desc12.putBoolean(sTID("ligature"), true);
    desc12.putBoolean(sTID("altligature"), false);
    desc12.putBoolean(sTID("contextualLigatures"), false);
    desc12.putBoolean(sTID("alternateLigatures"), false);
    desc12.putBoolean(sTID("oldStyle"), false);
    desc12.putBoolean(sTID("fractions"), false);
    desc12.putBoolean(sTID("ordinals"), false);
    desc12.putBoolean(sTID("swash"), false);
    desc12.putBoolean(sTID("titling"), false);
    desc12.putBoolean(sTID("connectionForms"), false);
    desc12.putBoolean(sTID("stylisticAlternates"), false);
    desc12.putBoolean(sTID("ornaments"), false);
    desc12.putBoolean(sTID("justificationAlternates"), false);
    desc12.putEnumerated(sTID("figureStyle"), sTID("figureStyle"), cTID('Nrml'));
    desc12.putBoolean(sTID("proportionalMetrics"), false);
    desc12.putBoolean(cTID('kana'), false);
    desc12.putBoolean(sTID("italics"), false);
    desc12.putBoolean(cTID('ruby'), false);
    desc12.putEnumerated(sTID("baselineDirection"), sTID("baselineDirection"), sTID("rotated"));
    desc12.putEnumerated(sTID("textLanguage"), sTID("textLanguage"), sTID("englishLanguage"));
    desc12.putEnumerated(sTID("japaneseAlternate"), sTID("japaneseAlternate"), sTID("defaultForm"));
    desc12.putDouble(sTID("mojiZume"), 0);
    desc12.putEnumerated(sTID("gridAlignment"), sTID("gridAlignment"), sTID("roman"));
    desc12.putBoolean(sTID("enableWariChu"), false);
    desc12.putInteger(sTID("wariChuCount"), 2);
    desc12.putInteger(sTID("wariChuLineGap"), 0);
    desc12.putDouble(sTID("wariChuScale"), 0.5);
    desc12.putInteger(sTID("wariChuWidow"), 2);
    desc12.putInteger(sTID("wariChuOrphan"), 2);
    desc12.putEnumerated(sTID("wariChuJustification"), sTID("wariChuJustification"), sTID("wariChuAutoJustify"));
    desc12.putInteger(sTID("tcyUpDown"), 0);
    desc12.putInteger(sTID("tcyLeftRight"), 0);
    desc12.putDouble(sTID("leftAki"), -1);
    desc12.putDouble(sTID("rightAki"), -1);
    desc12.putInteger(sTID("jiDori"), 0);
    desc12.putBoolean(sTID("noBreak"), false);
    var desc13 = new ActionDescriptor();
    desc13.putDouble(cTID('Rd  '), 0);
    desc13.putDouble(cTID('Grn '), 0);
    desc13.putDouble(cTID('Bl  '), 0);
    desc12.putObject(cTID('Clr '), sTID("RGBColor"), desc13);
    var desc14 = new ActionDescriptor();
    desc14.putDouble(cTID('Rd  '), 0);
    desc14.putDouble(cTID('Grn '), 0);
    desc14.putDouble(cTID('Bl  '), 0);
    desc12.putObject(sTID("strokeColor"), sTID("RGBColor"), desc14);
    desc12.putBoolean(cTID('Fl  '), true);
    desc12.putBoolean(cTID('Strk'), false);
    desc12.putBoolean(sTID("fillFirst"), true);
    desc12.putBoolean(sTID("fillOverPrint"), false);
    desc12.putBoolean(sTID("strokeOverPrint"), false);
    desc12.putEnumerated(sTID("lineCap"), sTID("lineCap"), sTID("buttCap"));
    desc12.putEnumerated(sTID("lineJoin"), sTID("lineJoin"), sTID("miterJoin"));
    desc12.putUnitDouble(sTID("lineWidth"), cTID('#Pnt'), 1);
    desc12.putUnitDouble(sTID("miterLimit"), cTID('#Pnt'), 4);
    desc12.putDouble(sTID("lineDashoffset"), 0);
    desc10.putObject(sTID("baseParentStyle"), cTID('TxtS'), desc12);
    desc9.putObject(cTID('TxtS'), cTID('TxtS'), desc10);
    list2.putObject(cTID('Txtt'), desc9);
    desc2.putList(cTID('Txtt'), list2);
    var list3 = new ActionList();
    var desc15 = new ActionDescriptor();
    desc15.putInteger(cTID('From'), 0);
    desc15.putInteger(cTID('T   '), 9);
    var desc16 = new ActionDescriptor();
    desc16.putBoolean(sTID("styleSheetHasParent"), true);
    desc16.putEnumerated(cTID('Algn'), cTID('Alg '), cTID('Cntr'));
    desc16.putEnumerated(sTID("directionType"), sTID("directionType"), sTID("dirLeftToRight"));
    desc16.putEnumerated(sTID("textComposerEngine"), sTID("textComposerEngine"), sTID("textOptycaComposer"));
    desc15.putObject(sTID("paragraphStyle"), sTID("paragraphStyle"), desc16);
    list3.putObject(sTID("paragraphStyleRange"), desc15);
    desc2.putList(sTID("paragraphStyleRange"), list3);
    var list4 = new ActionList();
    desc2.putList(sTID("kerningRange"), list4);
    desc1.putObject(cTID('T   '), cTID('TxLr'), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Set
  function step5(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Prpr'), cTID('TxtS'));
    ref1.putEnumerated(cTID('TxLr'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putInteger(sTID("textOverrideFeatureName"), 808465458);
    desc2.putInteger(sTID("typeStyleOperationType"), 3);
    desc2.putUnitDouble(cTID('Sz  '), cTID('#Pnt'), 130.000004882813);
    desc1.putObject(cTID('T   '), cTID('TxtS'), desc2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Save
  function step6(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    executeAction(cTID('save'), undefined, dialogMode);
  };

  // Close
  function step7(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putInteger(cTID('DocI'), 558);
    desc1.putBoolean(sTID("forceNotify"), true);
    executeAction(cTID('Cls '), desc1, dialogMode);
  };

  // Save
  function step9(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putInteger(cTID('EQlt'), 1);
    desc2.putEnumerated(cTID('MttC'), cTID('MttC'), cTID('None'));
    desc1.putObject(cTID('As  '), sTID("JPEGFormat"), desc2);
    desc1.putPath(cTID('In  '), new File(save+names.replace(" ", "-")+uid+".jpg"));
    desc1.putInteger(cTID('DocI'), 667);
    desc1.putBoolean(cTID('Cpy '), true);
    executeAction(cTID('save'), desc1, dialogMode);
  };

  // Close
  function step10(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putEnumerated(cTID('Svng'), cTID('YsN '), cTID('N   '));
    desc1.putInteger(cTID('DocI'), 667);
    desc1.putBoolean(sTID("forceNotify"), true);
    executeAction(cTID('Cls '), desc1, dialogMode);
  };

  // Open
  function step11(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putBoolean(sTID("dontRecord"), false);
    desc1.putBoolean(sTID("forceNotify"), true);
    desc1.putPath(cTID('null'), new File(save+names.replace(" ", "-")+uid+".jpg"));
    desc1.putInteger(cTID('DocI'), 745);
    executeAction(cTID('Opn '), desc1, dialogMode);
  };

  // Export
  function step12(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putEnumerated(cTID('Op  '), cTID('SWOp'), cTID('OpSa'));
    desc2.putBoolean(cTID('DIDr'), true);
    desc2.putPath(cTID('In  '), new File(save));
    desc2.putEnumerated(cTID('Fmt '), cTID('IRFm'), sTID("JPEGFormat"));
    desc2.putBoolean(cTID('Intr'), false);
    desc2.putInteger(cTID('Qlty'), 30);
    desc2.putInteger(cTID('QChS'), 0);
    desc2.putInteger(cTID('QCUI'), 0);
    desc2.putBoolean(cTID('QChT'), false);
    desc2.putBoolean(cTID('QChV'), false);
    desc2.putBoolean(cTID('Optm'), true);
    desc2.putInteger(cTID('Pass'), 1);
    desc2.putDouble(cTID('blur'), 0);
    desc2.putBoolean(cTID('Mtt '), true);
    desc2.putBoolean(cTID('EICC'), false);
    desc2.putInteger(cTID('MttR'), 255);
    desc2.putInteger(cTID('MttG'), 255);
    desc2.putInteger(cTID('MttB'), 255);
    desc2.putBoolean(cTID('SHTM'), false);
    desc2.putBoolean(cTID('SImg'), true);
    desc2.putEnumerated(cTID('SWsl'), cTID('STsl'), cTID('SLAl'));
    desc2.putEnumerated(cTID('SWch'), cTID('STch'), cTID('CHsR'));
    desc2.putEnumerated(cTID('SWmd'), cTID('STmd'), cTID('MDCC'));
    desc2.putBoolean(cTID('ohXH'), false);
    desc2.putBoolean(cTID('ohIC'), true);
    desc2.putBoolean(cTID('ohAA'), true);
    desc2.putBoolean(cTID('ohQA'), true);
    desc2.putBoolean(cTID('ohCA'), false);
    desc2.putBoolean(cTID('ohIZ'), true);
    desc2.putEnumerated(cTID('ohTC'), cTID('SToc'), cTID('OC03'));
    desc2.putEnumerated(cTID('ohAC'), cTID('SToc'), cTID('OC03'));
    desc2.putInteger(cTID('ohIn'), -1);
    desc2.putEnumerated(cTID('ohLE'), cTID('STle'), cTID('LE03'));
    desc2.putEnumerated(cTID('ohEn'), cTID('STen'), cTID('EN00'));
    desc2.putBoolean(cTID('olCS'), false);
    desc2.putEnumerated(cTID('olEC'), cTID('STst'), cTID('ST00'));
    desc2.putEnumerated(cTID('olWH'), cTID('STwh'), cTID('WH01'));
    desc2.putEnumerated(cTID('olSV'), cTID('STsp'), cTID('SP04'));
    desc2.putEnumerated(cTID('olSH'), cTID('STsp'), cTID('SP04'));
    var list1 = new ActionList();
    var desc3 = new ActionDescriptor();
    desc3.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC00'));
    list1.putObject(cTID('SCnc'), desc3);
    var desc4 = new ActionDescriptor();
    desc4.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC19'));
    list1.putObject(cTID('SCnc'), desc4);
    var desc5 = new ActionDescriptor();
    desc5.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC28'));
    list1.putObject(cTID('SCnc'), desc5);
    var desc6 = new ActionDescriptor();
    desc6.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC24'));
    list1.putObject(cTID('SCnc'), desc6);
    var desc7 = new ActionDescriptor();
    desc7.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC24'));
    list1.putObject(cTID('SCnc'), desc7);
    var desc8 = new ActionDescriptor();
    desc8.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC24'));
    list1.putObject(cTID('SCnc'), desc8);
    desc2.putList(cTID('olNC'), list1);
    desc2.putBoolean(cTID('obIA'), false);
    desc2.putString(cTID('obIP'), "");
    desc2.putEnumerated(cTID('obCS'), cTID('STcs'), cTID('CS01'));
    var list2 = new ActionList();
    var desc9 = new ActionDescriptor();
    desc9.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC01'));
    list2.putObject(cTID('SCnc'), desc9);
    var desc10 = new ActionDescriptor();
    desc10.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC20'));
    list2.putObject(cTID('SCnc'), desc10);
    var desc11 = new ActionDescriptor();
    desc11.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC02'));
    list2.putObject(cTID('SCnc'), desc11);
    var desc12 = new ActionDescriptor();
    desc12.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC19'));
    list2.putObject(cTID('SCnc'), desc12);
    var desc13 = new ActionDescriptor();
    desc13.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC06'));
    list2.putObject(cTID('SCnc'), desc13);
    var desc14 = new ActionDescriptor();
    desc14.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC24'));
    list2.putObject(cTID('SCnc'), desc14);
    var desc15 = new ActionDescriptor();
    desc15.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC24'));
    list2.putObject(cTID('SCnc'), desc15);
    var desc16 = new ActionDescriptor();
    desc16.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC24'));
    list2.putObject(cTID('SCnc'), desc16);
    var desc17 = new ActionDescriptor();
    desc17.putEnumerated(cTID('ncTp'), cTID('STnc'), cTID('NC22'));
    list2.putObject(cTID('SCnc'), desc17);
    desc2.putList(cTID('ovNC'), list2);
    desc2.putBoolean(cTID('ovCM'), false);
    desc2.putBoolean(cTID('ovCW'), true);
    desc2.putBoolean(cTID('ovCU'), true);
    desc2.putBoolean(cTID('ovSF'), true);
    desc2.putBoolean(cTID('ovCB'), true);
    desc2.putString(cTID('ovSN'), "images");
    desc1.putObject(cTID('Usng'), sTID("SaveForWeb"), desc2);
    executeAction(cTID('Expr'), desc1, dialogMode);
  };

  // Close
  function step13(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putEnumerated(cTID('Svng'), cTID('YsN '), cTID('N   '));
    desc1.putInteger(cTID('DocI'), 753);
    desc1.putBoolean(sTID("forceNotify"), true);
    executeAction(cTID('Cls '), desc1, dialogMode);
  };

  step1();      // Open
  step2();      // Edit Contents
  step3();      // Select
  step4();      // Set
  step5();      // Set
  step6();      // Save
  step7();      // Close
  step9();      // Save
  step10();      // Close
  step11();      // Open
  step12();      // Export
  step13();      // Close
};

h.main = function () {
  h(source,names,save,uid);
};

h.main();
"h.jsx"