const half = 0.5;


export function rigthTriangleArea(base, height) {
    return half * base * height;
}

export function rightTriangleHypotenuse(side1, side2) {
    return Math.sqrt(Math.pow(side1, 2) + Math.pow(side2, 2));
}

export function equilateralTriangleArea(side) {
    return (Math.sqrt(3)/4) * Math.pow(side, 2);
}

export function equilateralTrianglePerimeter(side) {
    return 3 * side;
}

export function triangleArea(side1, side2, side3) {
    const halfOfPerimeter = trianglePerimeter(side1, side2, side3) / 2;
    
    return Math.sqrt(halfOfPerimeter * (halfOfPerimeter - side1) * (halfOfPerimeter - side2) * (halfOfPerimeter - side3));
}

export function trianglePerimeter(side1, side2, side3) {
    return side1 + side2 + side3;
}