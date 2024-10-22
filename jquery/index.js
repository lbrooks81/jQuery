$(document).ready(function ()
{
    let side1;
    let side2;
    let side3;
    let triangleNum = 0;

    $('input[name="side-1"]').change(function()
    {
        side1 = parseInt($('#input-1').val());
    });
    $('input[name="side-2"]').change(function()
    {
        side2 = parseInt($('#input-2').val());
    });
    $('input[name="side-3"]').change(function()
    {
        side3 = parseInt($('#input-3').val());
    });

    $('#submit-btn').click(function()
    {
        let triangleRow = $('<tr>').prop('id', `row-${triangleNum++}`);

        let sideOneItem = $('<th>').text(side1);
        let sideTwoItem = $('<th>').text(side2);
        let sideThreeItem = $('<th>').text(side3);
        let perimeter = $('<th>').text(calculatePerimeter(side1, side2, side3));
        let area = $('<th>').text(calculateArea(side1, side2, side3));

        triangleRow.append(sideOneItem);
        triangleRow.append(sideTwoItem);
        triangleRow.append(sideThreeItem);
        triangleRow.append(perimeter);
        triangleRow.append(area);

        if(calculateArea(side1, side2, side3) <= 0 || isNaN(calculateArea(side1, side2, side3)))
        {
            $('#error-message').text("Error: Triangle is not real");
            return;
        }

        $('#error-message').text("");
        $('tbody').append(triangleRow);
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