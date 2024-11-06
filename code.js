function binarySearch(list, element)
{
    let left = 0;
    let right = list.length - 1;
    let result = -1;
    while (left <= right)
    {
        let mid = Math.floor((left + right) / 2);
        // If the index is found at mid, that value is stored
        //  and then the left half is searched to see if the
        //  chosen element is a duplicated element
        if (list[mid] === element)
        {
            result = mid;
            right = mid - 1;
        }
        // Search the left half
        else if (list[mid] > element)
        {
            right = mid - 1;
        }
        // Search the right half
        else
        {
            left = mid + 1;
        }
    }
    return result; // If mid was not found the default value of result if -1
}