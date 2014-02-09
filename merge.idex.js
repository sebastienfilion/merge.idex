    /**
     *
     * @param object1 {object} The original object
     * @param object2 {object} The object to merge with
     * @returns {object} The merged object
     *
     */
    idex.merge = function(object1, object2) {
        if (!object1) return object2;

        if (!object2) return object1;

        // If object2 is an object but not and array or a function
        if ((typeof object2 !== 'object') || (typeof object2 === 'object') && (object2 instanceof Array) && (object2 instanceof Function)) {
            return object2;
        }

        if (!(object2 instanceof HTMLElement)) {
            for (key in object2) {
                console.log(object1);
                if (object1.hasOwnProperty(key)) {

                    object1[key] = idex.merge(object1[key], object2[key]);
                } else {
                    object1[key] = object2[key];
                }
            }
        }

        return object1;
    };
