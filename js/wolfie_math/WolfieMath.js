'use strict'
class WolfieVector3x1 {

    /**
     * DO NOT CHANGE THIS FUNCTION
     */
    constructor() {
        this.xAxis = this.create();
        this.set(this.xAxis, 1.0, 0.0, 0.0);
        this.yAxis = this.create();
        this.set(this.yAxis, 0.0, 1.0, 0.0);
        this.zAxis = this.create();
        this.set(this.zAxis, 0.0, 0.0, 1.0);
    }

    /**
     * DO NOT CHANGE THIS FUNCTION
     * 
     * create - this makes and returns a 3x1 array to represent a vector or point.
     */
    create(x, y, z) {
        var size = 3;
        var vector3x1 = new Float32Array(size);
        this.set(vector3x1, x, y, z);
        return vector3x1;
    }

    /**
     * DO NOT CHANGE THIS FUNCTION
     * 
     * set - this function sets the x, y, and z values into the outVector.
     */
    set(outVector, x, y, z) {
        outVector[0] = x;
        outVector[1] = y;
        outVector[2] = z;
    }

    /**
     * dot - this function calculates and returns the dot product of vector1 and vector2.
     */
    dot(vector1, vector2) {
        // @todo
    }

    /**
     * cross - this function calculates the cross product of vector1 x vector2 and puts the
     * result in outVector.
     */
    cross(outVector, vector1, vector2) {
        // @todo
    }

    /**
     * normalize - this function takes the inVector and writes a normalized version of
     * the vector to outVector
     */
    normalize(outVector, inVector) {
        // @todo
    }
}

class WolfieMatrix4x4 {

    /**
     * DO NOT CHANGE THIS FUNCTION
     */    
    constructor() {
        this.EPSILON = 0.000001;
        this.translateTemp = this.create();
        this.rotateTemp = this.create();
        this.scaleTemp = this.create();
    }

    /**
     * DO NOT CHANGE THIS FUNCTION
     * 
     * create - this makes and returns a 4x4 column-major matrix int the form of a single-dimenational array.
     */
    create() {
        var size = 16;
        var matrix4x4 = new Float32Array(size);
        for (var i = 0; i < size; i++)
            matrix4x4[i] = 0.0;
        return matrix4x4;
    }
    
    /**
     * identity - this method loads identity matrix values into the matrix argument,
     * which must be a column-major 4x4 matrix (as produced by create).
     */    
    identity(matrix) {
        // @todo
    }
    
    /**
     * translate - this method translates the inMatrix by the positionArray
     * and puts the result in the outMatrix.
     */
    translate(outMatrix, inMatrix, positionArray) {
        // @todo
    }

    /**
     * rotate - this method rotates the inMatrix around the axis by radian degrees and
     * puts the result in outMatrix.
     */
    rotate(outMatrix, inMatrix, radians, axis) {
        // @todo
    }
    
    /**
     * scale - this method scales the inMatrix by the scalingVector
     * and puts the result in the outMatrix.
     */
    scale(outMatrix, inMatrix, scalingVector) {
        // @todo
    }
    
    /**
     * multiply - this method multiplies matrix1 * matrix2 and puts
     * the result in outMatrix.
     */
    multiply(outMatrix, matrix1, matrix2) {
        // @todo
    }
    
