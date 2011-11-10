/********************************************************************************/
/* DOM Events Level 2 */
/********************************************************************************/

// http://www.w3.org/TR/2000/REC-DOM-Level-2-Events-20001113/events.html
buster.testCase("DOM Events Level 2", {
    // 1.3.1. Event registration interfaces

    // interfaces
    "[interface EventTarget]": function () {},
    "[interface EventListener]": function () {},

    // 1.4. Event interface

    // interfaces
    "[interface Event]": function () {},

    // exceptions
    "[exception EventException]": function () {},

    // 1.5. DocumentEvent interface

    // interfaces
    "[interface DocumentEvent]": function () {},

    // 1.6.1. User Interface event types

    // interfaces
    "[interface UIEvent : Event]": function () {},

    // 1.6.2. Mouse event types

    // interfaces
    "[interface MouseEvent : UIEvent]": function () {},

    // 1.6.4. Mutation event types

    // interfaces
    "[interface MutationEvent : Event]": function () {}
});
