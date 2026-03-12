class ValidationError extends Error {
    constructor(fields) {
        super();
        this.fields = fields;
    }
}

function validateSchema(data, schema) {
    let bad = [];
    for (let k in schema) {
        if (typeof data[k] !== schema[k]) bad.push(k);
    }
    if (bad.length) throw new ValidationError(bad);
}

function safeValidate(data, schema) {
    try {
        validateSchema(data, schema);
    } catch (e) {
        return e.fields.join(", ");
    }
}

// Test Code
const userSchema = { name: 'string', age: 'number', active: 'boolean' };
const userData = { name: 'Alice', age: 'thirty', active: 1 };
console.log(safeValidate(userData, userSchema));