    /**
     * invert - this method gets the inverse of inMatrix and puts the result
     * in outMatrix.
     */
    invert(outMatrix, inMatrix) {
        let a00 = inMatrix[0], a01 = inMatrix[1], a02 = inMatrix[2], a03 = inMatrix[3];
        let a10 = inMatrix[4], a11 = inMatrix[5], a12 = inMatrix[6], a13 = inMatrix[7];
        let a20 = inMatrix[8], a21 = inMatrix[9], a22 = inMatrix[10], a23 = inMatrix[11];
        let a30 = inMatrix[12], a31 = inMatrix[13], a32 = inMatrix[14], a33 = inMatrix[15];
      
        let b00 = a00 * a11 - a01 * a10;
        let b01 = a00 * a12 - a02 * a10;
        let b02 = a00 * a13 - a03 * a10;
        let b03 = a01 * a12 - a02 * a11;
        let b04 = a01 * a13 - a03 * a11;
        let b05 = a02 * a13 - a03 * a12;
        let b06 = a20 * a31 - a21 * a30;
        let b07 = a20 * a32 - a22 * a30;
        let b08 = a20 * a33 - a23 * a30;
        let b09 = a21 * a32 - a22 * a31;
        let b10 = a21 * a33 - a23 * a31;
        let b11 = a22 * a33 - a23 * a32;
      
        // Calculate the determinant
        let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
      
        if (!det) {
          return null;
        }
        det = 1.0 / det;
      
        outMatrix[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
        outMatrix[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
        outMatrix[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
        outMatrix[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
        outMatrix[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
        outMatrix[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
        outMatrix[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
        outMatrix[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
        outMatrix[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
        outMatrix[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
        outMatrix[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
        outMatrix[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
        outMatrix[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
        outMatrix[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
        outMatrix[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
        outMatrix[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
      
        return outMatrix;
    }

    /**
     * persepctive - this method loads the perspective matrix into the outMatrix
     * based on the values provided.
     */
    perspective(outMatrix, fieldOfViewY, aspectRatio, nearClippingPlane, farClippingPlane) {
        // @todo
    }

    /**
     * model - this method loads the model matrix into outMatrix based on the translate,
     * rotate, and scale vectors provided.
     */
    model(outMatrix, translate, scale, rotate) {
        // @todo
    }

    /**
     * view - this method loads the view matrix into outMatrix based on the camera
     * position and orientation.
     */
    view(outMatrix, position, orientation) {
        // @todo
    }
}

/**
 * DO NOT CHANGE - THIS JUST INITIALIZES THE WolfieMath LIBRARY
 * AND MAKES THE VECTOR AND MATRIX TYPES AVAILABLE EVERYWHERE
 */
class WolfieMath {
    constructor(){
        window.wolfieVector3x1 = new WolfieVector3x1();
        window.wolfieMatrix4x4 = new WolfieMatrix4x4();
    }

    printVector(name, data, size) {
        var text = "";
        text += name + ": [";
        for (var i = 0; i < size; i++) {
            text += data[i];
            if (i < (size-1))
                text += ", ";
        }
        text += "]\n";
        console.log(text);
    }

    printMatrix(name, data) {
        var text = name + "\n[";
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                var index = (j*4) + i;
                text += data[index];
                if (j < 3)
                    text += ",";
                else if (i < 3)
                    text += "\n";
                else
                    text += "]";
            }
        }
        console.log(text);
    }

    runVectorTests() {
        // TEST DOT PRODUCT
        var vector1 = wolfieVector3x1.create(1, 0, 0);
        this.printVector("vector1", vector1, 3);
        var vector2 = wolfieVector3x1.create(0, 1, 0);
        this.printVector("vector2", vector2, 3);
        var dot = wolfieVector3x1.dot(vector1, vector2);
        console.log("vector1 dot vector2 = " + dot);  

        // TEST CROSS PRODUCT        
        var crossResult = wolfieVector3x1.create(0, 0, 0);
        wolfieVector3x1.cross(crossResult, vector1, vector2);
        this.printVector("vector1 cross vector2 = ", crossResult, 3); 

        // TEST NORMALIZE
        wolfieVector3x1.set(vector1, 1, 1, 0);
        var normalResult = wolfieVector3x1.create(0, 0, 0);
        wolfieVector3x1.normalize(normalResult, vector1);
        this.printVector("pre-normalized vector: ", vector1, 3);
        this.printVector("normalized vector = ", normalResult, 3);

        // ADD MORE AS NEEDED
    }

    runMatrixTests() {
        // identity
        var identityMatrix = wolfieMatrix4x4.create();
        wolfieMatrix4x4.identity(identityMatrix);
        this.printMatrix("identity matrix:", identityMatrix);

        // translate
        var translateMatrix = wolfieMatrix4x4.create();
        wolfieMatrix4x4.identity(translateMatrix);
        var position = wolfieVector3x1.create(10, 20, 30);
        wolfieMatrix4x4.translate(translateMatrix, translateMatrix, position);
        this.printMatrix("translate matrix:", translateMatrix);

        // rotate x
        var rotateMatrix = wolfieMatrix4x4.create();
        var rotation = wolfieVector3x1.create(Math.PI/4, Math.PI/8, Math.PI/16);
        wolfieMatrix4x4.identity(rotateMatrix);
        wolfieMatrix4x4.rotate(rotateMatrix, rotateMatrix, rotation[0], wolfieVector3x1.xAxis);
        this.printMatrix("x rotation Matrix:", rotateMatrix);

        // rotate y
        wolfieMatrix4x4.identity(rotateMatrix);
        wolfieMatrix4x4.rotate(rotateMatrix, rotateMatrix, rotation[1], wolfieVector3x1.yAxis);
        this.printMatrix("y rotation Matrix:", rotateMatrix);

        // rotate z
        wolfieMatrix4x4.identity(rotateMatrix);
        wolfieMatrix4x4.rotate(rotateMatrix, rotateMatrix, rotation[2], wolfieVector3x1.zAxis);
        this.printMatrix("z rotation Matrix:", rotateMatrix);

        // scale
        var scaleMatrix = wolfieMatrix4x4.create();
        wolfieMatrix4x4.identity(scaleMatrix);
        var scale = wolfieVector3x1.create(1,2,4);
        wolfieMatrix4x4.scale(scaleMatrix, scaleMatrix, scale);
        this.printMatrix("scale Matrix:", scaleMatrix);

        // multiply the rotation and scaling matrices together
        var multMatrix = wolfieMatrix4x4.create();
        wolfieMatrix4x4.identity(multMatrix);
        wolfieMatrix4x4.multiply(multMatrix, scaleMatrix, rotateMatrix);
        this.printMatrix("scaling * rotation Matrices: ", multMatrix);

        //perspective
        var fieldOfView = 90 * 180/Math.PI;
        var nearClippingPlane = 1.0;
        var farClippingPlane = 1000.0;
        var aspectRatio = 16/9;
        var perspectiveMatrix = wolfieMatrix4x4.create();
        wolfieMatrix4x4.identity(perspectiveMatrix);
        wolfieMatrix4x4.perspective(perspectiveMatrix, fieldOfView, aspectRatio, nearClippingPlane, farClippingPlane);
        this.printMatrix("perspective Matrix: ", perspectiveMatrix);

        // model
        var modelMatrix = wolfieMatrix4x4.create();
        wolfieMatrix4x4.identity(modelMatrix);
        wolfieMatrix4x4.model(modelMatrix, position, scale, rotation);
        this.printMatrix("model Matrix: ", modelMatrix);

        // view
        var viewMatrix = wolfieMatrix4x4.create();
        wolfieMatrix4x4.identity(viewMatrix);
        var cameraPosition = wolfieVector3x1.create(10, 20, 30);
        var cameraOrientation = wolfieVector3x1.create(0, 0, -1);
        wolfieMatrix4x4.view(viewMatrix, cameraPosition, cameraOrientation);
        this.printMatrix("view Matrix: ", viewMatrix);

        // ADD MORE AS NEEDED
    }
}