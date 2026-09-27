import { jest, describe, beforeEach, expect, test } from "@jest/globals";

const mockUserModel = {
    findOne: jest.fn(),
    create: jest.fn()
};

jest.unstable_mockModule("../models/user.model.js", () => ({
    default: mockUserModel
}));

const { signup, login } = await import("./user.controller.js");

const createResponse = () => {
    const response = {};
    response.status = jest.fn().mockReturnValue(response);
    response.json = jest.fn().mockReturnValue(response);
    return response;
};

describe("user controller", () => {
    beforeEach(() => {
        jest.clearAllMocks();
        process.env.JWT_SECRET = "test-secret";
    });

    test("signup returns 400 when required fields are missing", async () => {
        const response = createResponse();

        await signup({ body: { email: "test@example.com" } }, response);

        expect(response.status).toHaveBeenCalledWith(400);
        expect(response.json).toHaveBeenCalledWith({
            success: false,
            message: "Please provide all fields"
        });
        expect(mockUserModel.findOne).not.toHaveBeenCalled();
    });

    test("signup creates a user and returns a token", async () => {
        const response = createResponse();
        mockUserModel.findOne.mockResolvedValue(null);
        mockUserModel.create.mockResolvedValue({
            _id: "user-1",
            name: "Test User",
            email: "test@example.com",
            password: "hashed-password"
        });

        await signup({
            body: {
                name: "Test User",
                email: "test@example.com",
                password: "password123"
            }
        }, response);

        expect(mockUserModel.create).toHaveBeenCalledWith(expect.objectContaining({
            name: "Test User",
            email: "test@example.com",
            password: expect.any(String)
        }));
        expect(response.status).toHaveBeenCalledWith(201);
        expect(response.json).toHaveBeenCalledWith({
            success: true,
            data: expect.objectContaining({
                _id: "user-1",
                name: "Test User",
                email: "test@example.com",
                token: expect.any(String)
            })
        });
    });

    test("login returns 400 for invalid credentials", async () => {
        const response = createResponse();
        mockUserModel.findOne.mockResolvedValue(null);

        await login({
            body: { email: "missing@example.com", password: "password123" }
        }, response);

        expect(response.status).toHaveBeenCalledWith(400);
        expect(response.json).toHaveBeenCalledWith({
            success: false,
            message: "Invalid credentials"
        });
    });

    test("login returns a token for valid credentials", async () => {
        const response = createResponse();
        mockUserModel.findOne.mockResolvedValue({
            _id: "user-1",
            name: "Test User",
            email: "test@example.com",
            password: "$2b$10$RDbS66Y55wNP6nTs7uCipufXm9ffAcHrVfu0W.364XB4D7X16A0rK"
        });

        await login({
            body: { email: "test@example.com", password: "password123" }
        }, response);

        expect(response.status).toHaveBeenCalledWith(200);
        expect(response.json).toHaveBeenCalledWith({
            success: true,
            data: expect.objectContaining({
                _id: "user-1",
                name: "Test User",
                email: "test@example.com",
                token: expect.any(String)
            })
        });
    });
});
