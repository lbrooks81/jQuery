document.addEventListener('DOMContentLoaded', () =>
{
    let side1;
    let side2;
    let side3;
    let triangleNum = 0;

    let errorMessage = document.getElementById('error-message');


    document.getElementById('input-1')
        .addEventListener('change', (e) =>
    {
       side1 = parseInt(e.target.value);
    });

    document.getElementById('input-2')
        .addEventListener('change', (e) =>
    {
        side2 = parseInt(e.target.value);
    });

    document.getElementById('input-3')
        .addEventListener('change', (e) =>
    {
        side3 = parseInt(e.target.value);
    });

    document.getElementById('submit-btn')
        .addEventListener('click', () =>
    {
        let triangleRow = document.createElement('tr');
        triangleRow.setAttribute('id', `row-${triangleNum++}`);

        let sideOneItem = document.createElement('th');
        sideOneItem.textContent = side1;

        let sideTwoItem = document.createElement("th");
        sideTwoItem.textContent = side2;

        let sideThreeItem = document.createElement('th');
        sideThreeItem.textContent = side3;

        let perimeter = document.createElement('th');
        perimeter.textContent = calculatePerimeter(side1, side2, side3);

        let area = document.createElement('th');
        area.textContent = calculateArea(side1, side2, side3);

        triangleRow.append(sideOneItem);
        triangleRow.append(sideTwoItem);
        triangleRow.append(sideThreeItem);
        triangleRow.append(perimeter);
        triangleRow.append(area);

        if(calculateArea(side1, side2, side3) <= 0 || isNaN(calculateArea(side1, side2, side3)))
        {
            errorMessage.textContent = "Error: Triangle is not real";
            return;
        }

        errorMessage.textContent = "";
        document.querySelector('tbody').append(triangleRow);
    });
});


// / Calculates the area of a triangle given its side lengths using Heron's Formula
function calculateArea(s1, s2, s3)
{
    let s = (s1 + s2 + s3) / 2;
    return Math.sqrt(s * ((s - s1) * (s - s2) * (s - s3)));
}

// / Calculates the perimeter of a triangle given its side lengths
function calculatePerimeter(s1, s2, s3)
{
    return s1 + s2 + s3;
}
