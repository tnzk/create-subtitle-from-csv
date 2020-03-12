function createSubtitle(str, inPointFrame, outPointFrame) {
    app.beginUndoGroup('createSubtitle');
    var subtitle = activeComp.layers.addText(str);
    subtitle.inPoint = inPointFrame;
    subtitle.outPoint = outPointFrame;
    app.endUndoGroup();
    return 0;
}

function init() {
    activeComp = app.project.activeItem;
}
