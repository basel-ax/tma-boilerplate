import { apiFetch } from '@/utils/genericApiFetch';
import {
	TelegramInitData,
	User,
	InitMiniAppResponse,
	SendDatesResponse,
	CalendarType,
} from '@/types/Types';

export const initMiniApp = async (initData: TelegramInitData): Promise<InitMiniAppResponse> => {
	return apiFetch<InitMiniAppResponse>('/miniApp/init', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(initData),
	});
};

export const getMe = async (token: string): Promise<{ user: User }> => {
	return apiFetch<{ user: User }>('/miniApp/me', {
		headers: { Authorization: `Bearer ${token}` },
	});
};

export const getCalendarByRef = async (
	token: string | null,
	ref: string
): Promise<{ calendar: CalendarType }> => {
	return apiFetch<{ calendar: CalendarType }>(`/miniApp/calendar/${ref}`, {
		headers: { Authorization: `Bearer ${token}` },
	});
};

export const sendDates = async (
	token: string | null,
	dates: string[]
): Promise<SendDatesResponse> => {
	return apiFetch<SendDatesResponse>('/miniApp/dates', {
		method: 'POST',
		headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
		body: JSON.stringify({ dates }),
	});
};
