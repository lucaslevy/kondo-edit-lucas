import React from 'react'

/**
 * Import const of error messages
 */
import TranslationErros from './errors/pt_br'

/**
 * Method to translate the messages
 */
export function getTranslation (message){

    /**
     * Find to message inside const of messages
     */
    let translation = TranslationErros.API_ERRORS.find(function (obj){
        return obj.en === message
    })

    /**
     * If there is no translation, return the same message given
     */
    if (!translation) {
        return message
    }

    /**
     * Return the message translated  
     */
    return translation.pt_br

}