const hammer = "data:image/png;base64,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";
export default hammer;
//# sourceMappingURL=hammer.js.map