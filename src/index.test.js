/*eslint-env node, mocha */

import {expect} from "chai";
import bddStdin from "bdd-stdin";

import * as question from "./index";

describe("ux-questions", function() {
    describe("yesNo", function() {
        it("should return true when the user presses 'y'", function() {
            bddStdin("y\n");
            return question.yesNo("Test yes/no").then(function(ans) {
                expect(ans).to.equal(true);
            });
        });

        it("should return false when the user presses 'n'", function() {
            bddStdin("n\n");
            return question.yesNo("Test yes/no").then(function(ans) {
                expect(ans).to.equal(false);
            });
        });

        it("should return default of true if no default is passed", function() {
            bddStdin("\n");
            return question.yesNo("Test yes/no").then(function(ans) {
                expect(ans).to.equal(true);
            });
        });

        it("should accept a default value, and return that if enter is pressed", function() {
            bddStdin("\n");
            return question.yesNo("Test yes/no", true).then(function(ans) {
                expect(ans).to.equal(true);

                bddStdin("\n");
                return question.yesNo("Test yes/no", false).then(function(ans) {
                    expect(ans).to.equal(false);
                });
            });
        });

        it("should still return the user's choice even if a default is set", function() {
            bddStdin("n\n");
            return question.yesNo("Test yes/no", true).then(function(ans) {
                expect(ans).to.equal(false);

                bddStdin("y\n");
                return question.yesNo("Test yes/no", false).then(function(ans) {
                    expect(ans).to.equal(true);
                });
            });
        });
    });

    describe("text", function() {
        it("should return the user's answer", function() {
            bddStdin("Test\n");
            return question.text("Test text").then(function(ans) {
                expect(ans).to.equal("Test");
            });
        });

        it("should accept a default value, and return that if enter is pressed", function() {
            bddStdin("\n");
            return question.text("Test text", "Test").then(function(ans) {
                expect(ans).to.equal("Test");
            });
        });

        it("should still return the user's choice even if a default is set", function() {
            bddStdin("Other\n");
            return question.text("Test text", "Test").then(function(ans) {
                expect(ans).to.equal("Other");
            });
        });
    });

    describe("password", function() {
        it("should return the user's answer", function() {
            bddStdin("Test\n");
            return question.password("Test password").then(function(ans) {
                expect(ans).to.equal("Test");
            });
        });

        it("should accept a default value, and return that if enter is pressed", function() {
            bddStdin("\n");
            return question.password("Test password", "Test").then(function(ans) {
                expect(ans).to.equal("Test");
            });
        });

        it("should still return the user's choice even if a default is set", function() {
            bddStdin("Other\n");
            return question.password("Test password", "Test").then(function(ans) {
                expect(ans).to.equal("Other");
            });
        });
    });

    describe("list", function() {
        it("should return the first choice without interaction if only one choice is passed", function() {
            return question.list("Test list", ["Test"]).then(function(ans) {
                expect(ans).to.equal("Test");
            });
        });

        it("should return the user's answer", function() {
            bddStdin("\n");
            return question.list("Test list", ["1", "2"]).then(function(ans) {
                expect(ans).to.equal("1");
            });
        });

        it("should allow the user to pick an option that is not the first option", function() {
            bddStdin(bddStdin.keys.down, bddStdin.keys.down, "\n");
            return question.list("Test list", ["1", "2", "3"]).then(function(ans) {
                expect(ans).to.not.equal("1");
            });
        });

        it("should accept a default value, and return that if enter is pressed", function() {
            bddStdin("\n");
            return question.list("Test list", ["1", "2", "3"], 2).then(function(ans) {
                expect(ans).to.equal("3");
            });
        });
    });

    describe("checkbox", function() {
        it("should return the first choice without interaction if only one choice is passed", function() {
            return question.list("Test checkbox", ["1"]).then(function(ans) {
                expect(ans).to.equal("1");
            });
        });

        it("should return the user's answer", function() {
            bddStdin(" \n");
            return question.checkbox("Test checkbox", ["1", "2"]).then(function(ans) {
                expect(ans).to.eql(["1"]);
            });
        });

        it("should allow multiple answers", function() {
            bddStdin(" ", bddStdin.keys.down, " \n");
            return question.checkbox("Test checkbox", ["1","2"]).then(function(ans){
                expect(ans).to.eql(["1", "2"]);
            });
        });
    });
});
