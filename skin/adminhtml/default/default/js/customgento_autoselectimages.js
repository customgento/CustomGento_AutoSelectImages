if (typeof Product.Gallery !== 'undefined') {
    Product.Gallery.prototype.createImageRow = Product.Gallery.prototype.createImageRow.wrap(function (parentMethod, image) {
        // first call the parent method
        parentMethod(image);

        // auto-select the radio buttons for the first uploaded image
        $H(this.imageTypes).each(function (pair) {
            if (this.images.length === 1) {
                this.getFileElement(image.file, 'cell-' + pair.key + ' input').checked = true;
            }
        }.bind(this));
        this.setProductImages(image.file);
    });
}
