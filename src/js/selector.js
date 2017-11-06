export default function $(selector, context) {
    return (context || document).querySelector(selector);
}