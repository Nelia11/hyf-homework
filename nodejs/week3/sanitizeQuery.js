const validateSortParameter = (sortParam) => {
    //using RegEx to validate user input 
    const onlyLettersPattern = /^[A-Za-z_]+$/;
    return sortParam.match(onlyLettersPattern);
};

const validateSortColumn = (sortColumn) => {
    // allowlisting
    const validColumns = [
        "id", 
        "first_name", 
        "last_name", 
        "email", 
        "phone"
    ];
    return validColumns.includes(sortColumn);
}

module.exports = {
    validateSortParameter,
    validateSortColumn
};