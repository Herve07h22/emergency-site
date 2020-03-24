const { DateTime } = require('luxon')
const CleanCSS = require('clean-css')

module.exports = {
    dateToFormat: function(date, format, lang) {
        return DateTime.fromJSDate(date, { zone: 'utc', }).setLocale(lang).toFormat(
            String(format)
        )
    },

    dateToISO: function(date) {
        return DateTime.fromJSDate(date, { zone: 'utc' }).toISO({
            includeOffset: false,
            suppressMilliseconds: true
        })
    },

    cssmin: function(css) {
        return new CleanCSS({}).minify(css).styles
    }
}
