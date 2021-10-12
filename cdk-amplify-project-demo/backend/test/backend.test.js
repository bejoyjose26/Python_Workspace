"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("@aws-cdk/assert");
const cdk = require("@aws-cdk/core");
const Backend = require("../lib/backend-stack");
test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Backend.BackendStack(app, 'MyTestStack');
    // THEN
    assert_1.expect(stack).to(assert_1.matchTemplate({
        "Resources": {}
    }, assert_1.MatchStyle.EXACT));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFja2VuZC50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNENBQWlGO0FBQ2pGLHFDQUFxQztBQUNyQyxnREFBZ0Q7QUFFaEQsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUU7SUFDckIsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDMUIsT0FBTztJQUNQLE1BQU0sS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDM0QsT0FBTztJQUNQLGVBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsc0JBQWEsQ0FBQztRQUNoQyxXQUFXLEVBQUUsRUFBRTtLQUNoQixFQUFFLG1CQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtBQUN6QixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4cGVjdCBhcyBleHBlY3RDREssIG1hdGNoVGVtcGxhdGUsIE1hdGNoU3R5bGUgfSBmcm9tICdAYXdzLWNkay9hc3NlcnQnO1xyXG5pbXBvcnQgKiBhcyBjZGsgZnJvbSAnQGF3cy1jZGsvY29yZSc7XHJcbmltcG9ydCAqIGFzIEJhY2tlbmQgZnJvbSAnLi4vbGliL2JhY2tlbmQtc3RhY2snO1xyXG5cclxudGVzdCgnRW1wdHkgU3RhY2snLCAoKSA9PiB7XHJcbiAgICBjb25zdCBhcHAgPSBuZXcgY2RrLkFwcCgpO1xyXG4gICAgLy8gV0hFTlxyXG4gICAgY29uc3Qgc3RhY2sgPSBuZXcgQmFja2VuZC5CYWNrZW5kU3RhY2soYXBwLCAnTXlUZXN0U3RhY2snKTtcclxuICAgIC8vIFRIRU5cclxuICAgIGV4cGVjdENESyhzdGFjaykudG8obWF0Y2hUZW1wbGF0ZSh7XHJcbiAgICAgIFwiUmVzb3VyY2VzXCI6IHt9XHJcbiAgICB9LCBNYXRjaFN0eWxlLkVYQUNUKSlcclxufSk7XHJcbiJdfQ==