function createSubtitle(str, inPointFrame, outPointFrame) {
    app.beginUndoGroup('createSubtitle');
    var subtitle = subtitleComp.layers.addText(str);
    subtitle.inPoint = inPointFrame;
    subtitle.outPoint = outPointFrame;
    app.endUndoGroup();
    return 0;
}

function init() {
    // app.project.items.addComp(name, height, pixelAspect, duration, frameRate)
    subtitleComp = app.project.items.addComp("subtitle", 1920, 1080, 1, 1200, 30);
}
