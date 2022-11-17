"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const baseURL = "http://localhost:" + (process.env.PORT || 4001) + "/api/balance";
http: describe("Post /getTotalBalance_MultiAddress", () => {
    describe("addresses not provided", () => {
        test("should respond with a 400 status code", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield (0, supertest_1.default)(baseURL).post("/getTotalBalance_MultiAddress");
            expect(response.statusCode).toBe(400);
        }));
        test("should return message - Address not provided", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield (0, supertest_1.default)(baseURL).post("/getTotalBalance_MultiAddress");
            expect(response.body.message).toEqual(expect.stringContaining("Address not provided"));
        }));
    });
    describe("addresses are provided", () => {
        const payload = {
            addresses: [
                "0x39a582bE8039a526Bdf4730e4D1E3E0fE1Bc811b",
                "0x902c38F2bcddF95E7BCE50A14515B4B62F502Bf2",
                "0xBcFE52fEF72A70AD09245e40AEAcCE4B1e851320",
                "0x0560de6E5a452a00F58a90cb5501C18e77EB91B4",
            ],
        };
        test("should respond object containing addresses and totalBalance fields", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield (0, supertest_1.default)(baseURL)
                .post("/getTotalBalance_MultiAddress")
                .send(payload);
            expect(response.body.addresses).toBeDefined();
            expect(response.body.totalBalance).toBeDefined();
        }));
        test("should respond with a 200 status code", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield (0, supertest_1.default)(baseURL)
                .post("/getTotalBalance_MultiAddress")
                .send(payload);
            expect(response.statusCode).toBe(200);
        }));
        test("response type should be json", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield (0, supertest_1.default)(baseURL)
                .post("/getTotalBalance_MultiAddress")
                .send(payload);
            expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
        }));
    });
});
